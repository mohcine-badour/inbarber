import { useFonts } from 'expo-font';

export const fonts = {
  santaunicorn: 'SantaUnicorn',
  poppins: 'Poppins',
  lato: 'Lato',
};

export const useAppFonts = () => {
  const [fontsLoaded] = useFonts({
    SantaUnicorn: require('../fonts/Santa_Unicorn.ttf'),
    Poppins: require('../fonts/Poppins-Black.ttf'),
    Lato: require('../fonts/Lato-Light.ttf'),
  });

  return fontsLoaded;
};

