/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
import config from '@payload-config'
import { GRAPHQL_PLAYGROUND_GET, GRAPHQL_POST } from '@payloadcms/next/routes'
import { NextResponse } from 'next/server'

export const GET = process.env.NODE_ENV === 'production'
  ? () => NextResponse.json({ error: 'Not available' }, { status: 404 })
  : GRAPHQL_PLAYGROUND_GET(config)
export const POST = GRAPHQL_POST(config)
