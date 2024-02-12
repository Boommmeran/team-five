import { Header } from 'components/Header';
import { Sidebar } from 'components/SideBar';
import { ScreensPage } from 'components/ScreensPage';
import { Main, SidebarWrapper } from './HomePage.styled';

export default function HomePage() {
  return (
    <>
      <Header />
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
      <Main>
        <ScreensPage />
      </Main>
    </>
  );
}
