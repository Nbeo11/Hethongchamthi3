import React from 'react';
import '../Navbar.css';

const Chamthi = () => {
    // Danh sách môn học
    const hocPhanList = [
        'Nhập môn lập trình (2023_int123)',
        'Lập trình hướng đối tượng (2023_int1234)',
    ];
    const handleSubjectClick = (monHoc) => {
        // Save the selected subject to localStorage
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
                            href={`/gvchamthi/${index}`}
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

export default Chamthi;