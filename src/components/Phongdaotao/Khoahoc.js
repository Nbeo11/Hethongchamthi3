import React, { useState } from 'react';
import '../Navbar.css';

const Khoahoc = () => {
    const [khoaHocList, setkhoaHocList] = useState([
        { name: 'K70', nganh: 'CNTT', chuyenNganh: 'UDPM', soLop: 3 },
        { name: 'K71', nganh: 'CNTT', chuyenNganh: 'MTT', soLop: 2 },
        { name: 'K72', nganh: 'KT', chuyenNganh: 'XD', soLop: 4 },
        { name: 'K73', nganh: 'KT', chuyenNganh: 'QS', soLop: 3 },
        { name: 'K74', nganh: 'NN', chuyenNganh: 'NNM', soLop: 5 },
    ]);

    const [hocPhanList, setHocPhanList] = useState([
        'H01',
        'H02',
        'H03',
        'H04',
        'H05',
    ]);
    const [newCourse, setnewCourse] = useState('');
    const [newNganh, setNewNganh] = useState('');
    const [newChuyenNganh, setNewChuyenNganh] = useState('');
    const [newSoLop, setNewSoLop] = useState(0);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [newHocPhan, setNewHocPhan] = useState([]);

    const handleCourseClick = (khoaHoc) => {
        // Save the selected Course to localStorage
        localStorage.setItem('selectedCourse', khoaHoc.name);
    };

    const handleOpenDialog = () => {
        setIsDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };

    const handleAddCourse = () => {
        if (newCourse && newNganh && newChuyenNganh && newSoLop > 0) {
            const newKhoaHoc = {
                name: newCourse,
                nganh: newNganh,
                chuyenNganh: newChuyenNganh,
                soLop: newSoLop,
            };
            setkhoaHocList((prevList) => [...prevList, newKhoaHoc]);
            setnewCourse('');
            setNewNganh('');
            setNewChuyenNganh('');
            setNewSoLop(0);
            handleCloseDialog();
        }
    };

    return (
        <div>
            <h2 className='title'>Các khóa học</h2>
            <button onClick={handleOpenDialog} className='buttonadd'>Thêm khóa học</button>
            <ul className='list'>
                {khoaHocList.map((khoaHoc, index) => (
                    <li className='list-item' key={index}>
                        <a
                            className='alist-item'
                            href={`/dslop/${index}`}
                            onClick={() => handleCourseClick(khoaHoc)}
                        >
                            {khoaHoc.name}
                        </a>
                    </li>
                ))}
            </ul>
            {isDialogOpen && (
                <div className='dialog'>
                    <input
                        type='text'
                        placeholder='Nhập tên khóa học mới'
                        value={newCourse}
                        onChange={(e) => setnewCourse(e.target.value)}
                    />
                    <label htmlFor='nganh'>Ngành:</label>
                    <select
                        id='nganh'
                        value={newNganh}
                        onChange={(e) => setNewNganh(e.target.value)}
                    >
                        <option value='CNTT'>CNTT</option>
                        <option value='KT'>KT</option>
                        <option value='NN'>NN</option>
                    </select>
                    <label htmlFor='chuyenNganh'>Chuyên ngành:</label>
                    <select
                        id='chuyenNganh'
                        value={newChuyenNganh}
                        onChange={(e) => setNewChuyenNganh(e.target.value)}
                    >
                        <option value='UDPM'>UDPM</option>
                        <option value='MTT'>MTT</option>
                        <option value='XD'>XD</option>
                        <option value='QS'>QS</option>
                        <option value='NNM'>NNM</option>
                    </select>
                    <label htmlFor='soLop'>Số lớp:</label>
                    <input
                        type='number'
                        id='soLop'
                        value={newSoLop}
                        onChange={(e) => setNewSoLop(e.target.value)}
                    />
                    <label htmlFor='hocPhan'>Học phần:</label>
                    {hocPhanList.map((hocPhan, index) => (
                        <div key={index}>
                            <input
                                type='checkbox'
                                id={hocPhan}
                                value={hocPhan}
                                checked={newHocPhan.includes(hocPhan)}
                                onChange={() => {
                                    setNewHocPhan((prevHocPhan) => {
                                        if (prevHocPhan.includes(hocPhan)) {
                                            return prevHocPhan.filter((item) => item !== hocPhan);
                                        } else {
                                            return [...prevHocPhan, hocPhan];
                                        }
                                    });
                                }}
                            />
                            <label htmlFor={hocPhan}>{hocPhan}</label>
                        </div>
                    ))}
                    <button onClick={handleAddCourse}>Thêm khóa học</button>
                    <button onClick={handleCloseDialog}>Hủy</button>
                </div>
            )}
        </div>
    );
};

export default Khoahoc;
