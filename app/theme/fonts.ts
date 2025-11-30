import { useFonts } from 'expo-font';

export const fonts = {
  santaunicorn: 'SantaUnicorn',
};

export const useAppFonts = () => {
  const [fontsLoaded] = useFonts({
    SantaUnicorn: require('../fonts/Santa_Unicorn.ttf'),
  });

  return fontsLoaded;
};

