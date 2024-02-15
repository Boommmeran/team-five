import styled from 'styled-components';

export const HeadWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 335px;
  height: 56px;

  margin-bottom: 14px;
  padding: 17px 20px;

  border-radius: 8px;
  background-color: var(--extraBgColor);

  @media (min-width: 768px) {
    width: 334px;
  }
`;

export const Title = styled.h3`
  font-family: 'Poppins-Medium';
  font-size: 14px;

  line-height: 1.5;
  letter-spacing: -0.02em;
  color: var(--textColorcalendar);
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const IconedBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background-color: inherit;

  stroke: var(--secondaryTextColor);
  transition: opacity var(--transition);

  > svg {
    width: 16px;
    height: 16px;
  }

  cursor: pointer;
  &:hover,
  &:focus {
    stroke: var(--accent);
  }
`;

export const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0px 4px 16px 0px #1616160D',
    padding: 0,
  },
  overlay: {
    background: 'rgba(0,0,0,0.5)',
  },
};
