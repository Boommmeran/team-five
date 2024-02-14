import styled from 'styled-components';

export const ContainerAvatar = styled.div`
  margin-bottom: 25px;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const Avatar = styled.img`
  border-radius: 8px;
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
  top: 56px;
  left: 46%;

  width: 24px;
  height: 24px;
  background: var(--accent);
  border-radius: 8px;
  border: 0;
  transition: background-color var(--transition);

  &:hover,
  &:focus {
    background: var(--hover);
  }

  @media only screen and (min-width: 768px) {
    left: 47%;
  }
`;
