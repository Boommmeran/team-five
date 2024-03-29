import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectEmail,
  selectTheme,
  selectShowImage,
} from '../redux/auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const showImage = useSelector(selectShowImage);
  const user = useSelector(selectUser);
  const email = useSelector(selectEmail);
  const theme = useSelector(selectTheme);


  return {
    isLoggedIn,
    isRefreshing,
    email,
    user,
    theme,
    showImage,
  };
};
