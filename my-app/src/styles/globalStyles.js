import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background:${({theme})=>theme.body};
  }`;
export const lightThem={
      body:'#fff',
      text:"#121212"

}
export const darktThem={
    body:'#121212',
    text:"#fff"

}