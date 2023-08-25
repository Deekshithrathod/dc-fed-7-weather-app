import { atom } from "recoil";
import { ISearchResult } from "../components/Sidepane/SearchConsole/SearchResults/SearchResult/SearchResult";

const defaultSearchResults: ISearchResult[] = [
  {
    lat: 51.5073219,
    lon: -0.1276474,
    name: "London",
    country: "GB",
    state: "England",
  },
  {
    lat: 40.7127281,
    lon: -74.0060152,
    name: "New York County",
    country: "US",
    state: "New York",
  },
  {
    lat: 28.6138954,
    lon: 77.2090057,
    name: "New Delhi",
    country: "IN",
    state: "Delhi",
  },
  {
    lat: 35.6828387,
    lon: 139.7594549,
    name: "Tokyo",
    country: "JP",
  },
];

export const searchResults = atom<ISearchResult[]>({
  key: "searchResults",
  default: defaultSearchResults,
});
