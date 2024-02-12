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
  height: 61px;
  margin: 0 -14px 0 -14px;
  padding: 0 14px 0 14px;
  display: flex;
  align-items: center;
  stroke: var(--primaryTextColor);
  opacity: 0.5;
  transition: var(--transition);
  text-align: right;

  p {
    max-width: 120px;
    margin-left: 4px;
    word-wrap: break-word;
    text-align: start;
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
    background-color: var(--accent);
  }
`}

  &:hover,
  &:focus,
  &:active {
    background-color: var(--secondaryBgColor);
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

export const customStylesForModal = {
  content: {
    width: 'fit-content',
    height: 'fit-content',
    padding: 0,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0px 4px 16px 0px #1616160D',
  },
  overlay: {
    background: 'rgba(0,0,0,0.5)',
  },
};
