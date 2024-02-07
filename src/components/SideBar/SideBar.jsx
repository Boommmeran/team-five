import { useDispatch } from 'react-redux';
import { NeedHelp } from './SidebarComponents/NeedHelp/NeedHelp.jsx';
import { logOut } from '../../redux/auth/authOperation.js';
import { Icon } from 'components/Icon';
import {
  SidebarContainer,
  Logo,
  BoardContainer,
  BoardList,
  BoardCreationBlock,
  BtnCreate,
  LogOut,
  BoardItem,
  ControlIconsContainer,
} from './SideBar.styled';

export const Sidebar = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <SidebarContainer>
      <Logo>
        <Icon name="logo" width="32" height="32" />
        <h2>TaskPro</h2>
      </Logo>
      <BoardContainer>
        <h3>My boards</h3>
        <BoardCreationBlock>
          <p>
            Create a<br />
            new board
          </p>
          <BtnCreate type="button">
            <Icon name="plus" width="20" height="20" />
          </BtnCreate>
        </BoardCreationBlock>
        <BoardList>
          <BoardItem>
            <Icon
              name="four-circles"
              width="18"
              height="18"
              style={{ opacity: 0.5 }}
            />
            <p>Board name</p>
            <ControlIconsContainer>
              <button type="button">
                <Icon name="pencil" width="16" height="16" />
              </button>
              <button>
                <Icon name="trash" width="16" height="16" />
              </button>
            </ControlIconsContainer>
          </BoardItem>
        </BoardList>
      </BoardContainer>
      <NeedHelp />
      <LogOut type="button" onClick={handleLogOut}>
        <Icon name="login" width="32" height="32" />
        <p>Log out</p>
      </LogOut>
    </SidebarContainer>
  );
};
