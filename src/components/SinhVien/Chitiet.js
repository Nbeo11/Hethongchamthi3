import React from 'react';
import '../Navbar.css';

const Chitiet = () => {
    // Danh sách môn học
    const hocPhanList = [
        'Kết quả học tập',
        'Phúc khảo',
    ];

    return (
        <div>
            <h2 className='title'></h2>
            <ul className='list'>
                {hocPhanList.map((monHoc, index) => (
                    <li className='list-item' key={index}>{monHoc}</li>
                ))}
            </ul>
        </div>
    );
};

export default Chitiet;