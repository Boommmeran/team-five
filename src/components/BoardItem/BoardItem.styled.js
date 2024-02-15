import styled from 'styled-components';

export const ControlIconsContainer = styled.div`
  margin-left: auto;
  margin-right: 0px;
  display: none;
  gap: 8px;

  button {
    margin: 0;
    padding: 0;
    border: none;
    background: none;
  }
`;

export const BoardItemContainer = styled.li`
  min-height: 61px;
  max-height: 61px;
  padding: 0 14px 0 14px;
  display: flex;
  align-items: center;
  stroke: var(--primaryTextColor);
  opacity: 0.5;
  transition: var(--transition);
  width: 100%;
  cursor: pointer;

  p {
    max-width: 120px;
    margin-left: 8px;
    font-family: 'Poppins-Medium';
    font-size: 14px;
    word-wrap: break-word;
  }

  ${props =>
    props.selected &&
    `
  opacity: 1;  
  &:after {
    content: '';
    display: block;
    border-radius: 4px 0 0 4px;
    width: 4px;
    height: 61px;
    margin-right: -14px;
    margin-left: auto;
    background-color: var(--borderInThemeModal);
  }
`}

  &:hover,
  &:focus,
  &.active {
    background-color: var(--needHelpBg);
    opacity: 1;

    > ${ControlIconsContainer} {
      display: flex;
      opacity: 0.5;
    }

    &:after {
      margin-left: 10px;
    }
  }

  @media only screen and (min-width: 768px) {
    margin: 0 -24px 0 -24px;
    p {
      max-width: 140px;
    }
  }
`;