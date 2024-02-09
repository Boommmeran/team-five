import { Header } from 'components/Header';
import { Sidebar } from 'components/SideBar';
import { ScreensPage } from 'components/ScreensPage';
import Card from 'components/Card/Card';
import AddCardModal from 'components/AddCardModal/AddCardModal';

export default function HomePage() {
  return (
    <>
      <Header />
      <Sidebar />
      <ScreensPage />
    </>
  );
}
