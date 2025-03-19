export interface ICompany {
  "department": string,
  "name": string,
  "title": string,
  "address": {
    "address": string,
    "city": "San Francisco",
    "state": string,
    "stateCode": string,
    "postalCode": string,
    "coordinates": { "lat": number, "lng": number },
    "country": string
  }
}