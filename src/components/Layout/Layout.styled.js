import styled from 'styled-components';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};
const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};
export const Container = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 68px 1fr;

  @media ${device.mobileM} {
    width: 375px;
  }
  @media ${device.tablet} {
    width: 768px;
  }
  @media ${device.laptop} {
    grid-template-columns: 260px 1fr;
    grid-template-rows: 68px 1fr;
  }
  @media ${device.laptopL} {
    width: 1440px;
  }
`;
