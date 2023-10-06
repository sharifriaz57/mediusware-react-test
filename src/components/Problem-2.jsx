import React, { useState } from 'react';
import ModalA from './Modal/ModalA';
import ModalB from './Modal/ModalB';

const Problem2 = () => {
    const [isOpenModalA, setIsOpenModalA] = useState(false);
    const [isOpenModalB, setIsOpenModalB] = useState(false);

    const handleModalA = () => {
        setIsOpenModalA(true)
    }

    const handleModalB = () => {
        setIsOpenModalB(true)
    }

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-lg btn-outline-primary" onClick={() => handleModalA()} type="button" >All Contacts</button>
                    <button className="btn btn-lg btn-outline-warning" onClick={() => handleModalB('modalA')} type="button" >US Contacts</button>
                </div>

                <ModalA setIsOpenModalA={setIsOpenModalA} setIsOpenModalB={setIsOpenModalB} isOpen={isOpenModalA} onDismiss={() => setIsOpenModalA(false)} />
                <ModalB setIsOpenModalA={setIsOpenModalA} setIsOpenModalB={setIsOpenModalB} isOpen={isOpenModalB} onDismiss={() => setIsOpenModalB(false)} />
            </div>
        </div>
    );
};

export default Problem2;