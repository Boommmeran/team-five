import styled from 'styled-components';

export const HeadWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 335px;
  height: 56px;

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
`;

export const CardList = styled.ul`
  > li:not(:last-of-type) {
    margin-bottom: 10px;
  }
  border-radius: 12px;

  @media (min-width: 768px) {
  }

  @media (min-width: 1180px) {
  }

  overflow: auto;
  padding: 0;

  &::-webkit-scrollbar {
    width: 8px; /* ширина скролбару */
  }

  &::-webkit-scrollbar-track {
    background: var(--scroll-col); /* колір фону всієї доріжки скролбару */
    border-radius: 12px; // заокруглення доріжки скролу
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--scroll-col-bg); // колір самого скролу
    border-radius: 12px; /* заокруглення самого скролу */

    &:hover {
      background-color: var(
        --scroll-col-bg-hover
      ); // колір самого скролу при наведенні
    }
  }
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

export const AddBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  width: 335px;
  height: 56px;

  padding: 10px 0 11px 0;

  border: none;
  border-radius: 8px;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.02em;

  color: var(--btnText);
  background-color: var(--btnBgColor);
  transition: background-color var(--transition);

  cursor: pointer;

  @media (min-width: 768px) {
    width: 334px;
  }

  &:hover,
  &:focus {
    background-color: var(--btnBgColorHover);
  }
`;
export const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 28px;
  height: 28px;

  border-radius: 8px;

  background-color: var(--btnText);

  > svg {
    width: 14px;
    height: 14px;
    stroke: var(--plusInBtn);
  }
`;
