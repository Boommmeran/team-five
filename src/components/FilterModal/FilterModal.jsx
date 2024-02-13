import {
  FiltersTytle,
  Picker,
  PickersList,
  PickerName,
  ShowPickers,
  ModalWrap,
  HorizontalLine,
  LabelName,
  CloseBtn,
} from './FilterModal.styled';

import { Icon } from 'components/Icon';
import { RadioFilters } from 'components/RadioFiltres';

export const FilterModal = ({ closeModal }) => {
  return (
    <ModalWrap>
      <FiltersTytle>Filters</FiltersTytle>
      <CloseBtn type="button" onClick={closeModal}>
        <Icon name="close" />
      </CloseBtn>
      <HorizontalLine />
      <LabelName>
        Label color
        <ShowPickers type="button">Show all</ShowPickers>
      </LabelName>
      <PickersList>
        <Picker>
          <input
            width="14"
            height="14"
            type="radio"
            name="colorPicker"
            value="Grey"
            defaultChecked={true}
            style={{ opacity: 0.5 }}
          />
          <PickerName>Without priority</PickerName>
        </Picker>
        <Picker>
          <input
            type="radio"
            name="colorPicker"
            value="Blue"
            style={{ opacity: 0.5 }}
          />
          <PickerName>Low</PickerName>
        </Picker>
        <Picker>
          <input
            type="radio"
            name="colorPicker"
            value="Red"
            style={{ opacity: 0.5 }}
          />
          <PickerName>Medium</PickerName>
        </Picker>
        <Picker>
          <input
            type="radio"
            name="colorPicker"
            value="Green"
            style={{ opacity: 0.5 }}
          />
          <PickerName>High</PickerName>
        </Picker>
      </PickersList>
      <RadioFilters/>
    </ModalWrap>
  );
};
