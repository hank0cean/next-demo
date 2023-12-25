import { keysOf } from "@/utils/keysOf";
import { useEffect, useState } from "react";

const sizes = {
  narrowMobile: 375,
  mobile: 425,
  tabletPortrait: 640,
  tablet: 768,
  laptop: 1024,
  widerLaptop: 1050,
  desktop: 1440,
};

export const minWidthQuery = (width: number) =>
  `@media (min-width: ${width}px)`;

export const from = keysOf(sizes).reduce(
  (acc: any, key: keyof typeof sizes) => ({
    ...acc,
    [key]: minWidthQuery(sizes[key]),
  }),
  {} as { [key in keyof typeof sizes]: string }
);

export const useMediaQuery = (query: string): boolean => {
  const mediaQuery = query.replace("@media", "").trim();
  const [match, setMatch] = useState<boolean>(false);

  useEffect(() => {
    setMatch(() => window.matchMedia(mediaQuery).matches);

    const mediaQueryList = window.matchMedia(mediaQuery);

    const handleChange = (event: MediaQueryListEvent) =>
      setMatch(event.matches);

    mediaQueryList.addListener(handleChange);

    return () => mediaQueryList.removeListener(handleChange);
  }, [mediaQuery]);

  return match;
};
