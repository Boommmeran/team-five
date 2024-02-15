import { FiltersTytle, ModalWrap, CloseBtn } from './FilterModal.styled';

import { Icon } from 'components/Icon';
import { RadioFilters } from 'components/RadioFiltres';

export const FilterModal = ({ closeModal }) => {
  return (
    <ModalWrap>
      <FiltersTytle>Filters</FiltersTytle>
      <CloseBtn type="button" onClick={closeModal}>
        <Icon name="close" stroke="var(--secondaryTextColor)" />
      </CloseBtn>
      <RadioFilters />
    </ModalWrap>
  );
};
