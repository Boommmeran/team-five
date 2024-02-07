import { LoginForm } from 'components/LoginForm';
import { RegisterForm } from 'components/RegisterForm';
import { useParams } from 'react-router-dom';

export default function AuthPage() {
  let { id } = useParams();
  return <div>{id === 'login' ? <LoginForm /> : <RegisterForm />}</div>;
}