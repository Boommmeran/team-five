import styled from 'styled-components';

export const ContainerAvatar = styled.div`
position:relative;
  display: flex;
  justify-content: center;
  
`;

export const Avatar = styled.img`

margin-bottom:25px;
border-radius:8px;
`;

export const Input = styled.input`
  opacity: 0;
  height: 0;
  width: 0;
  line-height: 0;
  overfow: hidden;
  padding: 0;
  margin: 0;
`;

export const Button = styled.button`
  position: absolute;
  top: 58px;
left: 46%;

  width: 24px;
  height: 24px;
  background: var(--accent);
  border-radius: 8px;
  border: 0;

  @media only screen and (min-width: 768px) {
    right: 186px;
  }
`;
