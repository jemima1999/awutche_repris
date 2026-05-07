import { NextRequest, NextResponse } from 'next/server';
import { COUTURIERS_MOCK } from '@/lib/data';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const ville = searchParams.get('ville');
  const specialite = searchParams.get('specialite');
  const disponible = searchParams.get('disponible');

  let results = [...COUTURIERS_MOCK];
  if (ville) results = results.filter(c => c.ville === ville);
  if (specialite) results = results.filter(c => c.specialites.includes(specialite as any));
  if (disponible === 'true') results = results.filter(c => c.disponible);

  return NextResponse.json({ couturiers: results, total: results.length });
}
