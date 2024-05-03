import { Country } from "./country.interface";
import { Region } from "./region.type";

export interface RegionCountries {
  region: Region;
  countries: Country[];
}
