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
  // IconedBtn,
  BackgroundsPallet,
  Label,
  Pic,
  LabelPic,
  Div,
} from './BoardCreatingModal.styled';
import { Formik } from 'formik';

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
  'diego',
  'eberhard',
  'florian',
  'gabriella',
  'gaetan',
  'igor',
  'kace',
  'miklos',
  'milad',
  'nicolas',
  'noBack',
  'romello',
  'tony',
  'vickholius',
  'vino',
  'zhou',
];

const initialValues = {
  boardTitle: '',
  icon: 'four-circles',
  background: 'noBack',
};

const schema = Yup.object({
  boardTitle: Yup.string().required(),
  icon: Yup.string().oneOf(iconsArr).required(),
  background: Yup.string().oneOf(backgroundsArr).required(),
});

export const BoardCreatingModal = ({ closeModal }) => {
  const onSubmit = values => {
    console.log(values);
    closeModal();
  };
  return (
    <ModalWrap>
      <ModalTitle>New board</ModalTitle>
      <CloseBtn type="button" onClick={closeModal}>
        <Icon name="close" />
      </CloseBtn>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={onSubmit}
      >
        <FormWrap>
          <Input type="text" placeholder="Title" name="boardTitle" />
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
              // const imgPath = `some path{el}`;
              return (
                <li key={el}>
                  <LabelPic>
                    <Div>
                      {/* <img src={imgPath} alt="background example" /> */}
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
