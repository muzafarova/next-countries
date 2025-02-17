import { NextResponse } from 'next/server';

export async function GET() {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const data = await response.json();
  return NextResponse.json({ status: 200, totalCount: data.length, data });
}
