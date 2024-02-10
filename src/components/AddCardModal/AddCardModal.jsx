import { Formik } from 'formik';
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
  RadioButton,
  RadioButtonBlu,
  RadioButtonRed,
  RadioButtonGreen,
  RadioButtonGrey,
  StyledForm,
  ErrMsg,
  Label,
} from './AddCardModal.styled.jsx';

const priority = ['without', 'low', 'medium', 'high'];

const formCardSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, `It's can be up to 3 characters long`)
    .max(10, 'Too Long!')
    .required(`This field is required.`),
  description: Yup.string()
    .min(10, `It's can be up to 10 characters long`)
    .max(500, 'Too Long!')
    .required(`This field is required.`),
  colorPriority: Yup.string().oneOf(priority),
  dealline: Yup.string(),
});

export default function AddCardModal({ title, btnText, onClose, reqFunc }) {
  // тут має бути логіка отримання значень вже існуючої
  // картки і подальший запис в initValues наприклад через оператор ??
  // тобто треба переписати initialValues у формат
  // "збережені дані" (для випадку Edit Card) ?? "початкові значення" (для випадку Add Card)

  const initValues = {
    title: '',
    description: '',
    colorPriority: 'without',
    dealline: '',
  };
  const onSubmit = values => {
    reqFunc(values);
    onClose();
    console.log(values);
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
          <StyledForm>
            <TitleCard type="text" name="title" placeholder="Title" />
            <ErrMsg component="p" name="title" />
            <Label>
              <StyledDescription
                rows={4}
                component="textarea"
                name="description"
                placeholder="Description"
              />
              <ErrMsg component="p" name="description" />
            </Label>
            <LabelColorStyle id="colorCard-radio-group">
              Label color
            </LabelColorStyle>
            <StyleRadioButton role="group" aria-labelledby="my-radio-group">
              <RadioButtonBlu>
                <RadioButton type="radio" name="colorPriority" value="low" />
              </RadioButtonBlu>
              <RadioButtonRed>
                <RadioButton type="radio" name="colorPriority" value="medium" />
              </RadioButtonRed>
              <RadioButtonGreen>
                <RadioButton type="radio" name="colorPriority" value="high" />
              </RadioButtonGreen>
              <RadioButtonGrey>
                <RadioButton
                  type="radio"
                  name="colorPriority"
                  value="without"
                />
              </RadioButtonGrey>
            </StyleRadioButton>
            <DeadlineStyle>Deadline</DeadlineStyle>
            <Calendar />
            <AddButton type="submit">
              <StylePlus>
                <Icon name="plus" width="14" height="14" />
              </StylePlus>
              <p> {btnText}</p>
            </AddButton>
          </StyledForm>
        </Formik>
      </ModalBody>
    </Container>
  );
}
