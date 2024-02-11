import { Icon } from 'components/Icon';

import {
  LogoStyled,
  StyledNavLink,
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
          <img
            src="https://res.cloudinary.com/dt7u6ic1c/image/upload/v1707485609/pictures/image-welcome.jpg"
            alt="Welcome img"
            style={{ mixBlendMode: 'multiply' }}
          />
        </ThumbWelcomeImg>
        <LogoStyled>
          <Icon name={'logo'} width="48px" height="48px" />
          <p style={{ fontSize: 40 }}>Task Pro</p>
        </LogoStyled>
        <p style={{ fontSize: 14 }}>
          Supercharge your productivity and take control of your tasks with Task
          Pro - Don't wait, start achieving your goals now!
        </p>
        <WrapForNav>
          <StyledNavLink to="/auth/register">Registration</StyledNavLink>
          <StyledNavLink to="/auth/login">Login</StyledNavLink>
        </WrapForNav>
      </WraperContentWelcome>
    </WraperWelcomeSection>
  );
}
