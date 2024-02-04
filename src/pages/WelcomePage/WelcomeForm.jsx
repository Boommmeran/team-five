import { NavLink } from 'react-router-dom';

export default function WelcomePage() {
  return (
    <div>
      <div>
        <NavLink to="/auth/register">Registration</NavLink>
        <NavLink to="/auth/login">Login</NavLink>
      </div>
    </div>
  );
}
