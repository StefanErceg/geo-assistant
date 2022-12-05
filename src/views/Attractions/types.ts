export interface Attraction {
  id: number;
  name: string;
  coordinate: {
    latitude: number;
    longitude: number;
  };
  shortDescription: string;
  description: string;
}
