export type Country = {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common: string;
    official: string;
  };
  capital: string[];
  capitalInfo: {
    latlng: [number, number];
  };
  currencies: Record<string, { name: string; symbol: string }>;
  cca2: string;
  languages: Record<string, string>;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  region: string;
  subregion: string;
};
