export interface City {
  id: number;
  name: Record<string, string>;
  population: number;
  area: number;
  description: string;
  imageUrl: string | null;
  youtubeVideoId: string | null;
}
