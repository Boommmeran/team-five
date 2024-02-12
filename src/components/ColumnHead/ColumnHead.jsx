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
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      boxShadow: '0px 4px 16px 0px #1616160D',
      padding: 0,
    },
    overlay: {
      background: 'rgba(0,0,0,0.5)',
    },
  };

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
        style={customStyles}
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
