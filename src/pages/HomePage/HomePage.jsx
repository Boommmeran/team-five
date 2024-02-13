import { Header } from 'components/Header';
import { Sidebar } from 'components/SideBar';
import { ScreensPage } from 'components/ScreensPage';
import { Main, SidebarWrapper } from './HomePage.styled';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

export default function HomePage() {

  const { background = 'diego' } = useSelector(state => state?.boards?.currentBoard);
  const baseUrl =
    'https://res.cloudinary.com/dt7u6ic1c/image/upload/v1707115407/pictures/';
  const backgroundImgUrl = baseUrl + background;
  return (
    <>
      <Header />
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
      <Main $backgroundImg={backgroundImgUrl}>
        <ScreensPage />
        <Outlet/>
      </Main>
    </>
  );
}
