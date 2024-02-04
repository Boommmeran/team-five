import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 225px;
  padding: 14px;
  color: ${({ theme }) => theme.colors.whiteColor};
  background-color: ${({ theme }) => theme.colors.darkThemeSecondary};
`;

export const SvgLightningContainer = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.darkThemePrimary};
  stroke: ${({ theme }) => theme.colors.whiteColor};
  fill: ${({ theme }) => theme.colors.whiteColor};
`;

export const Logo = styled.div`
  font-family: 'Poppins-SemiBold';
  display: flex;
  align-items: center;
  margin-bottom: 70px;
`;

export const BoardContainer = styled.div`
  font-family: 'Poppins-Medium';
  font-size: 14px;

  h3 {
    margin-bottom: 8px;
    font-size: 12px;
    font-family: 'Poppins-Regular';
    color: ${({ theme }) => theme.colors.whiteColor};
    opacity: 50%;
  }
`;

export const BoardCreationBlock = styled.div`
  display: flex;
  border-top: rgba(255, 255, 255, 0.1) solid 1px;
  border-bottom: rgba(255, 255, 255, 0.1) solid 1px;
  padding-top: 14px;
  padding-bottom: 14px;
  margin-bottom: 40px;
`;

export const BtnCreate = styled.button`
  width: 40px;
  height: 36px;
  margin-left: 77px;
  background-color: ${({ theme }) => theme.colors.accent};
  border: none;
  border-radius: 6px;
  stroke: ${({ theme }) => theme.colors.darkThemeSecondary};
`;

export const BoardList = styled.ul``;

export const NeedHelpBlock = styled.div`
  height: 238px;
  padding: 14px;
  margin-bottom: 24px;
  font-size: 12px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.darkThemePrimary};

  p {
    margin-top: 14px;
    margin-bottom: 18px;
  }
`;

export const StyledSpan = styled.span`
  color: ${({ theme }) => theme.colors.accent};
`;

export const NeedHelpBtn = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  display: flex;
  align-items: center;

  span {
    margin-left: 8px;
    color: ${({ theme }) => theme.colors.whiteColor};
    font-family: 'Poppins-Medium';
  }
`;

export const LogOut = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  display: flex;
  align-items: center;
  /* color: ${({ theme }) => theme.colors.whiteColor}; */
  font-family: 'Poppins-Medium';
  font-size: 14px;

  p {
    margin-left: 14px;
    color: ${({ theme }) => theme.colors.whiteColor};
  }
`;
