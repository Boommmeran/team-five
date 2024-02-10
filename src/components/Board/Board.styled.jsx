import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  gap: 18px;
  align-items: flex-start;
`;

export const AddBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  max-width: 335px;

  padding: 14px 78px;

  border: none;
  border-radius: 8px;

  font-family: 'Poppins-Medium';
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;

  color: var(--secondaryTextColor);
  background-color: var(--extraBgColor);

  opacity: 1;
  transition: color background-color var(--transition);

  cursor: pointer;

  &:hover,
  &:focus {
    color: var(--btnText);
    background-color: var(--btnBgColor);
  }

  @media (min-width: 768px) {
    width: 334px;
  }
`;

export const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 28px;
  height: 28px;
  border: 1px solid black;
  border-radius: 8px;

  background-color: var(--squareIconColor);
  stroke: var(--extraBgColor);
  transition: background-color stroke var(--transition);

  &:hover,
  &:focus {
    background-color: var(--btnText);
    stroke: var(--plusInBtn);
  }
  > svg {
    width: 14px;
    height: 14px;
    stroke: inherit;
  }
`;