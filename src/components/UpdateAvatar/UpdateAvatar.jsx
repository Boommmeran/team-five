import { useState, useRef } from 'react';
import { Input, Button, ContainerAvatar, Avatar } from './UpdateAvatar.styled';
import axios from 'axios';
import { Icon } from 'components/Icon';

const cloudinaryBaseURL =
  'https://res.cloudinary.com/dt7u6ic1c/image/upload/v1707503119/';
axios.defaults.baseURL = 'http://localhost:9000/api';

export const UpdateAvatar = () => {
  const [uploaded, setUploaded] = useState('pictures/user-1x.webp');
  const filePicker = useRef(null);

  const handleFileChange = async event => {
    const selectedFile = event.target.files[0];
    console.log(event.target.files[0]);

    try {
      const formData = new FormData();
      formData.set('file', selectedFile);

      const responce = await axios.patch('/users/avatars', formData);
      console.log(responce.data);
      setUploaded(responce.data);
    } catch (error) {
      console.log(error);
    }
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
          src={cloudinaryBaseURL + uploaded}
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
