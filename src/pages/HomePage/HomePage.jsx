import { Header } from 'components/Header';
import { Sidebar } from 'components/SideBar';
import { ScreensPage } from 'components/ScreensPage';

export default function HomePage() {
  return (
    <div>
      <Header />
      <Sidebar />
      <ScreensPage />
    </div>
  );
}