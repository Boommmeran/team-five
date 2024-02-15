import styled from 'styled-components';

export const FiltersWrap = styled.div`
  position: relative;
  display: flex;
  gap: 119px;

  &::before {
    content: '';
    position: absolute;
    top: -14px;
    left: 0;
    width: 252px;
    height: 1px;
    background-color: var(--cardsLine);
  }
`;

export const FilterLabel = styled.p`
  margin-bottom: 14px;
  font-family: 'Poppins-Medium';
  font-size: 14px;
  letter-spacing: -0.02em;
  color: var(--secondaryTextColor);
  white-space: nowrap;
`;

export const ShowAllBtn = styled.button`
  padding: 0;
  margin: 0;
  height: 0;
  width: 0;

  border: none;
  background-color: inherit;
  font-size: 12px;
  letter-spacing: -0.02em;
  text-decoration: underline;
  color: var(--secondaryTextColor);
  opacity: 0.5;
  cursor: pointer;
  white-space: nowrap;
`;

export const StyledRadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const RadioLabel = styled.label`
  display: flex;
  
  border-radius: 50%;
  width: 14px;
  height: 14px;
  background-color: var(--priority-${({ $priority }) => $priority});
  transition: var(--transition);
  cursor: pointer;
  position: relative;

  > input {
    display: none;
  }

  &.checked {
    &::after {
      content: '';
      position: absolute;
      width: 8px;
      height: 8px;
      top: 21%;
      left: 22%;
      border-radius: 50%;
      border: 2px solid var(--primaryBgColor);
    }
  }
`;

export const FiltersSpan = styled.span`
  margin-left: 22px;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: var(--secondaryTextColor);
  opacity: 0.5;
  white-space: nowrap;
`;
