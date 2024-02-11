import { useRef } from 'react';
import { Input, Button, ContainerAvatar, Avatar } from './UpdateAvatar.styled';

import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { updateAvatar } from '../../redux/auth/authOperation';

import { Icon } from 'components/Icon';

const cloudinaryBaseURL =
  'https://res.cloudinary.com/dt7u6ic1c/image/upload/v1707503119/';

export const UpdateAvatar = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  console.log('Component', user.avatarURL);
  const filePicker = useRef(null);

  const handleFileChange = async event => {
    const selectedFile = event.target.files[0];
    console.log(event.target.files[0]);
    dispatch(updateAvatar(selectedFile));
  };

  const handlePick = () => {
    filePicker.current.click();
  };
  return (

        <ContainerAvatar>
      <picture>
        <source
          srcSet="
              https://res.cloudinary.com/dt7u6ic1c/image/upload/v1707503119/pictures/user-1x.webp 1x,
              https://res.cloudinary.com/dt7u6ic1c/image/upload/v1707503119/pictures/user-2x.webp 2x
            "
        />
        <Avatar
          src = "https://res.cloudinary.com/dt7u6ic1c/image/upload/v1707503119/avatars/65c7535718c4cbf97cce7270"
          // src={cloudinaryBaseURL + user.avatarURL}
          width="68"
          height="68"
          alt="user photo"
        />
      </picture>
      <Button onClick={handlePick}>
        <Icon
          name="plus"
          width="10px"
          height="10px"
          stroke="var(--primaryTextColor)"
        />
      </Button>
      <Input
        type="file"
        ref={filePicker}
        onChange={handleFileChange}
        accept="image/*,.png,.gif,.web,"
      />
    </ContainerAvatar>
  );
};
