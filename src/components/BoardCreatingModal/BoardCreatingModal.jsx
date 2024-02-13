import { Icon } from 'components/Icon';
import * as Yup from 'yup';
import {
  FormWrap,
  Input,
  Text,
  AddBtn,
  IconWrap,
  ModalWrap,
  CloseBtn,
  ModalTitle,
  IconsListWrap,
  InvisibleInput,
  BackgroundsPallet,
  Label,
  LabelPic,
  Div,
} from './BoardCreatingModal.styled.js';
import { Formik } from 'formik';
import { useDispatch } from "react-redux";
import { addBoard } from '../../redux/boards/boardsOperations';


const iconsArr = [
  'four-circles',
  'star',
  'loading',
  'puzzle',
  'container',
  'lightning',
  'colors',
  'hexagon',
];

const backgroundsArr = [
  'noBack',
  'miklos',
  'eberhard',
  'diego',
  'vino',
  'vickholius',
  'romello',
  'kace',
  'milad',
  'gaetan',
  'florian',
  'tony',
  'nicolas',
  'gabriella',
  'igor',
  'zhou',
];

const schema = Yup.object({
  title: Yup.string().required(),
  icon: Yup.string().oneOf(iconsArr).required(),
  background: Yup.string().oneOf(backgroundsArr).required(),
});

export const BoardCreatingModal = ({ onClose }) => {
  const dispatch = useDispatch()

  const initialValues = {
    title: '',
    icon: 'four-circles',
    background: 'noBack',
  };

  const onSubmit = (values) => {
    dispatch(addBoard(values));
    onClose();
  };
  return (
    <ModalWrap>
      <ModalTitle>New board</ModalTitle>
      <CloseBtn type="button" onClick={onClose}>
        <Icon name="close" />
      </CloseBtn>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={onSubmit}
      >
        <FormWrap>
          <Input type="text" placeholder="Title" name="title" />
          <Text>Icons</Text>

          <IconsListWrap>
            {iconsArr.map(el => (
              <li key={el}>
                <Label>
                  <Icon name={el} />
                  <InvisibleInput type="radio" name="icon" value={el} />
                </Label>
              </li>
            ))}
          </IconsListWrap>

          <Text>Backgrounds</Text>
          <BackgroundsPallet>
            {backgroundsArr.map(el => {
              const srcSetPath = ` https://res.cloudinary.com/dt7u6ic1c/image/upload/v1707115407/pictures/${el}_28x28.webp 1x,
              https://res.cloudinary.com/dt7u6ic1c/image/upload/v1707115407/pictures/${el}_56x56.webp 2x`;
              const srcDefault = `https://res.cloudinary.com/dt7u6ic1c/image/upload/v1707115407/pictures/${el}_28x28.webp`;
              return (
                <li key={el}>
                  <LabelPic>
                    <Div>
                      <picture>
                        <source srcSet={srcSetPath} />
                        <img src={srcDefault} alt="background example" />
                      </picture>
                    </Div>
                    <InvisibleInput type="radio" name="background" value={el} />
                  </LabelPic>
                </li>
              );
            })}
          </BackgroundsPallet>

          <AddBtn type="submit">
            <IconWrap>
              <Icon name="plus" />
            </IconWrap>{' '}
            Create
          </AddBtn>
        </FormWrap>
      </Formik>
    </ModalWrap>
  );
};
