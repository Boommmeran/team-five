import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 225px;
  min-height: 100vh;
  padding: 14px;
  color: var(--primaryTextColor);
  letter-spacing: -0.02em;
  text-align: left;
  background-color: var(--primaryBgColor);
`;

export const Logo = styled.div`
  font-family: 'Poppins-SemiBold';
  letter-spacing: -0.04em;
  display: flex;
  column-gap: 8px;
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
    opacity: 50%;
  }
  `;

export const BoardList = styled.ul`
margin-bottom: 40px;
`;

export const LogOut = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  display: flex;
  align-items: center;
  font-family: 'Poppins-Medium';
  font-size: 14px;
  stroke: var(--accent);
  transition: var(--transition);

  p {
    margin-left: 14px;
    color: var(--primaryTextColor);
  }

  &:hover,
  &:focus,
  &:active {
    stroke: var(--hover);
  }
`;
