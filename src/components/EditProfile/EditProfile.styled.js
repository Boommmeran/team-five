import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  padding: 24px;
  width:100%;
  background:${prop=>prop.theme.colors.ligthThemeSecondary};

  @media only screen and (min-width: 375px) {
    width: 335px;
  }

  @media only screen and (min-width: 768px) {
    width: 400px;
  }
`;

export const Title = styled.h3`
  margin: 0 0 24px 0;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;
  color: ${prop => prop.theme.colors.blackColor};
`;
