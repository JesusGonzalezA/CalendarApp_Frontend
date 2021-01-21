import React, { useState } from 'react'
import Modal from 'react-modal';

import { CalendarModalStyles } from '../../helpers/CalendarModalStyles';
 
const customStyles = CalendarModalStyles;
Modal.setAppElement('#root');

export const CalendarModal = () => {

    const [isOpen, setIsOpen] = useState(true);

    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <Modal
          isOpen={ isOpen }
        //   onAfterOpen={afterOpenModal}
          onRequestClose={ closeModal }
          style={ customStyles }
          closeTimeoutMS={ 200 }
          className="modal"
          overlayClassName="modal-fondo"
        >
            
        </Modal>
    )
}
