import React from 'react';
import '../Navbar.css';

const Taodethi = () => {
    // Danh sách môn học
    const hocPhanList = [
        'Bộ câu hỏi',
        'Đề thi',
    ];

    return (
        <div>
            <a href="/bomon/quanlydethi">Các học phần     </a>
            <h3>Học phần:   {localStorage.getItem('selectedSubject')}</h3>
            <h2 className='title'>Tạo đề thi</h2>
            <ul className='list'>
                {hocPhanList.map((monHoc, index) => (
                    <li className='list-item' key={index}>
                        <a className='alist-item' href={index === 0 ? "/bocauhoi" : "/dethi"}>{monHoc}</a>
                        
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Taodethi;
