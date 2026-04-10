import { NextResponse } from 'next/server';
export async function GET() {
  return NextResponse.json({ exam: 'EXAM008', route: 'subscription-status', status: 'ok' });
}
