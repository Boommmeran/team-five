import { Field } from 'formik';
import styled from 'styled-components';

export const StyledRadioGroup = styled.div`
  height: 18px;
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
`;

export const RadioButton = styled(Field)`
  display: none;
`;

export const RadioLabel = styled.label`
  border-radius: 50%;
  width: 14px;
  height: 14px;
  background-color: var(--priority-${({ $priority }) => $priority});
  transition: var(--transition);
  cursor: pointer;
  box-sizing: border-box;
  position: relative;

  &.checked {
    &::after {
      content: '';
      position: absolute;
      width: 12px;
      height: 12px;
      top: 1px;
      left: 1px;
      border-radius: 50%;
      border: 2px solid var(--extraBgColor);
    }
  }
`;
