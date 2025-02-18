import z from 'zod';
import { request } from '@/utils/request';

const CountrySchema = z.object({
  name: z.object({
    official: z.string(),
    common: z.string(),
  }),
  flags: z.object({
    svg: z.string(),
  }),
  capital: z.array(z.string()),
});

const CountriesSchema = z.array(CountrySchema);
export type Country = z.infer<typeof CountrySchema>;

const FIELDS =
  'name,flags,capital,capitalInfo,currencies,cca2,maps,languages,region,subregion';

export async function getAllCountries() {
  const data = await request<Country[]>(
    `https://restcountries.com/v3.1/all?fields=${FIELDS}`
  );

  const parsed = CountriesSchema.safeParse(data);
  if (!parsed.success) {
    console.warn(parsed.error.issues);
  }

  data.sort((a, b) => a.name.common.localeCompare(b.name.common));
  return data;
}
