import React from 'react';
import '../Navbar.css';

const Theokhoa = () => {
    const hocPhanList = ['Kỳ 1', 'Kỳ 2', 'Kỳ 3', 'Kỳ 4'];

    const handleSubjectClick = (kyhoc) => {
        localStorage.setItem('selectedKyhoc', kyhoc);
    };

    return (
        <div>
            <a href="/phongkhaothi/taodotthi">Khóa học     </a>
            <h3>Khoa:   {localStorage.getItem('selectedKhoa')}</h3>
            <h2 className='title'>Bộ môn</h2>
            <ul className='list'>
                {hocPhanList.map((kyhoc, index) => (
                    <li className='list-item' key={index}>
                        <a
                            className='alist-item'
                            href={`/theoky/${index}`}
                            onClick={() => handleSubjectClick(kyhoc)}
                        >
                            {kyhoc}
                        </a>
                    </li>
                ))}
            </ul>

    
        </div>
    );
};

export default Theokhoa;
