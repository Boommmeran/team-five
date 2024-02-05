import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 225px;
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

export const BoardCreationBlock = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: rgba(255, 255, 255, 0.1) solid 1px;
  border-bottom: rgba(255, 255, 255, 0.1) solid 1px;
  padding-top: 14px;
  padding-bottom: 14px;
  margin-bottom: 40px;
`;

export const BtnCreate = styled.button`
  width: 40px;
  height: 36px;
  background-color: var(--btnPlus);
  border: none;
  border-radius: 6px;
  stroke: var(--primaryBgColor);
  transition: var(--transition);

  &:hover,
  &:focus,
  &:active {
    background-color: var(--btnPlusHover);
  }
`;

export const BoardList = styled.ul`
margin-bottom: 40px;
`;

export const ControlIconsContainer = styled.div`
  margin-left: auto;
  display: none;
  gap: 8px;

  button {
    margin: 0;
    padding: 0;
    border: none;
    background: none;
  }
`;

export const BoardItem = styled.li`
  height: 61px;
  margin: 0 -14px 0 -14px;
  padding: 0 14px 0 14px;
  display: flex;
  align-items: center;
  stroke: var(--primaryTextColor);
  opacity: 0.5;
  transition: var(--transition);

  p {
    margin-left: 4px;
    font-family: 'Poppins-Medium';
    font-size: 14px;
  }

  &:hover,
  &:focus,
  &:active {
    background-color: var(--secondaryBgColor);
    opacity: 1;

    > ${ControlIconsContainer} {
      display: flex;
    }
  }
`;

export const NeedHelpBlock = styled.div`
  height: 238px;
  padding: 14px;
  margin-bottom: 24px;
  font-size: 12px;
  border-radius: 8px;
  background-color: var(--secondaryBgColor);

  p {
    margin-top: 14px;
    margin-bottom: 18px;
    line-height: 1.33333;
    letter-spacing: 0;
  }
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
    color: var(--primaryTextColor);
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
