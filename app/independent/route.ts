import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const res = await fetch(
    'https://restcountries.com/v3.1/independent?status=false&fields=name,unMember,status,region,subregion,flag,maps'
  );
  const data = await res.json();
  return NextResponse.json({ status: 200, totalCount: data.length, data });
}
