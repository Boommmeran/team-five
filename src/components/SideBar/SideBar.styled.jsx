import { Icon } from 'components/Icon';
import styled from 'styled-components';

export const SidebarContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.darkThemeSecondary};
`;

export const SvgLightningContainer = styled.div`
  stroke: white;
  fill: white;
  background-color: ${({ theme }) => theme.colors.darkThemeSecondary};
  width: 32px;
  height: 32px;
  border-radius: 8px;
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;

export const StyledIcon = styled(Icon)`
  width: 12px;
  height: 16px;
`;