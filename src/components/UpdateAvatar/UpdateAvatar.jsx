import { useRef } from 'react';
import { Input, Button, ContainerAvatar, Avatar } from './UpdateAvatar.styled';

import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { updateAvatar } from '../../redux/auth/authOperation';

import { Icon } from 'components/Icon';
import { toast } from 'react-hot-toast';

const cloudinaryBaseURL =
  'https://res.cloudinary.com/dt7u6ic1c/image/upload/v1707503119/';

export const UpdateAvatar = () => {
  const { user } = useAuth();
  const { showImage } = useAuth();

  const dispatch = useDispatch();

  const filePicker = useRef(null);

  const handleFileChange = event => {
    const selectedFile = event.target.files[0];
    toast.promise(dispatch(updateAvatar(selectedFile)), {
      loading: 'Saving...',
      success: <b>Settings saved!</b>,
      error: <b>Opps, something went wrong...</b>,
    });
  };

  const handlePick = () => {
    filePicker.current.click();
  };

  return (
    <ContainerAvatar>
      {showImage ? (
        <Avatar
          src={cloudinaryBaseURL + user.avatarURL}
          width="68"
          height="68"
          alt="user photo"
        />
      ) : (
        <Icon name="user" width="68" height="68" />
      )}

      <Button onClick={handlePick}>
        <Icon name="plus" width="10px" height="10px" stroke="#161616" />
      </Button>
      <Input
        type="file"
        ref={filePicker}
        onChange={handleFileChange}
        accept="image/*,.jpg,.png,.gif,.web,"
      />
    </ContainerAvatar>
  );
};
