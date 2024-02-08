type TransformationData = {
  date: string;
  url: string;
  weight: number;
};

export const DUMMY_TRANSFORMATION_DATA: TransformationData[] = [
  {
    date: "2023-12-31",
    url: `https://i2-prod.mirror.co.uk/incoming/article8144525.ece/ALTERNATES/n310p/PAY-An-obese-mum-has-transformed-her-life-by-taking-selfie.jpg`,
    weight: 100,
  },
  {
    date: "2024-03-15",
    url: `https://i2-prod.mirror.co.uk/incoming/article8144530.ece/ALTERNATES/n310p/PAY-An-obese-mum-has-transformed-her-life-by-taking-selfie.jpg`,
    weight: 93,
  },
  {
    date: "2024-06-14",
    url: `https://i2-prod.mirror.co.uk/incoming/article8144524.ece/ALTERNATES/n310p/PAY-An-obese-mum-has-transformed-her-life-by-taking-selfie.jpg`,
    weight: 82,
  },
  {
    date: "2024-08-11",
    url: `https://i2-prod.mirror.co.uk/incoming/article8144527.ece/ALTERNATES/n310p/PAY-An-obese-mum-has-transformed-her-life-by-taking-selfie.jpg`,
    weight: 75,
  },
  {
    date: "2024-09-12",
    url: `https://i2-prod.mirror.co.uk/incoming/article8144523.ece/ALTERNATES/n310p/PAY-An-obese-mum-has-transformed-her-life-by-taking-selfie.jpg`,
    weight: 68,
  },
  {
    date: "2024-12-11",
    url: `https://i2-prod.mirror.co.uk/incoming/article8144529.ece/ALTERNATES/n310p/PAY-An-obese-mum-has-transformed-her-life-by-taking-selfie.jpg`,
    weight: 60,
  },
] as const;
