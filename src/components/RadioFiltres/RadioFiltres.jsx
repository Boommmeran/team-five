import { nanoid } from '@reduxjs/toolkit';
import { useSearchParams } from 'react-router-dom';
import {
  RadioButton,
  RadioLabel,
  StyledRadioGroup,
} from './RadioFiltres.styled';

export const RadioFilters = () => {
  const list = ['low', 'medium', 'high', 'without'];
  const [searchParams, setSearchParams] = useSearchParams();
  const currValue = searchParams.get('priority') || 'without';

  const handleFilter = ({ target: { value } }) => {
    setSearchParams({ priority: value });
  };

  return (
    <>
      <h3>Label Colors</h3>
      <StyledRadioGroup role="group" aria-labelledby="my-radio-group">
        {list.map(item => (
          <RadioLabel
            key={nanoid()}
            $priority={item}
            // className={currValue === item ? 'checked' : ''}
          >
            <RadioButton
              type="radio"
              name="priority"
              value={item}
              checked={currValue === item}
              onChange={handleFilter}
            />
          </RadioLabel>
        ))}
      </StyledRadioGroup>
    </>
  );
};
