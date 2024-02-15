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
  
  --primaryBgColor: ${({ theme }) => theme.primaryBgColor};
  --secondaryBgColor: ${({ theme }) => theme.secondaryBgColor};
  --headerBgColor: ${({ theme }) => theme.headerBgColor};
  --modalBgColor: ${({ theme }) => theme.modalBgColor};

  --primaryTextColor: ${({ theme }) => theme.primaryTextColor};
  --secondaryTextColor: ${({ theme }) => theme.secondaryTextColor};

  --primaryOpacity: ${({ theme }) => theme.primaryOpacity};
  --secondaryOpacity: ${({ theme }) => theme.secondaryOpacity};
  --opacityInThemeModal: ${({ theme }) => theme.opacityInThemeModal};

  --btnPlus: ${({ theme }) => theme.btnPlus};
  --btnPlusHover: ${({ theme }) => theme.btnPlusHover};

  --btnBoardBg:${({ theme }) => theme.btnBoardBg};
  --modalBgColor: ${({ theme }) => theme.modalBgColor};
  --btnText: ${({ theme }) => theme.btnText};
  --btnBgColor: ${({ theme }) => theme.btnBgColor};
  --plusInBtn: ${({ theme }) => theme.plusInBtn};
  --btnBgColorHover: ${({ theme }) => theme.btnBgColorHover};
  --needHelpBg: ${({ theme }) => theme.needHelpBg};
  --extraBgColor: ${({ theme }) => theme.extraBgColor};
  --squareIconColor: ${({ theme }) => theme.squareIconColor};

  --cardsLine: ${({ theme }) => theme.cardsLine};

  --scroll: ${({ theme }) => theme.scroll};
  --scrollBg: ${({ theme }) => theme.scrollBg};
  --scroll-bg-hover: ${({ theme }) => theme.scrollBgHover};

  --borderInThemeModal: ${({ theme }) => theme.borderInThemeModal};

  --scroll-col: ${({ theme }) => theme.scrollCol};
  --scroll-col-bg: ${({ theme }) => theme.scrollColBg};
  --scroll-col-bg-hover: ${({ theme }) => theme.scrollColBgHover};

  --priority-without: ${({ theme }) => theme.priorityWithout};
  --priority-low: ${({ theme }) => theme.priorityLow};
  --priority-medium: ${({ theme }) => theme.priorityMedium};
  --priority-high: ${({ theme }) => theme.priorityHigh};
  
  --calendarBgColor:${({ theme }) => theme.calendarBgColor};
  --activeTextColorCalend:${({ theme }) => theme.activeTextColorCalend};
  --textColorcalendar: ${({ theme }) => theme.textColorcalendar};
  --numberCalendar: ${({ theme }) => theme.numberCalendar};
  --borderForCalendar: ${({ theme }) => theme.borderForCalendar};
  --strokeForCalendar: ${({ theme }) => theme.strokeForCalendar};
  --textCalendar: ${({ theme }) => theme.textCalendar};

  --logoBg: ${({ theme }) => theme.logoBg};
  --logoLightning: ${({ theme }) => theme.logoLightning};
  
  --borderModal: ${({ theme }) => theme.borderModal};
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
  min-width: 100%;
  background-color: var(--primaryBgColor);
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

.modal-content {
  position: absolute;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);
  padding: 0;
  border: var(--borderModal);
  background: transparent;
  border-radius: 8px;
  overflow: hidden;
}
.modal-overlay {
  position: fixed;
  top:0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0,0,0,0.5);
}
`;
