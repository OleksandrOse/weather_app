export interface Address {
  address: {
    city: string;
    country: string;
    country_code: string;
    district: string;
    house_number: string;
    municipality: string;
    postcode: string;
    quarter: string;
    road: string;
    state: string;
    suburb: string;
  };
  boundingbox: [];
  display_name: string;
  lat: string;
  licence: string;
  lon: string;
  osm_id: string;
  osm_type: string;
  place_id: string;
}
