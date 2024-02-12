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
    inset: 0,
    width: 'fit-content',
    height: 'fit-content',
    boxShadow: '0px 4px 16px 0px #1616160D',
    padding: 0,
  },
  overlay: {
    background: 'rgba(0,0,0,0.5)',
  },
};