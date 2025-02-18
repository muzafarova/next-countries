import type { Country } from './types';

export default function RegionSelect({
  countries,
  region,
  setRegion,
}: {
  countries: Country[];
  region: string;
  setRegion: (name: string) => void;
}) {
  const regions = Array.from(
    new Set(countries.map(({ region }) => region))
  ).sort((a, b) => a.localeCompare(b));

  return (
    <div className="flex gap-1">
      <select
        value={region}
        className="field"
        onChange={(e) => setRegion(e.target.value)}
      >
        <option value="">All regions</option>
        {regions.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}
