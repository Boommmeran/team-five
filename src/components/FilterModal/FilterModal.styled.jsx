import styled from 'styled-components';

export const ModalWrap = styled.div`
  position: relative;
  padding: 24px;
  width: 300px;
  height: 234px;

  border-radius: 8px;
  box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.05);
  background: var(--modalBgColor);
`;

export const FiltersTytle = styled.h3`
  font-family: 'Poppins-Medium';
  font-size: 18px;
  letter-spacing: -0.02em;
  margin-bottom: 14px;
  /* margin-left: 24px; */
  color: var(--primaryTextColor);
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;

  border: none;
  outline: none;
  background-color: inherit;

  /* opacity: 0.5; */
  transition: opacity var(--transition);

  > svg {
    stroke: var(--primaryTextColor);
  }

  &:hover,
  &:focus {
    opacity: 1;
  }

  cursor: pointer;
`;

export const HorizontalLine = styled.hr`
  margin-bottom: 14px;
  stroke-width: 1px;
  stroke: rgba(22, 22, 22, 0.1);
`;

export const LabelName = styled.p`
  font-family: 'Poppins-Medium';
  font-size: 14px;
  letter-spacing: -0.02em;
  margin-bottom: 14px;
  display: flex;
justify-content: space-between;
align-items: center;
  /* margin-left: 24px; */
  color: var(--primaryTextColor);
`;

export const ShowPickers = styled.button`
  /* font-family: 'Poppins', sans-serif;
  font-weight: 400; */
  font-size: 12px;
  letter-spacing: -0.02em;
  text-decoration: underline;
  /* color: rgba(255, 255, 255, 0.5); */
`;

export const PickersList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Picker = styled.label`
  display: flex;
  align-items: center;
  /* font-family: 'Poppins', sans-serif;
  font-weight: 400; */
  font-size: 12px;
  letter-spacing: -0.02em;
  opacity: 0.5;
  color: var(--secondaryTextColor);

   &:hover,
  &:focus,
  &:active {
    color: var(--secondaryTextColor)
  }
`;

export const PickerName = styled.span`
  margin-left: 8px;
`
