import { Icon } from 'components/Icon';

import {
  LogoStyled,
  StyledNavLink,
  TextStyledWelcome,
  ThumbWelcomeImg,
  WrapForNav,
  WraperContentWelcome,
  WraperWelcomeSection,
} from './WelcomePage.styled';

export default function WelcomePage() {
  return (
    <WraperWelcomeSection>
      <WraperContentWelcome>
        <ThumbWelcomeImg>
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet="https://res.cloudinary.com/dt7u6ic1c/image/upload/v1707485609/pictures/image-welcome.jpg 1x, https://res.cloudinary.com/dt7u6ic1c/image/upload/v1710085335/pictures/image-welcome-2x.jpg 2x"
              width="162px"
              height="162px"
            />
            <img
              src="https://res.cloudinary.com/dt7u6ic1c/image/upload/v1707485609/pictures/image-welcome.jpg"
              alt="Welcome img"
              style={{ mixBlendMode: 'multiply' }}
              width="124px"
              height="124px"
            />
          </picture>
        </ThumbWelcomeImg>
        <LogoStyled>
          <Icon name={'logo'} />
          <p>Task Pro</p>
        </LogoStyled>
        <TextStyledWelcome>
          Supercharge your productivity and take control of your tasks with Task
          Pro - Don't wait, start achieving your goals now!
        </TextStyledWelcome>
        <WrapForNav>
          <StyledNavLink to="/users/register">Registration</StyledNavLink>
          <StyledNavLink to="/users/login">Login</StyledNavLink>
        </WrapForNav>
      </WraperContentWelcome>
    </WraperWelcomeSection>
  );
}
