import {
  FiltersTytle,
  Picker,
  PickersList,
  PickerName,
  ShowPickers,
} from './FilterModal.styled';

import { Icon } from 'components/Icon';

export const FilterModal = ({ closeModal }) => {
  return (
    <>
      <FiltersTytle>Filters</FiltersTytle>

      <PickerName>
        Label color
        <ShowPickers>Show all</ShowPickers>
      </PickerName>
      <PickersList>
        <Picker>
          <input
            type="radio"
            name="colorPicker"
            value="Grey"
            defaultChecked={true}
          />
          Without priority
        </Picker>
        <Picker>
          <input type="radio" name="colorPicker" value="Blue" />
          Low
        </Picker>
        <Picker>
          <input type="radio" name="colorPicker" value="Red" />
          Medium
        </Picker>
        <Picker>
          <input type="radio" name="colorPicker" value="Green" />
          High
        </Picker>
      </PickersList>
      <Icon name="icon-close" width="20" height="20" onClick={closeModal} />
    </>
  );
};
