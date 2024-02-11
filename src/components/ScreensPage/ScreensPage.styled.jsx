import styled from 'styled-components';

export const Section = styled.section`
  padding: 10px 24px;
  height: 100vh;
  background-color: var(--secondaryBgColor);
  background-image: url(https://res.cloudinary.com/dt7u6ic1c/image/upload/v1707115407/pictures/${props =>     props.$backgroundImg}_375x812.webp);
  background-repeat: no-repeat;
  max-width: 375px;
  height: auto;
  background-position: center;
  background-size: cover;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(https://res.cloudinary.com/dt7u6ic1c/image/upload/v1707115407/pictures/${props =>      props.$backgroundImg}_750x1624.webp);
  }
  @media (min-width: 768px) {
    background-image: url(https://res.cloudinary.com/dt7u6ic1c/image/upload/v1707115407/pictures/${props =>      props.$backgroundImg}_768x956.webp);
    max-width: 768px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(https://res.cloudinary.com/dt7u6ic1c/image/upload/v1707115407/pictures/${props =>        props.$backgroundImg}_1536x1912.webp);
    }
  }

  @media (min-width: 1440px) {
    background-image: url(https://res.cloudinary.com/dt7u6ic1c/image/upload/v1707115407/pictures/${props =>      props.$backgroundImg}_1180x770.webp);
    max-width: 1440px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(https://res.cloudinary.com/dt7u6ic1c/image/upload/v1707115407/pictures/${props =>        props.$backgroundImg}_2360x1540.webp);
    }
  }
`;
