import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 8px;
`;

export const Name = styled.p`
  margin: 5px 0;
  font-family: 'Poppins-Medium';
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -2;
  color: var(--secondaryTextColor);
`;

export const Avatar = styled.img`
  border-radius: 8px;
  cursor: pointer;
`;

export const Button = styled.button`
  position: absolute;
  top: 14px;
  right: 10px;
  color: var(--primaryTextColor);
  background: var(--modalBgColor);
  border: 0;
  cursor: pointer;
`;

export const ButtonSvg = styled.button`
  padding: 0;
  margin: 0;
  border: 0;
  border-radius: 8px;
  background-color: var(--primaryBgColor);
  cursor: pointer;
`;
