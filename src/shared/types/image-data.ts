export interface ImageSource {
  url: string;
  width?: number;
  height?: number;
}

export interface ImageData {
  sources: ImageSource[];
  extractedColors: {
    colorDark: {
      hex: string;
      isFallback: false;
    };
  };
}
