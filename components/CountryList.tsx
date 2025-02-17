import CountryListItem from './CountryListItem';
import { type Country } from './types';

export default function CountryList({ countries }: { countries: Country[] }) {
  return (
    <div className="p-8">
      <header className="mb-4">
        <h1>Countries ({countries.length})</h1>
      </header>
      <table className="table-auto bg-mute divide-y divide-mute text-left rounded ">
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
          {countries.map((country) => (
            <CountryListItem key={country.cca2} {...country} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
