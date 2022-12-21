export interface City {
  id: number;
  name: string;
  population: number;
  area: number;
  description: string;
  images: string[];
  youtubeVideoId: string | null;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}
