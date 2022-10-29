import { extendTheme } from 'native-base';

export function AccessibilityTheme(value ) {
  const multiplier = value[0].theme
  return extendTheme({
  colors: {
    green: {
      300: '#00B37E',
      500: '#00875F',
      400: '#36C312',
      700: '#015F43',
      900: '#3e8e41',
    },
    blue: {
      500: '#81D8F7',
    },
    orange: {
      500: '#FBA94C',
    },
    red: {
      500: '#F75A68',
    },
    gray: {
      100: '#f0f0f3',
      150: '#Ececec',
      200: '#C4C4CC',
      300: '#8D8D99',
      500: '#323238',
      600: '#29292E',
      700: '#121214',
      900: '#09090A',
    },
    grayHover: '#CCCCCC',
  },
  fonts: {
    // heading: 'Roboto_700Bold',
    // body: 'Roboto_400Regular',
  },
  fontSizes: {
    xs: 12 * multiplier,
    sm: 14 * multiplier,
    md: 16 * multiplier,
    lg: 20 * multiplier,
  },
  sizes: {
    14: 56
  }
})};