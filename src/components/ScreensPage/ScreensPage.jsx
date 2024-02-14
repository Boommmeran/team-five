import { HeaderDashboard } from 'components/HeaderDashboard';
import { Board } from 'components/Board';

export const ScreensPage = ({ boardTitle }) => {
  return (
    <>
      <HeaderDashboard boardTitle={boardTitle} />
      <Board />
    </>
  );
};
