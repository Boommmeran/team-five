import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import PoppinsMediumTtf from '../fonts/Poppins-Medium.ttf';
import PoppinsRegularTtf from '../fonts/Poppins-Regular.ttf';
import PoppinsSemiBoldTtf from '../fonts/Poppins-SemiBold.ttf';
import PoppinsMediumWoff from '../fonts/Poppins-Medium.woff';
import PoppinsRegularWoff from '../fonts/Poppins-Regular.woff';
import PoppinsSemiBoldWoff from '../fonts/Poppins-SemiBold.woff';

export const GlobalStyles = createGlobalStyle`

:root {
  --accent: ${({ theme }) => theme.accent};
  --hover: ${({ theme }) => theme.hover};
  --transition: ${({ theme }) => theme.transition};
  --headerBgColor: ${({ theme }) => theme.headerBgColor};
  --primaryBgColor: ${({ theme }) => theme.primaryBgColor};
  --secondaryBgColor: ${({ theme }) => theme.secondaryBgColor};
  --primaryTextColor: ${({ theme }) => theme.primaryTextColor};
  --secondaryTextColor: ${({ theme }) => theme.secondaryTextColor};
  --nonAccentTextColor: ${({ theme }) => theme.nonAccentTextColor};
  --btnPlus: ${({ theme }) => theme.btnPlus};
  --btnPlusHover: ${({ theme }) => theme.btnPlusHover};
  /* --modalBgColor: ${({ theme }) => theme.modalBgColor};
  --btnText: ${({ theme }) => theme.btnText};
  --btnBgColor: ${({ theme }) => theme.btnBgColor};
  --plusInBtn: ${({ theme }) => theme.plusInBtn};
  --btnBgColorHover: ${({ theme }) => theme.btnBgColorHover}; */
}

@font-face {
  font-family: 'Poppins-Regular';
  src: local('Poppins-Regular'), url(${PoppinsRegularTtf}) format('ttf'), url(${PoppinsRegularWoff}) format('woff');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Poppins-Medium';
  src: local('Poppins-Medium'), url(${PoppinsMediumTtf}) format('ttf'), url(${PoppinsMediumWoff}) format('woff');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'Poppins-SemiBold';
  src: local('Poppins-SemiBold'), url(${PoppinsSemiBoldTtf}) format('ttf'), url(${PoppinsSemiBoldWoff}) format('woff');
  font-weight: 600;
  font-style: normal;
}

body {
  font-family: 'Poppins-Regular', sans-serif;
  margin: 0 auto;
}

img {
    display: block;
    max-width: 100%;
    object-fit: cover;
  }
  
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}

ul {
  margin: 0;
  padding: 0;
  text-decoration: none;
}

a {
  text-decoration: none;
}

li{
  text-decoration: none;
  list-style: none;
  padding: 0;
}
`;
