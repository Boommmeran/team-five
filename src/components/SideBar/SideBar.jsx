import { useDispatch } from 'react-redux';
import { NeedHelp } from 'components/NeedHelp';
import { BoardCreation } from 'components/SidebarBoardCreation';
import { logOut } from '../../redux/auth/authOperation.js';
import { Icon } from 'components/Icon';
import {
  SidebarContainer,
  Logo,
  BoardContainer,
  BoardList,
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
        <BoardCreation />
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
