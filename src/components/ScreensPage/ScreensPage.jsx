import { HeaderDashboard } from 'components/HeaderDashboard';
import { Section } from './ScreensPage.styled';
import { MainDashboard } from 'components/MainDashboard';

export const ScreensPage = () => {
  return (
    <Section>
      <HeaderDashboard />
      <MainDashboard />
    </Section>
  );
};
