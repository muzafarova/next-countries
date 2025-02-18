'use client';
import { useState } from 'react';
import CountryListItem from './CountryListItem';
import { type Country } from './types';
import SearchByName from './SearchByName';
import RegionSelect from './RegionSelect';

export default function CountryList({ countries }: { countries: Country[] }) {
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('');
  const filteredCountries = countries
    .filter((country) => {
      if (!search) {
        return true;
      }
      return (
        country.name.common.toLowerCase().match(search.toLowerCase()) ||
        country.name.official.toLowerCase().match(search.toLowerCase())
      );
    })
    .filter((country) => {
      if (!region) {
        return true;
      }
      return country.region === region;
    });

  return (
    <div className="p-8">
      <div className="p-4 mb-8 flex gap-4 bg-gray-50 dark:bg-gray-800 rounded">
        <RegionSelect
          countries={countries}
          region={region}
          setRegion={setRegion}
        />
        <SearchByName search={search} update={setSearch} />
      </div>

      <header className="mb-4">
        <h1>Countries ({filteredCountries.length})</h1>
      </header>
      <table className="table-auto bg-mute divide-y divide-mute text-left rounded w-full">
        <thead>
          <tr>
            <th className="t-header">Flag</th>
            <th className="t-header">Name</th>
            <th className="t-header">Code</th>
            <th className="t-header">Region</th>
            <th className="t-header">Capital</th>
            <th className="t-header">Currency</th>
            <th className="t-header">Languages</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-mute">
          {filteredCountries.map((country) => (
            <CountryListItem key={country.cca2} {...country} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
