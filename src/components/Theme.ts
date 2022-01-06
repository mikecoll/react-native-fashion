import { createTheme, createText, createBox } from '@shopify/restyle'


const theme = createTheme({
  colors: {
    primary: "#2CB9B0",
    title: '#0C0D34',
    text: 'rgba(12, 13, 52, 0.7)',
    white: 'white',
    grey: 'rgba(12, 13, 52, 0.05)',
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
    hero: {
      fontWeight: 'bold',
      fontSize: 80,
      color: 'white',
      textAlign: 'center'
    },
    title1: {
      fontSize: 28,
      color: 'title',
      fontWeight: 'bold',
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      color: 'title',
      fontWeight: 'bold',
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      color: 'text',
    },
    button: {
      fontSize: 15,
      fontWeight: 'bold',
      color: 'text',
    }
  },
  breakpoints: {}
});
export type Theme = typeof theme;
export const Text = createText<Theme>();
export const Box = createBox<Theme>();
export default theme;
