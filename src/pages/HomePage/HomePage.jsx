import { useEffect } from 'react';
import { Header } from 'components/Header';
import { Sidebar } from 'components/SideBar';
import { ScreensPage } from 'components/ScreensPage';
import { StartScreen } from 'components/StartScreen';
import { Main, SidebarWrapper } from './HomePage.styled';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { fetchBoardById } from '../../redux/boards/boardsOperations';
import { fetchColumnsByBoardId } from '../../redux/columns/columnsOperations';
import { fetchCards } from '../../redux/cards/cardsOperations';
import {
  selectCurrentBoard,
  selectBoards,
} from '../../redux/boards/boardsSelectors';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';

export default function HomePage() {
  const { boardId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const boardFromLS = localStorage.getItem('lastBoard');
  const { isLoggedIn } = useAuth();
  const boards = useSelector(selectBoards);

  useEffect(() => {
    const setLastBoard = () => {
      if (boards.length === 0) {
        localStorage.removeItem('lastBoard');
        navigate(`/`);
        return;
      }

      if (boardFromLS) {
        navigate(`/${boardFromLS}`);
      }
    };
    
    setLastBoard();
    return () => {
      setLastBoard();
    };
  }, [boardFromLS, navigate, boards]);

  useEffect(() => {
    if (boardId && isLoggedIn) {
      dispatch(fetchBoardById(boardId));
      dispatch(fetchColumnsByBoardId(boardId));
      dispatch(fetchCards(boardId));
    }
    return () => {};
  }, [boardId, dispatch, isLoggedIn]);

  const { background = 'diego', title } = useSelector(selectCurrentBoard);
  const baseUrl =
    'https://res.cloudinary.com/dt7u6ic1c/image/upload/v1707115407/pictures/';
  const backgroundImgUrl = baseUrl + background;
  return (
    <>
      <Header />
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
      {boardId ? (
        <Main $backgroundImg={backgroundImgUrl}>
          <ScreensPage boardTitle={title} />
          <Outlet />
        </Main>
      ) : (
        <StartScreen />
      )}
    </>
  );
}
