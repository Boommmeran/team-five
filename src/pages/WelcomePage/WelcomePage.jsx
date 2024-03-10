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
              srcSet="https://res.cloudinary.com/dt7u6ic1c/image/upload/v1706799169/avatars/jE_DHXsifaZ7-4NRAsyL3 1x, https://res.cloudinary.com/dt7u6ic1c/image/upload/v1706799169/avatars/RuKeVdzJGSKz9BP0xLfuD 2x"
              media="(min-width: 1200px)"
            />
            <img
              src="https://res.cloudinary.com/dt7u6ic1c/image/upload/v1706799169/avatars/jE_DHXsifaZ7-4NRAsyL3"
              alt="Welcome img"
              style={{ mixBlendMode: 'multiply' }}
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
