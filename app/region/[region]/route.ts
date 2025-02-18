import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: { region: string } }
) {
  const { region } = await params;
  const res = await fetch(
    `https://restcountries.com/v3.1/region/${region}?fields=name,region,subregion,flag`
  );
  if (!res.ok) {
    let error;
    if (res.headers.get('content-type') === 'application/json') {
      error = await res.json();
    } else {
      error = await res.text();
    }
    return NextResponse.json(error);
  }
  const data = await res.json();
  return NextResponse.json({ status: 200, totalCount: data.length, data });
}
