import React from 'react';
import '../Navbar.css';

const Taobodethi = () => {
    // Danh sách môn học
    const hocPhanList = [
        'Kết quả học tập',
        'Lịch thi',
        'Phúc khảo',
    ];

    return (
        <div>
            <h2 className='title'>Tạo bộ đề thi</h2>
            <ul className='list'>
                {hocPhanList.map((monHoc, index) => (
                    <li className='list-item' key={index}>{monHoc}</li>
                ))}
            </ul>
        </div>
    );
};

export default Taobodethi;