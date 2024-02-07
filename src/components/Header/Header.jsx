import { UserInfo } from 'components/UserInfo/UserInfo';
import { Container, Theme, AddBtn, IconWrap } from './Header.styled';
import { Icon } from 'components/Icon';

export const Header = () => {
  return (
    <div>
      <Container>
        <AddBtn type="button">
          <Theme>
            <h4>Theme</h4>
          </Theme>
          <IconWrap>
            <Icon name="plus" />
          </IconWrap>{' '}
        </AddBtn>
        <UserInfo />
      </Container>
    </div>
  );
};
