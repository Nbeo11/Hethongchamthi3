import React from 'react';
import '../Navbar.css';

const DsLop = () => {
    const hocPhanList = [
        '74DCHT21',
        '74DCHT22',
        '74DCHT23',
        '74DCHT24'
    
    ];

    return (
        <div>
            <h2 className='title'>Danh sách các lớp</h2>
            <ul className='list'>
                {hocPhanList.map((monHoc, index) => (
                    <li className='list-item' key={index}>{monHoc}</li>
                ))}
            </ul>
        </div>
    );
};

export default DsLop;
