import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import Calendar from '../Calendar'
import {StyledDescription} from './FormAddCard.styled'

const FormCardSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(2, 'Too Short!')
    .max(500, 'Too Long!')
    .required('Required'),
});

export default function FormAddCard() {
  return (
    <Formik
      initialValues={{
        title: '',
        description: '',
        colorPicker: '',
        dealline: '',
      }}
      validationSchema={FormCardSchema}
      onSubmit={(values, actions) => {
        // onAdd(values);
        actions.resetForm();
      }}
    >
      <>
        <label></label>
        <Field type="text" name="title" placeholder="Title" />
        <label></label>
        <StyledDescription type="textarea" name="description" placeholder="Description" />
        <div id="colorCard-radio-group">Label color</div>
        <div role="group" aria-labelledby="my-radio-group">
          <label>
            <Field type="radio" name="colorPicker" value="Blue" />
            Blue
          </label>
          <label>
            <Field type="radio" name="colorPicker" value="Red" />
            Red
          </label>
          <label>
            <Field type="radio" name="colorPicker" value="Green" />
            Green
          </label>
          <label>
            <Field type="radio" name="colorPicker" value="Grey" />
            Grey
          </label>
          {/* <div>Picked: {values.picked}</div> */}
        </div>
        <label>Description</label>
        <Calendar/>
        <button type="submit">Add</button>
      </>
    </Formik>
  );
}
