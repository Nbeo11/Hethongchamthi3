import React from 'react';
import '../Navbar.css';

const Quanlygvdt = () => {
    // Danh sách môn học
    const hocPhanList = [
        'Tạo đề thi',
        'Giảng viên tạo bộ câu hỏi',
    ];

    return (
        <div>
            <a href="/bomon/quanlydethi">Các học phần     </a>
            <h3>Học phần:   {localStorage.getItem('selectedSubject')}</h3>
            <h2 className='title'>Quản lý đề thi</h2>
            <ul className='list'>
                {hocPhanList.map((monHoc, index) => (
                    <li className='list-item' key={index}>
                        <a className='alist-item' href={index === 0 ? "/taodethi/{index}" : "/gvtaobocauhoi/{index}"}>{monHoc}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Quanlygvdt;
