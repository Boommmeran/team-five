import { useEffect } from 'react';
import { Header } from 'components/Header';
import { Sidebar } from 'components/SideBar';
import { ScreensPage } from 'components/ScreensPage';
import { StartScreen } from 'components/StartScreen';
import { Main, SidebarWrapper } from './HomePage.styled';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { selectCurrentBoard } from '../../redux/boards/boardsSelectors';
import { fetchBoardById } from '../../redux/boards/boardsOperations';
import { fetchColumnsByBoardId } from '../../redux/columns/columnsOperations';
import { fetchCards } from '../../redux/cards/cardsOperations';
import { useAuth } from 'hooks';

export default function HomePage() {
  const dispatch = useDispatch();
  const { boardId } = useParams();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const boardFromLS = localStorage.getItem('lastBoard');
  const currBoard = useSelector(selectCurrentBoard);
  console.log(boardId);

  const firstRender = () => {
    if (!boardFromLS) return;
    if (boardFromLS === boardId) return;
    navigate(`/${boardFromLS}`);
  }

  useEffect(() => {
    firstRender();
    return () => {};
  }, []);

  useEffect(() => {
    if (!boardId) return;
    if (!isLoggedIn) return;
    dispatch(fetchBoardById(boardId));
    dispatch(fetchColumnsByBoardId(boardId));
    dispatch(fetchCards(boardId));

    return () => {};
  }, [boardId, dispatch, isLoggedIn]);


  const background = currBoard?.background || 'diego';
  const title = currBoard?.title;
  const baseUrl =
    'https://res.cloudinary.com/dt7u6ic1c/image/upload/v1707115407/pictures/';
  const backgroundImgUrl = baseUrl + background;


  return (
    <>
      <Header />
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
      {currBoard ? (
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
