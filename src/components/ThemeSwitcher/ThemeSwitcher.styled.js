import styled from 'styled-components';

export const DrpdwnBtn = styled.button`
  position: relative;
  display: flex;
  gap: 4px;
  background: none;
  border: none;
  font-family: 'Poppins-Medium';
  font-size: 14px;
  letter-spacing: -0.02em;
  color: var(--secondaryTextColor);
  opacity: var(--secondaryOpacity);
`;

export const ThemesList = styled.ul`
  position: absolute;
  top: 65%;
  right: 52%;
  padding: 18px 44px 18px 18px;
  border: 1px solid var(--borderInThemeModal);
  border-radius: 8px;
  box-shadow: 0 4px 16px 0 rgba(17, 17, 17, 0.1);
  background-color: var(--modalBgColor);
  visibility: ${({ visibility }) => visibility};
  opacity: ${({ opacity }) => opacity};
  transform: ${({ transform }) => transform};
  transition: 0.3s;
`;

export const ThemeItem = styled.li`
  font-family: 'Poppins-Regular';
  font-size: 14px;
  letter-spacing: -0.02em;
  color: var(--secondaryTextColor);
  opacity: var(--opacityInThemeModal);
  cursor: pointer;
  &:hover,
  :focus {
    color: var(--accent);
  }
  &:not(:last-child) {
    margin-bottom: 4px;
  }
`;
