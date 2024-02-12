import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
// import 'react-perfect-scrollbar/dist/css/styles.css';

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

export const Container = styled(PerfectScrollbar)`
  max-width: 347px;

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

  & .ps__rail-x {
    position: absolute;
    height: 8px;
    background-color: var(--scrollBg) !important;
    border-radius: 12px;
    opacity: 1;
    cursor: pointer;
  }
  & .ps__thumb-x {
    width: 142px !important;
    height: 8px;
    background-color: var(--scroll);
    bottom: 0;
    opacity: 1;
  }
  & .ps__rail-x:hover > .ps__thumb-x,
  .ps__rail-x:focus > .ps__thumb-x,
  .ps__rail-x.ps--clicking .ps__thumb-x {
    height: 8px;
    width: 142px;
  }
`;

export const ColumnList = styled.ul`
  display: flex;
  gap: 18px;
`;

export const ColumnItem = styled.li`
  width: 347px;
  @media (min-width: 768px) {
    width: 350px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  gap: 18px;
  align-items: flex-start;
  padding: 0 0 8px;
  ;
`
export const AddBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  min-width: 334px;
  width: 334px;

  padding: 14px 78px;

  border: none;
  border-radius: 8px;

  font-family: 'Poppins-Medium';
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;

  color: var(--secondaryTextColor);
  background-color: var(--extraBgColor);

  opacity: 1;
  transition: color background-color var(--transition);

  cursor: pointer;

  &:hover,
  &:focus {
    color: var(--btnText);
    background-color: var(--btnBgColor);
  }

  @media (min-width: 768px) {
    width: 334px;
  }
`;

export const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 28px;
  height: 28px;
  border: 1px solid black;
  border-radius: 8px;
  stroke: var(--extraBgColor);


  background-color: var(--squareIconColor);  
  transition: background-color stroke var(--transition);

  &:hover,
  &:focus {
    background-color: var(--btnText);
    stroke: var(--plusInBtn);
  }
  > svg {
    width: 14px;
    height: 14px;
    stroke: var(--extraBgColor);
  }
`;
