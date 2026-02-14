import { getPayload } from 'payload'
import config from '@payload-config'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, projectType } = body

    if (!name || !email || !projectType) {
      return NextResponse.json(
        { error: 'Name, email, and project type are required.' },
        { status: 400 },
      )
    }

    const payload = await getPayload({ config })

    const inquiry = await payload.create({
      collection: 'inquiries',
      data: {
        name,
        email,
        projectType,
      },
    })

    return NextResponse.json(
      { message: 'Inquiry submitted successfully.', id: inquiry.id },
      { status: 201 },
    )
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : 'An unexpected error occurred.'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
