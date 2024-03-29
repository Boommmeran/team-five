import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBoards } from '../../redux/boards/boardsSelectors.js';
import { fetchBoards } from '../../redux/boards/boardsOperations.js';
import { logOut } from '../../redux/auth/authOperation.js';
import { NeedHelp } from 'components/NeedHelp';
import { BoardCreation } from 'components/SidebarBoardCreation';
import { clearCurrentBoard } from '../../redux/boards/boardsSlice';
import { BoardItem } from 'components/BoardItem';
import { Icon } from 'components/Icon';
import { SidebarStylesWrapper, Logo, BoardContainer, BoardList, LogOut, Title } from './SideBar.styled';
import { useParams } from 'react-router-dom';

export const Sidebar = () => {
  const dispatch = useDispatch();
  const boards = useSelector(selectBoards);
  const {boardId} = useParams();

  useEffect(() => {
    dispatch(fetchBoards());
  }, [dispatch]);

  const handleLogOut = () => {
    dispatch(logOut());
    localStorage.removeItem('lastBoard');
    dispatch(clearCurrentBoard());
  };

  return (
    <SidebarStylesWrapper>
      <div>
        <Logo>
          <Icon name="logo" width="32" height="32" />
          <h1>TaskPro</h1>
        </Logo>
        <BoardContainer>
          <Title>My boards</Title>
          <BoardCreation />
          <BoardList>
            {boards.map(board => (
              <BoardItem
                key={board._id}
                board={board}
                isActive={boardId === board._id}
              />
            ))}
          </BoardList>
        </BoardContainer>
      </div>
      <div>
        <NeedHelp />
        <LogOut type="button" onClick={handleLogOut}>
          <Icon name="login" width="32" height="32" />
          <p>Log out</p>
        </LogOut>
      </div>
    </SidebarStylesWrapper>
  );
};
