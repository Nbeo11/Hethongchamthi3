import React, { useEffect, useState } from 'react';
import '../Navbar.css';

const Giangvientruong = () => {
    const hocPhanList = ['Công nghệ thông tin', 'Cơ điện tử'];
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [showSuccessDialog, setShowSuccessDialog] = useState(false);

    const handleSubjectClick = (monHoc) => {
        localStorage.setItem('selectedSubject', monHoc);
    };

    const handleOpenDialog = () => {
        setIsDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };

    const handleAddGiangVien = () => {
        setShowSuccessDialog(true);
        setTimeout(() => {
            setShowSuccessDialog(false);
            handleCloseDialog();
        }, 1000);
    };

    useEffect(() => {
        return () => {
            setShowSuccessDialog(false);
        };
    }, []);

    return (
        <div>
            <h2 className='title'>Khoa</h2>
            <button onClick={handleOpenDialog} className='buttonadd'>
                Thêm giảng viên
            </button>
            <ul className='list'>
                {hocPhanList.map((monHoc, index) => (
                    <li className='list-item' key={index}>
                        <a
                            className='alist-item'
                            href={`/giangvienkhoa/${index}`}
                            onClick={() => handleSubjectClick(monHoc)}
                        >
                            {monHoc}
                        </a>
                    </li>
                ))}
            </ul>

            {isDialogOpen && (
                <div className='dialog'>
                    <label>Họ và tên:</label>
                    <input type='text' />

                    <label>Ngày sinh:</label>
                    <input type='date' />

                    <label>Giới tính:</label>
                    <select>
                        <option>Nam</option>
                        <option>Nữ</option>
                    </select>

                    <label>Số điện thoại:</label>
                    <input type='tel' />

                    <label>Email:</label>
                    <input type='email' />

                    <label>Khoa:</label>
                    <input type='text' />

                    <label>Bộ môn:</label>
                    <input type='text' />

                    <button onClick={handleAddGiangVien}>Thêm</button>
                    <button onClick={handleCloseDialog}>Hủy</button>
                </div>
            )}
            {showSuccessDialog && (
                <div className='success-dialog'>
                    Thêm giảng viên thành công!
                </div>
            )}
        </div>
    );
};

export default Giangvientruong;
