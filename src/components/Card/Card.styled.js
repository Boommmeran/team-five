import styled from 'styled-components';

export const CardBody = styled.li`
  border-radius: 8px;
  width: 335px; // змінити на /* width: 100%; */ коли стане у колонкуи
  height: 154px;
  background-color: var(--extraBgColor);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  padding: 14px 20px 14px 24px;
`;
export const CardColor = styled.div`
  position: absolute;
  border-radius: 4px 0 0 4px;
  width: 4px;
  height: 154px;
  top: 0px;
  left: 0px;
  background-color: var(--priority-${({ $priority }) => $priority});
`;
export const CardTitle = styled.h4`
  text-align: left;
  font-family: 'Poppins-SemiBold';
  font-size: 14px;
  letter-spacing: -0.02em;
  color: var(--textColorcalendar);
  margin-bottom: 8px;
`;
export const CardDescription = styled.p`
  text-align: left;
  font-size: 12px;
  line-height: 1.33333;
  letter-spacing: -0.02em;
  color: var(--secondaryTextColor);
  width: 290px;
  height: 38px;
  overflow: hidden; /* скрывает текст, который не помещается в контейнер */
  text-overflow: ellipsis; /* отображает многоточие для обрезанного текста */
  margin-bottom: 14px;
`;

export const CardSolid = styled.div`
  border: 1px solid var(--cards-line);
  margin-bottom: 14px;
`;

export const CardDetals = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardInformation = styled.div`
  display: flex;
`;

export const Priority = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 14px;
`;

export const PriorityDetals = styled.div`
  display: flex;
`;

export const PriorityTitle = styled.p`
  text-align: left;
  font-size: 8px;
  letter-spacing: -0.02em;
  color: var(--secondaryTextColor);
  margin-bottom: 4px;
`;
export const PriorityColor = styled.div`
  border-radius: 100%;
  width: 12px;
  height: 12px;
  margin-right: 4px;
  background-color: var(--priority-${({ $priority }) => $priority});
`;

export const PriorityTipe = styled.p`
  font-size: 10px;
  letter-spacing: -0.02em;
  color: var(--textColorcalendar);
  &:first-letter {
    text-transform: uppercase;
}
`;

export const Deadline = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 14px;
`;

export const DeadlineTitle = styled.p`
  text-align: left;
  font-size: 8px;
  letter-spacing: -0.02em;
  color: var(--secondaryTextColor);
  margin-bottom: 4px;
`;

export const DeadlineDate = styled.p`
  text-align: left;
  font-size: 10px;
  letter-spacing: -0.02em;
  color: var(--textColorcalendar);
`;
export const CardButtons = styled.div`
  display: flex;
  gap: 8px;
  stroke: var(--secondaryTextColor); //не змінюється в темах
  button {
    margin: 0;
    padding: 0;
    border: none;
    background: none;
  }
`;
export const Bell = styled.button`
  stroke: ${({$bell}) => ($bell ? 'var(--accent)' : 'none')}
`;

export const Button = styled.button`
  cursor: pointer;
  transition: var(--transition);
  stroke: var(--secondaryTextColor);
  &:is(:hover, :focus) {
    stroke: var(--accent);
  }
`;
