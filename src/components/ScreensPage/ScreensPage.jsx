import { HeaderDashboard } from 'components/HeaderDashboard';
import { Section } from './ScreensPage.styled';
import { MainDashboard } from 'components/MainDashboard';
// import { useSelector } from 'react-redux';

export const ScreensPage = () => {
  // const backgroundImg = useSelector("selector for bgImg");
  const backgroundImg = 'diego';
  return (
    <Section $backgroundImg={backgroundImg}>
      <HeaderDashboard />
      <MainDashboard />
    </Section>
  );
};
