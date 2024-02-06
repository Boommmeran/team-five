import styled from 'styled-components';

export const CardBody = styled.div`
  border-radius: 8px;
  width: 335px;
  /* width: 100%; */
  height: 154px;
  background: var(--primaryBgColor);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  padding: 14px 20px 14px 24px;

  margin: 20px;
  border: 1px solid black;

  @media only screen and (min-width: 375px) {
    width: 335px;
  }

  @media only screen and (min-width: 768px) {
    width: 400px;
  }
`;
export const CardColor = styled.div`
  position: absolute;
  border-radius: 4px 0 0 4px;
  width: 4px;
  height: 154px;
  top: 0px;
  left: 0px;
  background: rgba(22, 22, 22, 0.3);
`;
export const CardTitle = styled.h4`
  text-align: left;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: #161616;
  margin-bottom: 8px;
`;
export const CardDescription = styled.p`
  text-align: left;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.33333;
  letter-spacing: -0.02em;
  color: rgba(22, 22, 22, 0.7);
  width: 290;
  height: 38;
  margin-bottom: 14px;
`;

export const CardSolid = styled.div`
  border: 1px solid;
  border-color: rgba(22, 22, 22, 0.1);
  margin-bottom: 14px;
`;

export const CardDetals = styled.div`
  display: flex;
  justify-content:space-between;
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
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 8px;
  letter-spacing: -0.02em;
  color: rgba(22, 22, 22, 0.5);
  margin-bottom: 4px;
`;
export const PriorityColor = styled.div`
  border-radius: 100%;
  width: 14px;
  height: 14px;
  background-color: rgba(22, 22, 22, 0.3);
  margin-right: 4px;
`;

export const PriorityTipe = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 10px;
  letter-spacing: -0.02em;
  color: #161616;
`;

export const Deadline = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 14px;
`;

export const DeadlineTitle = styled.p`
  text-align: left;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 8px;
  letter-spacing: -0.02em;
  color: rgba(22, 22, 22, 0.5);
  margin-bottom: 4px;
`;

export const DeadlineDate = styled.p`
  text-align: left;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 10px;
  letter-spacing: -0.02em;
  color: #161616;
`;
export const CardButtons = styled.div`
display:flex;
gap:8px;
  /* button {
    margin: 0;
    padding: 0;
    border: none;
    background: none;
  } */
`;





