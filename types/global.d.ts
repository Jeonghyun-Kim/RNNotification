// untyped modules
interface ErrorFromServer {
  code: number;
  statusCode: number;
  message: string;
}

interface ImageData {
  _id: string;
  artistId: string;
  url: string;
  thumbUrl: string;
  aspectRatio: number;
  created: Date;
}

interface ArtistData {
  _id: string;
  name: string;
  username: string;
  artistHistory: string;
}

interface ArtworkData {
  _id: string;
  artist: ArtistData;
  images: ImageData[];
  title: string;
  size: { width: number; height: number };
  year: number;
  price: number;
  counts: { view: number; like: number; share: number };
  created: string;
  lastUpdated: string;
  material: string;
  extraInfo?: string;
  description?: string;
  onSale: 'onSale' | 'soldOut' | 'notForSale';
}

interface ContentData {
  type: string;
  text: string;
  images: ImageData[];
  artwork: ArtworkData;
  title: string;
  ref?: {
    label: string;
    href?: string;
  };
  video: VideoData;
}

interface VideoData {
  _id: string;
  artistId: string;
  url: string;
  duration: number;
  created: string;
}

interface BoothData {
  _id: string;
  title: string;
  repImage: ImageData;
  artist: ArtistData;
  artworks: ArtworkData[];
  contents: ContentData[];
  tags: string[];
  insta: string;
  counts: { view: number; like: number; share: number };
  created: string;
  lastUpdated: string;
  artistNote: string;
  repVideo: VideoData;
}
