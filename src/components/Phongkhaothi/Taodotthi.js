import React from 'react';
import '../Navbar.css';

const Taodotthi = () => {
    const hocPhanList = ['K70', 'K71', 'K72', 'K73', 'K74', 'K75'];

    const handleSubjectClick = (khoahoc) => {
        localStorage.setItem('selectedKhoa', khoahoc);
    };

    return (
        <div>

            <h2 className='title'>Khóa học</h2>
            <ul className='list'>
                {hocPhanList.map((khoahoc, index) => (
                    <li className='list-item' key={index}>
                        <a
                            className='alist-item'
                            href={`/theokhoa/${index}`}
                            onClick={() => handleSubjectClick(khoahoc)}
                        >
                            {khoahoc}
                        </a>
                    </li>
                ))}
            </ul>

    
        </div>
    );
};

export default Taodotthi;
