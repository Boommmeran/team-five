import { Icon } from 'components/Icon';

import {
  LogoStyled,
  StyledNavLink,
  WrapForNav,
  WraperWelcome,
} from './WelcomePage.styled';

export default function WelcomePage() {
  return (
    <WraperWelcome>
      <div>
        <LogoStyled>
          <Icon name={'logo'} />
          <p>Task Pro</p>
        </LogoStyled>
        <p>
          Supercharge your productivity and take control of your tasks with Task
          Pro - Don't wait, start achieving your goals now!
        </p>
        <WrapForNav>
          <StyledNavLink to="/auth/register">Registration</StyledNavLink>
          <StyledNavLink to="/auth/login">Login</StyledNavLink>
        </WrapForNav>
      </div>
    </WraperWelcome>
  );
}
