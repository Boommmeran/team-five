import styled from 'styled-components';

export const Container = styled.div`
display: flex;
  flex-direction: column;
`;

export const Avatar = styled.img`
  margin-bottom: 14px;
  margin-left: auto;
  margin-right: auto;
  width: 68px;
  height: 79px;
  border: 1px solid black;
`;

export const Input = styled.input`
  margin-bottom: 14px;
  padding: 14px 18px;
  width: 100%;
  /* height:49px; */
  outline: transparent;
  outline-offset: -1px;
  border: 1px solid ${prop => prop.theme.colors.accent};
  border-radius: 8px;

  font-size: 14px;
  font-weight: 400px;
  line-height: 1.5;
  color: ${prop => prop.theme.colors.blackColor};
`;
export const InputLast = styled.input`
margin-bottom: 24px;
padding: 14px 18px;
  width: 100%;
  /* height:49px; */
  outline: transparent;
  outline-offset: -1px;
  border: 1px solid ${prop => prop.theme.colors.accent};
  border-radius: 8px;

  font-size: 14px;
  font-weight: 400px;
  line-height: 1.5;
  color: ${prop => prop.theme.colors.blackColor};
`;

export const Button = styled.button`
  width: 100%;
  background: ${prop => prop.theme.colors.accent};
  border: 0;
  border-radius: 8px;
  padding: 14px 126px;
  color: ${prop => prop.theme.colors.blackColor};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
`;
