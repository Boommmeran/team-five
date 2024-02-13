import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../../redux/auth/authOperation';

import { useClickOutside } from 'hooks/useClickOutside';
import { Icon } from 'components/Icon';
import { DrpdwnBtn, ThemesList, ThemeItem } from './ThemeSwitcher.styled';

export const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const dispatch = useDispatch();

  const visibility = isOpen ? 'visible' : 'hidden';
  const opacity = isOpen ? '1' : '0';
  const transform = isOpen ? 'translateY(10px)' : 'translateY(0)';

  useClickOutside(menuRef, () => {
    if (isOpen) {
      setTimeout(() => setIsOpen(false), 50);
    }
  });

  return (
    <div ref={menuRef}>
      <DrpdwnBtn type="button" onClick={() => setIsOpen(!isOpen)}>
        Theme
        <Icon
          name="chevron-down"
          width="16"
          heigth="16"
          stroke="var(--secondaryTextColor)"
        />
      </DrpdwnBtn>
      <ThemesList
        visibility={visibility}
        opacity={opacity}
        transform={transform}
      >
        <ThemeItem onClick={() => dispatch(changeTheme({ theme: 'light' }))}>
          Light
        </ThemeItem>
        <ThemeItem onClick={() => dispatch(changeTheme({ theme: 'dark' }))}>
          Dark
        </ThemeItem>
        <ThemeItem onClick={() => dispatch(changeTheme({ theme: 'violet' }))}>
          Violet
        </ThemeItem>
      </ThemesList>
    </div>
  );
};
