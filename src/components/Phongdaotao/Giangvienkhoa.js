import React from 'react';
import '../Navbar.css';

const Giangvienkhoa = () => {
    const hocPhanList = ['Lập trình c', 'Lập trình c++', 'Lập trình c#'];

    const handleSubjectClick = (monHoc) => {
        localStorage.setItem('selectedSubject', monHoc);
    };

    return (
        <div>
            <a href="/phongdaotao/giangvientruong">Khoa     </a>
            <h3>Khoa:   {localStorage.getItem('selectedSubject')}</h3>
            <h2 className='title'>Bộ môn</h2>
            <ul className='list'>
                {hocPhanList.map((monHoc, index) => (
                    <li className='list-item' key={index}>
                        <a
                            className='alist-item'
                            href={`/giangvienbomon/${index}`}
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

export default Giangvienkhoa;
