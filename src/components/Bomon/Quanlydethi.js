import React from 'react';
import '../Navbar.css';

const Quanlydethi = () => {
    const hocPhanList = [
        'Nhập môn lập trình (2023_int123)',
        'Lập trình hướng đối tượng (2023_int1234)',
    ];
    const handleSubjectClick = (monHoc) => {
        localStorage.setItem('selectedSubject', monHoc);
    };
    return (
        <div>
            <h2 className='title'>Các học phần</h2>
            <ul className='list'>
                {hocPhanList.map((monHoc, index) => (
                    <li className='list-item' key={index}>

                        <a
                            className='alist-item'
                            href={`/quanlygvdt/${index}`}
                            onClick={() => handleSubjectClick(monHoc)}
                        >
                            {monHoc}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Quanlydethi;
