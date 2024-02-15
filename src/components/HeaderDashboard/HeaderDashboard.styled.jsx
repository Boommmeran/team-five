import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 0px;
  margin-bottom: 26px;

  @media (min-width: 768px) {
    padding: 26px 0px;
  }

  @media (min-width: 1440px) {
    padding: 10px 0px;
  }
`;

export const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    padding: '0',
    transform: 'translate(-50%, -50%)',
    borderRadius: '8px',
    border: '1 px solid var(--borderModal)',
  },
  overlay: {
    background: 'rgba(0,0,0,0.5)',
  },
};

export const BoardTitle = styled.h3`
  font-family: 'Poppins-Medium';
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;

  color: var(--secondaryTextColor);

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const FilterBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  font-family: 'Poppins-Medium';

  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;

  border: none;

  color: var(--secondaryTextColor);
  background-color: inherit;
  filter: drop-shadow(0 0 3px var(--primaryBgColor));

  stroke: var(--secondaryTextColor);
  transition: opacity var(--transition);
  > svg {
    width: 16px;
    height: 16px;
  }

  cursor: pointer;
  &:hover,
  &:focus {
    color: var(--accent);
    stroke: var(--accent);
  }
`;
