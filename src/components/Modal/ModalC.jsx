import React from 'react';

const ModalC = ({ modalData, onDismiss = () => { }, isOpen = false, }) => {

    return (
        <div className={`modal ${isOpen ? 'd-block' : 'd-none'}`} id='modalA'>
            <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header d-flex justify-content-between">
                        <h5 className="modal-title">Modal C</h5>
                    </div>
                    <div className="modal-body">
                        <table className="table table-sm table-bordered">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Contacts</th>
                                </tr>
                            </thead>
                            <tbody>
                                {modalData &&
                                    <tr>
                                        <td>{modalData.id}</td>
                                        <td>{modalData.phone}</td>
                                    </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="modal-footer d-flex justify-content-between">
                        <button type="button" className="btn text-white" style={{ backgroundColor: '#46139f', borderColor: '#46139f' }} onClick={onDismiss}>Close</button>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default ModalC