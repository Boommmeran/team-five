import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBoards } from '../../redux/boards/boardsSelectors.js';
import { fetchBoards } from '../../redux/boards/boardsOperations.js';
import { logOut } from '../../redux/auth/authOperation.js';
import { NeedHelp } from 'components/NeedHelp';
import { BoardCreation } from 'components/SidebarBoardCreation';

import { BoardItem } from 'components/BoardItem';
import { Icon } from 'components/Icon';
import {
  SidebarContainer,
  Logo,
  BoardContainer,
  BoardList,
  LogOut,
} from './SideBar.styled';

export const Sidebar = () => {
  const dispatch = useDispatch();
  const boards = useSelector(selectBoards);

  useEffect(() => {
    dispatch(fetchBoards());
  }, [dispatch]);

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
          {boards.map(board => (
            <BoardItem
              key={board._id}
              board={board}
            />
          ))}
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
