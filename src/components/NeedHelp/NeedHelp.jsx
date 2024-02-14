import { useState } from 'react';
import Modal from 'react-modal';
import { Icon } from 'components/Icon';
import { SendEmail } from 'components/SendEmail';
import { NeedHelpBlock, NeedHelpBtn } from './NeedHelp.styled';

export const NeedHelp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <NeedHelpBlock>
      <picture>
        <source
          srcSet="
              https://res.cloudinary.com/dt7u6ic1c/image/upload/v1707115407/cactus-1x.webp 1x,
              https://res.cloudinary.com/dt7u6ic1c/image/upload/v1707115407/cactus-2x.webp 2x
            "
        />
        <img
          src="https://res.cloudinary.com/dt7u6ic1c/image/upload/v1707115407/cactus-1x.webp"
          width="54"
          height="78"
          alt="little cute cactus"
        />
      </picture>
      <p>
        If you need help with{' '}
        <span style={{ color: 'var(--accent)' }}>TaskPro</span>, check out our
        support resources or reach out to our customer support team.
      </p>
      <NeedHelpBtn type="button" onClick={openModal}>
        <Icon
          name="help"
          width="20"
          height="20"
          stroke="var(--primaryTextColor)"
        />
        <span>Need help?</span>
      </NeedHelpBtn>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Need help modal"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <SendEmail onClose={closeModal} />
      </Modal>
    </NeedHelpBlock>
  );
};
