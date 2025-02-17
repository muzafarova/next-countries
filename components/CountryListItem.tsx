import Link from 'next/link';
import FlagImage from './FlagImage';
import { type Country } from './types';

export default function CountryListItem({
  name,
  flags,
  capital,
  capitalInfo,
  currencies,
  cca2,
  maps,
  languages,
  region,
  subregion,
}: Country) {
  return (
    <tr>
      <td className="t-cell">
        <FlagImage src={flags.svg} alt={flags.alt} />
      </td>
      <td className="t-cell">
        <b className="block">{name.common}</b>
        {name.official !== name.common ? (
          <small className="inline-block text-mute leading-5">
            (Off. {name.official})
          </small>
        ) : null}
      </td>
      <td className="t-cell">
        <code className="block text-center">{cca2}</code>
      </td>
      <td className="t-cell">
        {region}
        <small className="block text-mute leading-5">{subregion}</small>
      </td>
      <td className="t-cell">
        {capital.join(', ')}
        <small className="block text-mute leading-5">
          {capitalInfo &&
          capitalInfo.latlng &&
          capitalInfo.latlng.length > 0 ? (
            <Link href={maps.googleMaps}>
              {capitalInfo.latlng[0]},{capitalInfo.latlng[1]}
            </Link>
          ) : (
            'N/A'
          )}
        </small>
      </td>
      <td className="t-cell">
        {Object.entries(currencies).map(([code, { symbol, name }]) => (
          <span key={code} className="flex gap-4 cursor-help" title={name}>
            <code>{code}</code>
            {symbol}
          </span>
        ))}
      </td>
      <td className="t-cell">
        <span>{Object.values(languages).join(', ')}</span>
      </td>
    </tr>
  );
}
