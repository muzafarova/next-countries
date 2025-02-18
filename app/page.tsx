import { getAllCountries } from '@/api/country';
import CountryList from '@/components/CountryList';

export default async function Home() {
  const data = await getAllCountries();

  return (
    <main>
      <CountryList countries={data} />
    </main>
  );
}
