import React from 'react';
import '../Navbar.css';

const HocPhan = () => {
    // Danh sách môn học
    const hocPhanList = [
        'Nhập môn lập trình (2023_int123)',
        'Lập trình hướng đối tượng (2023_int1234)',
        'Lập trình hướng đối tượng (2023_int1234)',
        'Lập trình hướng đối tượng (2023_int1234)',
        'Lập trình hướng đối tượng (2023_int1234)',
        'Lập trình hướng đối tượng (2023_int1234)',
    
    ];

    return (
        <div>
            <h2 className='title'>Danh sách các học phần</h2>
            <ul className='list'>
                {hocPhanList.map((monHoc, index) => (
                    <li className='list-item' key={index}>{monHoc}</li>
                ))}
            </ul>
        </div>
    );
};

export default HocPhan;