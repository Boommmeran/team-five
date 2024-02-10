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
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;

  @media ${device.mobileM} {
    width: calc(335px + 2 * 20px);
    margin-left: auto;
    margin-right: auto;
  }
  @media ${device.tablet} {
    width: calc(704px + 2 * 32px);
    padding-left: 32px;
    padding-right: 32px;
  }
  @media ${device.laptopL} {
    width: 1440px;
    padding-left: 24px;
    padding-right: 24px;
  }
`;
