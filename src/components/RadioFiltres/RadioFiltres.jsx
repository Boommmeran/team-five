import { nanoid } from '@reduxjs/toolkit';
import { useSearchParams } from 'react-router-dom';
import { capitalizer } from 'helpers/capitalizer';
import {
  FiltersWrap,
  FilterLabel,
  RadioLabel,
  StyledRadioGroup,
  ShowAllBtn,
  FiltersSpan,
} from './RadioFiltres.styled';

export const RadioFilters = () => {
  const listParams = ['without','low', 'medium', 'high', ];
  const [searchParams, setSearchParams] = useSearchParams();
  const currValue = searchParams.get('priority');

  const handleFilter = ({ target: { value } }) => {
    setSearchParams({ priority: value });
  };

  const handleShowAll = () => {
    setSearchParams({});
  }

  return (
    <>
      <FiltersWrap>
        <FilterLabel>Label color</FilterLabel>
        <ShowAllBtn type="button" onClick={handleShowAll}>
          Show all
        </ShowAllBtn>
      </FiltersWrap>
      <StyledRadioGroup role="group" aria-labelledby="my-radio-group">
        {listParams.map(item => {
          const text = capitalizer(item);
          return <RadioLabel
            key={nanoid()}
            $priority={item}
            className={currValue === item ? 'checked' : ''}
          >
            <input
              type="radio"
              name="priority"
              value={item}
              checked={currValue === item}
              onChange={handleFilter}
            />
            <FiltersSpan>{text}</FiltersSpan>
          </RadioLabel>;
        })}
      </StyledRadioGroup>
    </>
  );
};
