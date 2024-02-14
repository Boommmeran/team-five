import { useEffect } from 'react';
import { Column } from 'components/Column';
import {
  IconWrap,
  AddBtn,
  Wrap,
  ColumnItem,
  Container,
  ColumnList,
  customStyles,
} from './Board.styled';
import { Icon } from 'components/Icon';
import Modal from 'react-modal';
import { useState } from 'react';
import { AddColumnFormik } from 'components/AddColumnFormik/AddColumnFormik';
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { useParams } from 'react-router-dom';

export const Board = () => {
  
  const [modalIsOpen, setIsOpen] = useState(false);
  const { columns } = useSelector(state => state.columns);
  const { boardId } = useParams();
  

  const openModal = () => {
    setIsOpen(true);
  };

  

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Container>
        <Wrap>
          <ColumnList>
            {columns.map(({ _id, title }) => {
              return (
                <ColumnItem key={nanoid()}>
                  <Column title={title} columnId={_id} />
                </ColumnItem>
              );
            })}
          </ColumnList>
          <AddBtn type="button" onClick={openModal}>
            <IconWrap>
              <Icon name="plus" />
            </IconWrap>{' '}
            Add another column
          </AddBtn>
        </Wrap>
      </Container>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Column Edit Modal"
        ariaHideApp={false}
      >
        <AddColumnFormik onClose={closeModal} boardId={boardId} />
      </Modal>
    </>
  );
};
