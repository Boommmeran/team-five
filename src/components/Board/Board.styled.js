import styled from 'styled-components';

export const Container = styled.div`
  /* max-width: 347px; */

  @media (min-width: 768px) {
    max-width: 718px;
  }

  @media (min-width: 1440px) {
    max-width: 1128px;
  }

  &.scrollbar-container {
    height: auto;
  }
  overflow: auto;
  padding: 0 0 8px;

  &::-webkit-scrollbar {
    width: 12px; /* ширина скролбару */
    height: 12px;
  }

  &::-webkit-scrollbar-track {
    background: var(--scroll); /* колір фону всієї доріжки скролбару */
    border-radius: 12px; // заокруглення доріжки скролу
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--scrollBg); // колір самого скролу
    border-radius: 12px; /* заокруглення самого скролу */

    &:hover {
      background-color: var(
        --scroll-bg-hover
      ); // колір самого скролу при наведенні
    }
  }
`;

export const ColumnList = styled.ul`
  display: flex;
  gap: 18px;
`;

export const ColumnItem = styled.li`
  display: grid;
  grid-template-rows: 56px minmax(0, 1fr) 56px;
  gap: 14px;
  width: 347px;
  height: calc(83vh - 80px);
  @media (min-width: 768px) {
    width: 350px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  gap: 18px;
  align-items: flex-start;
  padding: 0 0 8px;
`;

export const AddBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  max-width: 100%;
  
  padding: 14px 42px;

  border: none;
  border-radius: 8px;

  font-family: 'Poppins-Medium';
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;

  color: var(--secondaryTextColor);
  background-color: var(--btnBoardBg);

  opacity: 1;
  transition: color background-color var(--transition);

  cursor: pointer;

  &:hover,
  &:focus {
    color: var(--btnText);
    background-color: var(--btnBgColor);

    > div {
      background-color: var(--btnPlusHover);
    }
  }

  @media (min-width: 375px) {
    width: 334px;
    min-width: 334px;
    max-width: 0;
    padding: 14px 78px;
  }
`;

export const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 28px;
  height: 28px;

  border-radius: 8px;

  background-color: var(--squareIconColor);
  transition: background-color stroke var(--transition);

  &:hover,
  &:focus {
    background-color: var(--btnPlusHover);
    stroke: var(--plusInBtn);
  }
  > svg {
    width: 14px;
    height: 14px;
    stroke: var(--extraBgColor);
  }
`;
