import styled from 'styled-components';

export const HeadWrap = styled.div`
width: 335px;
height: 56px;

background-color:  
`

export const Title = styled.h3`
  font-family: 'Poppins-Medium';
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;
`;

export const AddBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  min-width: 287px;
  height: 49px;

  padding: 10px 0 11px 0;

  border: 1px solid black;
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
    width: 302px;
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
