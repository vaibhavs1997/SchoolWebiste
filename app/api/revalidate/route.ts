import { revalidatePath } from 'next/cache'
import type { NextRequest } from 'next/server'
import { parseBody } from 'next-sanity/webhook'

export async function POST(request: NextRequest) {
  const { isValidSignature } = await parseBody(request, process.env.SANITY_REVALIDATE_SECRET)

  if (!isValidSignature) {
    return Response.json({ message: 'Invalid webhook signature.' }, { status: 401 })
  }

  revalidatePath('/', 'layout')
  return Response.json({ revalidated: true, now: Date.now() })
}
