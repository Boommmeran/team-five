import styled from 'styled-components';

export const NeedHelpBlock = styled.div`
  padding: 14px;
  margin-bottom: 24px;
  font-size: 12px;
  border-radius: 8px;
  background-color: var(--needHelpBg);

  p {
    margin-top: 14px;
    margin-bottom: 18px;
    line-height: 1.33333;
    letter-spacing: 0;
  }

  @media only screen and (min-width: 768px) {
    padding: 20px;
    p {
      font-size: 14px;
    }
  }
`;

export const NeedHelpBtn = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  display: flex;
  align-items: center;
  cursor: pointer;

  span {
    margin-left: 8px;
    color: var(--primaryTextColor);
    font-family: 'Poppins-Medium';
  }
`;