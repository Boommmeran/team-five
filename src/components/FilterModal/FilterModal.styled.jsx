import styled from 'styled-components';

export const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
        backgroundColor: '#151515',
  },
//   overlay: {
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
};

export const FiltersTytle = styled.h2`
    font-family: "Poppins", sans-serif;
font-weight: 500;
font-size: 18px;
letter-spacing: -0.02em;
margin-left: 24px;
color: #fff;
`;

export const PickerName = styled.p`
    font-family: "Poppins", sans-serif;
font-weight: 500;
font-size: 14px;
letter-spacing: -0.02em;
margin-left: 24px;
width: 300px;
color: #fff;
`;

export const ShowPickers = styled.button`
    font-family: "Poppins", sans-serif;
font-weight: 400;
font-size: 12px;
letter-spacing: -0.02em;
text-decoration: underline;
/* color: rgba(255, 255, 255, 0.5); */
`;

export const PickersList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const Picker = styled.label`
    font-family: "Poppins", sans-serif;
font-weight: 400;
font-size: 12px;
letter-spacing: -0.02em;
color: rgba(255, 255, 255, 0.5);
`
