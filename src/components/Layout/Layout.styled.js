import styled from 'styled-components';

const size = {
  mobileM: '375px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
};

const device = {
  mobileM: `(min-width: ${size.mobileM})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
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
  @media ${device.laptopL} {
    grid-template-columns: 260px 1fr;
    grid-template-rows: 68px 1fr;
    width: 1440px;
  }
`;
