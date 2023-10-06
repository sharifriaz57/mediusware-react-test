import React, { useEffect, useState } from 'react';
import ContactButtons from './ContactButtons';
import ModalC from './ModalC';

const ModalA = ({ setIsOpenModalA, setIsOpenModalB, onDismiss = () => { }, isOpen = false, }) => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [isEven, setIsEven] = useState(false);
    const [isOpenModalC, setIsOpenModalC] = useState(false);
    const [modalData, setModalData] = useState(null);

    const fetchData = async () => {
        const response = await fetch(`https://contact.mediusware.com/api/contacts/?page=1`);
        const data = await response.json();

        setData(data.results);
    }

    const filterData = () => {
        if (isEven) {
            const filtered = data.filter(item => (item.id % 2) == 0)
            setFilteredData(filtered);
        } else {
            setFilteredData(data)
        }
    }

    const handleContactDetalis = (data) => {
        setIsOpenModalC(true);
        setModalData(data);
    }

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        filterData();
    }, [isEven, data])

    return (
        <>
            <div className={`modal ${isOpen ? 'd-block' : 'd-none'}`} id='modalA'>
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header d-flex justify-content-between">
                            <h5 className="modal-title">Modal A</h5>
                            <ContactButtons setIsOpenModalA={setIsOpenModalA} setIsOpenModalB={setIsOpenModalB} />
                        </div>
                        <div className="modal-body">
                            <table className="table table-sm table-bordered">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>ID</th>
                                        <th>Contacts</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredData.map((item, key) => (
                                        <tr key={key} onClick={() => handleContactDetalis(item)}>
                                            <td>{++key}</td>
                                            <td>{item.id}</td>
                                            <td>{item.phone}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer d-flex justify-content-between">
                            <div className="form-check">
                                <input className="form-check-input" name='onlyEven' onChange={() => setIsEven(prev => !prev)} type="checkbox" id="onlyEven" />
                                <label className="form-check-label" htmlFor="onlyEven">
                                    Only Even
                                </label>
                            </div>
                            <button type="button" className="btn text-white" style={{ backgroundColor: '#46139f', borderColor: '#46139f' }} onClick={onDismiss}>Close</button>
                        </div>
                    </div>
                </div >
            </div >

            <ModalC modalData={modalData} isOpen={isOpenModalC} onDismiss={() => setIsOpenModalC(false)} />
        </>
    )
}

export default ModalA