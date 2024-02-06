import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 79px;
  height: 32px;
  gap: 8px;
`;

export const Name = styled.p`
  margin: 5px 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5;
  color: var(--blackColor);
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border: 1px solid grey;
  cursor: pointer;
`;

export const Button = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  background: var(--whiteColor);
  border: 0;
  cursor: pointer;
`;
