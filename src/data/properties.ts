export type Property = {
  slug: string;
  name: string;
  location: string;
  heroImage: string;
  images: string[];
  description: string;
  amenities: string[];
  // Optional extra details for richer pages
  bedrooms?: number;
  bathrooms?: number;
  areaSqft?: number;
  propertyType?: string; // e.g., Apartment, Duplex, Terrace
  status?: string; // e.g., For Rent, For Sale, New
  mapQuery?: string; // Used for embedding Google Maps without API key
};
import fs from "fs";
import path from "path";

const dataDir = path.join(process.cwd(), "data");
const propertiesPath = path.join(dataDir, "properties.json");

export const getAllProperties = (): Property[] => {
  const raw = fs.readFileSync(propertiesPath, "utf8");
  return JSON.parse(raw) as Property[];
};

export const getPropertyBySlug = (slug: string): Property | undefined =>
  getAllProperties().find((p) => p.slug === slug);

export const saveAllProperties = (items: Property[]) => {
  fs.writeFileSync(propertiesPath, JSON.stringify(items, null, 2), "utf8");
};

export const upsertProperty = (item: Property) => {
  const items = getAllProperties();
  const idx = items.findIndex((p) => p.slug === item.slug);
  if (idx >= 0) items[idx] = item;
  else items.push(item);
  saveAllProperties(items);
};

export const deleteProperty = (slug: string) => {
  const items = getAllProperties().filter((p) => p.slug !== slug);
  saveAllProperties(items);
};
