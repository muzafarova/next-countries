import CountryList from '@/components/CountryList';
import { type Country } from '@/components/types';
const FIELDS =
  'name,flags,capital,capitalInfo,currencies,cca2,maps,languages,region,subregion';

export default async function Home() {
  const url = `https://restcountries.com/v3.1/all?fields=${FIELDS}`;
  const response = await fetch(url);
  // TODO error handling
  // TODO type safety
  const data = (await response.json()) as Country[];
  data.sort((a, b) => a.name.common.localeCompare(b.name.common));

  return (
    <main>
      <CountryList countries={data} />
    </main>
  );
}
