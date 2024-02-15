import styled from 'styled-components';

export const ModalWrap = styled.div`
  position: relative;
  padding: 24px;
  width: 300px;
  height: 234px;
  border: var(--borderModal);
  border-radius: 8px;
  box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.05);
  background: var(--modalBgColor);
`;

export const FiltersTytle = styled.h3`
  font-family: 'Poppins-Medium';
  font-size: 18px;
  letter-spacing: -0.02em;
  margin-bottom: 28px;
  color: var(--secondaryTextColor);
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;

  border: none;
  outline: none;
  background-color: inherit;

  transition: opacity var(--transition);

  &:hover,
  &:focus {
    opacity: 1;
  }

  cursor: pointer;
`;

export const LabelName = styled.p`
  font-family: 'Poppins-Medium';
  font-size: 14px;
  letter-spacing: -0.02em;
  margin-bottom: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--primaryTextColor);
`;
