import {
  Container,
  Avatar,
  Input,
  Button,
  InputLast,
} from './FormEditProfile.styled';

export const FormEditProfile = () => {
  return (
    <Container>
      <form>
        <Avatar src="" alt="" />
        <Input type="text" name="name" placeholder="Enter your name" />
        <Input type="text" name="email" placeholder="ivetta34@gmail.com" />
        <InputLast type="text" name="password" placeholder="ivetta1999.23" />

        <Button type="submit">Send</Button>
      </form>
    </Container>
  );
};
