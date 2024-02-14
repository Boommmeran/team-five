import styled from 'styled-components';

export const HeaderStyled = styled.header`
  position: relative;

  max-width: 375px;
  display: flex;
  justify-content: space-between;

  background-color: var(--headerBgColor);

  padding: 14px 20px;

  @media (min-width: 768px) {
    max-width: 768px;
    padding: 18px 32px;
  }

  @media (min-width: 1440px) {
    max-width: 1180px;
    justify-content: flex-end;
    padding: 18px 24px;
  }
`;

export const MenuBtn = styled.button`
  border: none;
  background-color: inherit;

  svg {
    width: 24px;
    height: 24px;

    @media (min-width: 768px) {
      width: 32px;
      height: 32px;
    }
  }

  @media (min-width: 1440px) {
    display: none;
  }
`;

export const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: baseline;
  gap: 14px;
`;

export const customStylesForModal = {
  content: {
    position: 'absolute',
    top: '0',
    left: '0',
    right: 'auto',
    bottom: 'auto',
    // transform: 'translate(-50%, -50%)',
    padding: '0',
    // boxShadow: '0 0 10px -2px var(--primaryTextColor)',
    border: 'none',
    background: 'var(--primaryBgColor)',
    // borderRadius: '8px',
    // overflow: 'scroll',
  },
  overlay: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100vh',
    background: 'rgba(0,0,0,0.5)',
  },
};