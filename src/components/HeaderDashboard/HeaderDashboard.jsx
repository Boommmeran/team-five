import { useParams } from 'react-router-dom';
import { FilterBtn, BoardName, Wrap } from './HeaderDashboard.styled';
import { Icon } from 'components/Icon';

export const HeaderDashboard = () => {
  const { boardName } = useParams();
  return (
    <Wrap>
      <BoardName>{boardName}</BoardName>
      <FilterBtn type="button">
        <Icon name="filter" />
        Filters{' '}
      </FilterBtn>
    </Wrap>
  );
};
