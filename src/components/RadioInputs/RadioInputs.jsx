import { nanoid } from '@reduxjs/toolkit';
import {
  RadioButton,
  RadioLabel,
  StyledRadioGroup,
} from './RadioInputs.styled';
import { useState } from 'react';

export const RadioInputs = ({ defaultChecked, onPriorityChange }) => {
  const list = ['low', 'medium', 'high', 'without'];
  const [currValue, setCurrValue] = useState(defaultChecked);

  const handleInput = ({ target: { value } }) => {
    onPriorityChange(value);
    setCurrValue(value);
  };

  return (
    <StyledRadioGroup role="group" aria-labelledby="my-radio-group">
      {list.map(item => (
        <RadioLabel
          key={nanoid()}
          $priority={item}
          className={currValue === item ? 'checked' : ''}
        >
          <RadioButton
            type="radio"
            name="priority"
            value={item}
            checked={currValue === item}
            onChange={handleInput}
          />
        </RadioLabel>
      ))}
    </StyledRadioGroup>
  );
};
