import { createGlobalStyle } from 'styled-components'

export const cores = {
  salmao: '#E66767',
  begeClaro: '#FFF8F2',
  begeEscuro: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    text-decoration: none;
  }

  body {
    background-color: ${cores.begeClaro};
    color: ${cores.salmao};
  }

`
