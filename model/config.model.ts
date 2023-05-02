export interface ConfigModel {
  baseRoute: {
    name: string;
    link: string;
  }[];
  mainTitle: string;
  logo: { image: string; text?: string } | { image?: string; text: string };
}
