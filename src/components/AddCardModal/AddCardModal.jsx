import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { Calendar } from 'components/Сalendar';
import { Icon } from 'components/Icon';

import {
  ModalBody,
  Container,
  TitleModal,
  StyledDescription,
  CloseModal,
  TitleCard,
  LabelColorStyle,
  StyleRadioButton,
  DeadlineStyle,
  AddButton,
  StylePlus,
  AddCardButton,
  RadioButton,
  RadioButtonColor,
} from './AddCardModal.styled.jsx';

const formCardSchema = Yup.object().shape({
  // так працювати не буде!
  // в yup назва поля має відповідати атрибуту name у inputa
  // на радіо кнопках валідація по конкретному значенню тобто oneOf([масив прийнятних значень])

  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(2, 'Too Short!')
    .max(500, 'Too Long!')
    .required('Required'),
});

export default function AddCardModal({ title, btnText, onClose, reqFunc }) {
  // тут має бути логіка отримання значень вже існуючої
  // картки і подальший запис в initValues наприклад через оператор ??
  // тобто треба переписати initialValues у формат
  // "збережені дані" (для випадку Edit Card) ?? "початкові значення" (для випадку Add Card)

  const initValues = {
    title: '',
    description: '',
    colorPicker: '',
    dealline: '',
  };
  const onSubmit = values => {
    reqFunc(values);
    onClose();
  };
  return (
    <Container>
      <ModalBody>
        <TitleModal>{title}</TitleModal>
        <CloseModal>
          <button type="button" onClick={onClose}>
            <div style={{ stroke: 'var(--primaryTextColor)' }}>
              <Icon name="close" width="18" height="18" />
            </div>
          </button>
        </CloseModal>
        <Formik
          initialValues={initValues}
          validationSchema={formCardSchema}
          onSubmit={onSubmit}
        >
          <>
            <label></label>
            <TitleCard type="text" name="title" placeholder="Title" />
            <label></label>
            <StyledDescription
              type="textarea"
              name="description"
              placeholder="Description"
            />
            <LabelColorStyle id="colorCard-radio-group">
              Label color
            </LabelColorStyle>
            <StyleRadioButton role="group" aria-labelledby="my-radio-group">
              <RadioButtonColor>
                <RadioButton type="radio" name="colorPicker" value="Blue" />
              </RadioButtonColor>
              <label>
                <Field type="radio" name="colorPicker" value="Red" />
              </label>
              <label>
                <Field type="radio" name="colorPicker" value="Green" />
              </label>
              <label>
                <Field type="radio" name="colorPicker" value="Grey" />
              </label>
              {/* <div>Picked: {values.picked}</div> */}
            </StyleRadioButton>
            <DeadlineStyle>Deadline</DeadlineStyle>
            <Calendar />
            <AddButton type="submit">
              <StylePlus>
                <Icon name="plus" width="14" height="14" />
              </StylePlus>
              <p> {btnText}</p>
            </AddButton>
          </>
        </Formik>
      </ModalBody>
    </Container>
  );
}
