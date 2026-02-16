import { getPayload } from 'payload'
import config from '@payload-config'
import { NextResponse } from 'next/server'

// Simple in-memory rate limiter (per IP, 5 requests per minute)
const rateLimit = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT_MAX = 5
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimit.get(ip)

  if (!entry || now > entry.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return false
  }

  entry.count++
  return entry.count > RATE_LIMIT_MAX
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 },
      )
    }

    const body = await request.json()
    const { name, email, projectType, phone, company, message } = body

    // Honeypot: if this hidden field is filled, it's a bot
    if (body.website) {
      return NextResponse.json(
        { message: 'Inquiry submitted successfully.' },
        { status: 201 },
      )
    }

    if (!name || !email || !projectType) {
      return NextResponse.json(
        { error: 'Name, email, and project type are required.' },
        { status: 400 },
      )
    }

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 },
      )
    }

    // Length limits
    if (name.length > 200 || email.length > 320 || projectType.length > 500) {
      return NextResponse.json(
        { error: 'Input exceeds maximum length.' },
        { status: 400 },
      )
    }

    const payload = await getPayload({ config })

    await payload.create({
      collection: 'inquiries',
      data: {
        name: name.slice(0, 200),
        email: email.slice(0, 320),
        projectType: projectType.slice(0, 500),
        ...(phone && { phone: String(phone).slice(0, 50) }),
        ...(company && { company: String(company).slice(0, 200) }),
        ...(message && { message: String(message).slice(0, 2000) }),
      },
    })

    return NextResponse.json(
      { message: 'Inquiry submitted successfully.' },
      { status: 201 },
    )
  } catch (error: unknown) {
    console.error('Inquiry submission failed:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred.' },
      { status: 500 },
    )
  }
}
