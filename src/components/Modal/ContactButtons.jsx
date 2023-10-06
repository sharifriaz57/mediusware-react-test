import React from 'react';

const ContactButtons = ({ setIsOpenModalA, setIsOpenModalB }) => {
    const handleAllContactModal = () => {
        setIsOpenModalB(false);
        setIsOpenModalA(true);
    }

    const handleUsContactModal = () => {
        setIsOpenModalA(false);
        setIsOpenModalB(true);
    }

    return (
        <div className='d-flex justify-content-center gap-3'>
            <button className='btn text-white' style={{ backgroundColor: '#46139f' }} onClick={handleAllContactModal}>All Contacts</button>
            <button className='btn text-white' style={{ backgroundColor: '#ff7f50' }} onClick={handleUsContactModal}>US Contacts</button>
        </div>
    )
}

export default ContactButtons