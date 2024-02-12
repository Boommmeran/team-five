import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Calendar } from 'components/Calendar';
import { Icon } from 'components/Icon';

import {
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
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/cards/cardsOperations.js';

const priority = ['without', 'low', 'medium', 'high'];

const formCardSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, `It's can be up to 3 characters long`)
    .max(10, 'Too Long!')
    .required(`This field is required.`),
  text: Yup.string()
    .min(10, `It's can be up to 10 characters long`)
    .max(500, 'Too Long!')
    .required(`This field is required.`),
  priority: Yup.string().oneOf(priority),
  deadline: Yup.date(),
});

export default function AddCardModal({ title, btnText, onClose, columnId }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const dispatch = useDispatch();

  const onSubmit = values => {
    dispatch(addCard({ values, columnId }));
    onClose();
  };

  return (
    <Container>
      <TitleModal>{title}</TitleModal>
      <CloseModal>
        <button type="button" onClick={onClose}>
          <Icon
            name="close"
            width="18"
            height="18"
            stroke="var(--primaryTextColor)"
          />
        </button>
      </CloseModal>
      <Formik
        initialValues={{
          title: '',
          text: '',
          priority: 'without',
          deadline: selectedDate,
        }}
        validationSchema={formCardSchema}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, setFieldValue }) => (
          <StyledForm onSubmit={handleSubmit}>
            <TitleCard type="text" name="title" placeholder="Title" />
            <ErrMsg component="p" name="title" />
            <Label>
              <StyledDescription
                rows={4}
                component="textarea"
                name="text"
                placeholder="Description"
              />
              <ErrMsg component="p" name="text" />
            </Label>
            <LabelColorStyle id="colorCard-radio-group">
              Label color
            </LabelColorStyle>
            <StyleRadioButton role="group" aria-labelledby="my-radio-group">
              <RadioButtonBlu>
                <RadioButton type="radio" name="priority" value="low" />
              </RadioButtonBlu>
              <RadioButtonRed>
                <RadioButton type="radio" name="priority" value="medium" />
              </RadioButtonRed>
              <RadioButtonGreen>
                <RadioButton type="radio" name="priority" value="high" />
              </RadioButtonGreen>
              <RadioButtonGrey>
                <RadioButton type="radio" name="priority" value="without" />
              </RadioButtonGrey>
            </StyleRadioButton>
            <DeadlineStyle>Deadline</DeadlineStyle>
            <Calendar
              selectedDate={selectedDate}
              onDateChange={date => {
                setSelectedDate(date);
                setFieldValue('deadline', date);
              }}
            />
            <AddButton type="submit">
              <StylePlus>
                <Icon name="plus" width="14" height="14" />
              </StylePlus>
              <p>{btnText}</p>
            </AddButton>
          </StyledForm>
        )}
      </Formik>
    </Container>
  );
}
