import { RegionCountries } from "./regionCountries.interface";
import { TermCountries } from "./termCountries.interface";

export interface CacheStore {
  byCapital: TermCountries;
  byCountry: TermCountries;
  byRegion: RegionCountries;
}
