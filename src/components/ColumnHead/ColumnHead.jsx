import { Icon } from 'components/Icon';
import { HeadWrap, IconedBtn, Title, Wrap } from './ColumnHead.styled';
import { useState } from 'react';
import Modal from 'react-modal';
import { EditColumnFormik } from 'components/EditColumnFormik';
import { useDispatch } from 'react-redux';
import { deleteColumn } from '../../redux/columns/columnsOperations';

export const ColumnHead = ({ title, columnId }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useDispatch();

  const handleModalOpen = () => {
    setIsOpenModal(true);
  };

  const handleModalClose = () => {
    setIsOpenModal(false);
  };

  const handleDeleteColumn = () => {
    dispatch(deleteColumn({ columnId }));
  };

  return (
    <>
      <HeadWrap>
        <Title>{title}</Title>
        <Wrap>
          <IconedBtn type="button" onClick={handleModalOpen}>
            <Icon name="pencil" />
          </IconedBtn>
          <IconedBtn type="button" onClick={handleDeleteColumn}>
            <Icon name="trash" />
          </IconedBtn>
        </Wrap>
      </HeadWrap>
      <Modal
        isOpen={isOpenModal}
        onRequestClose={handleModalClose}
        className="modal-content"
        overlayClassName="modal-overlay"
        contentLabel="Column Edit Modal"
        ariaHideApp={false}
      >
        <EditColumnFormik
          title={title}
          columnId={columnId}
          onClose={handleModalClose}
        />
      </Modal>
    </>
  );
};
