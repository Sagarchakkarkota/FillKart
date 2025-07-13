import { ImageSourcePropType } from "react-native";

interface ICarouselImages {
  id: number;
  url: ImageSourcePropType;
}

interface ICategory {
  id: number;
  title: string;
  path: string;
  url: any;
}

export type { ICarouselImages, ICategory };
