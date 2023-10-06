import React, { useEffect, useState } from 'react';

const Problem1 = () => {
    const initData = {
        name: "",
        status: "",
    };
    const [input, setInput] = useState(initData);
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [show, setShow] = useState('all');

    const statusOrder = {
        active: 1,
        completed: 2,
    };

    const handleClick = (val) => {
        setShow(val);
    }

    const handleInput = (event) => {
        const { name, value } = event.target;

        setInput(prevData => ({
            ...prevData, [name]: value
        }));
    }

    const filterData = () => {
        if (show == 'all') {
            data.sort((a, b) => {
                return (statusOrder[a.status] || 500) - (statusOrder[b.status] || 500);
            });

            setFilteredData(data);
        } else {
            const filtered = data.filter(item => item.status.toLowerCase() === show);
            setFilteredData(filtered);
        }
    }

    const handleForm = (e) => {
        e.preventDefault();
        setData(prev => [...prev, input]);
    }

    useEffect(() => {
        setInput(initData);
    }, [data])

    useEffect(() => {
        filterData();
    }, [show, data])

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form className="row gy-2 gx-3 align-items-center mb-4" onSubmit={handleForm}>
                        <div className="col-auto">
                            <input type="text" className="form-control" onChange={handleInput} name='name'
                                value={input.name} placeholder="Name" />
                        </div>
                        <div className="col-auto">
                            <input type="text" className="form-control" onChange={handleInput} name='status'
                                value={input.status} placeholder="Status" />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'all' && 'active'}`} type="button" onClick={() => handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'active' && 'active'}`} type="button" onClick={() => handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'completed' && 'active'}`} type="button" onClick={() => handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((item, key) => (
                                <tr key={key}>
                                    <td>{item.name}</td>
                                    <td>{item.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;