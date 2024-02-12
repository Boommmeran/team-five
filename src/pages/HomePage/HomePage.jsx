import { Header } from 'components/Header';
import { Sidebar } from 'components/SideBar';
import { ScreensPage } from 'components/ScreensPage';
import { Main, SidebarWrapper } from './HomePage.styled';

export default function HomePage() {
  const baseUrl =
    'https://res.cloudinary.com/dt7u6ic1c/image/upload/v1707115407/pictures/';
  const backgroundImg = 'diego';
  const backgroundImgUrl = baseUrl + backgroundImg;
  return (
    <>
      <Header />
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
      <Main $backgroundImg={backgroundImgUrl}>
        <ScreensPage />
      </Main>
    </>
  );
}
