import React, { useEffect, useState } from 'react';
import '../Navbar.css';
import '../css/style.css';
import phongThiData from './chitietphong.json'; // Import file JSON

const GvChamthi = () => {
    const [phongThiList, setphongThiList] = useState([]);
    const [error, setError] = useState(null);
    const [selectedphongThiId, setSelectedphongThiId] = useState(null);
    const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
    const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);
    const [newphongThi, setNewphongThi] = useState({
        id: '',
        name: '',
        Email: '',
        class: '',
        type: '',
    });
    const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] = useState(false);

    useEffect(() => {
        // Dùng dữ liệu từ file JSON thay vì fetch
        try {
            setphongThiList(phongThiData);
        } catch (error) {
            setError(error.message || 'Error fetching data');
        }
    }, []);

    const openAddPopup = () => {
        setIsAddPopupOpen(true);
    };

    const closeAddPopup = () => {
        setIsAddPopupOpen(false);
        // Reset giá trị của newphongThi khi đóng popup
        setNewphongThi({
            room: '',
            class: '',
        });
    };

    const handleAddphongThi = () => {
        // Thực hiện thêm giảng viên vào danh sách
        // Để đơn giản, ở đây ta giả sử id là timestamp để đảm bảo duy nhất
        const newphongThiWithId = { ...newphongThi, id: Date.now() };
        setphongThiList([...phongThiList, newphongThiWithId]);
        closeAddPopup();
    };

    const handleEdit = (phongThi) => {
        // Mở popup sửa và set phongThi được chọn
        setSelectedphongThiId(phongThi);
        setIsEditPopupOpen(true);
    };

    const handleDelete = (id) => {
        // Mở dialog xác nhận
        openDeleteConfirmation();
        // Lưu lại giảng viên được chọn để xóa
        setSelectedphongThiId(id);
    };


    const openDeleteConfirmation = () => {
        setIsDeleteConfirmationOpen(true);
    };

    const closeDeleteConfirmation = () => {
        setIsDeleteConfirmationOpen(false);
    };
    const handleConfirmDelete = () => {
        // Thực hiện xóa giảng viên từ danh sách
        const updatedList = phongThiList.filter((phongThi) => phongThi.id !== selectedphongThiId);
        setphongThiList(updatedList);
        // Đóng dialog xác nhận
        closeDeleteConfirmation();
    };


    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <a href="/theoky">Danh sách các học phần thi     </a>
            <h3>Khóa học:   {localStorage.getItem('selectedKhoa')}</h3>
            <h3>Kỳ học:   {localStorage.getItem('selectedKyhoc')}</h3>
            <h3>Môn thi:   {localStorage.getItem('selectedSubject')}</h3>
            <h3>Ngày thi:   {localStorage.getItem('date')}</h3>
            <h3>Giờ thi:   {localStorage.getItem('time')}</h3>
            <h2 className='title'>
            Danh sách các phòng thi
                <button onClick={openAddPopup}>Thêm</button>
            </h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Phòng thi</th>
                        <th>Lớp</th>
                        <th>Hành động</th> {/* Thêm cột hành động */}
                    </tr>
                </thead>
                <tbody>
                    {phongThiList.map((phongThi, index) => (
                        <tr key={index}>
                            <td>{phongThi.id}</td>
                            <td>{phongThi.room}</td>
                            <td>{phongThi.class}</td>
                            <td>
                                {/* Nút sửa và xóa */}
                                <button onClick={() => handleEdit(phongThi)}>Sửa</button>
                                <button onClick={() => handleDelete(phongThi.id)}>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isAddPopupOpen && (
                <div>
                    <div className="overlay"></div>
                    <div className="popup">
                        {/* Nội dung popup thêm mới */}
                        <h3>Thêm thông phòng thi</h3>
                        <label htmlFor="newId">Phòng thi:</label>
                        <input
                            type="text"
                            id="newId"
                            value={newphongThi.id}
                            onChange={(e) => setNewphongThi({ ...newphongThi, id: e.target.value })}
                        />

                        <label htmlFor="newName">Lớp:</label>
                        <input
                            type="text"
                            id="newName"
                            value={newphongThi.name}
                            onChange={(e) => setNewphongThi({ ...newphongThi, name: e.target.value })}
                        />

                       
                        <button onClick={handleAddphongThi}>Thêm</button>
                        <button onClick={closeAddPopup}>Hủy bỏ</button>
                    </div>
                </div>
            )}

            {isDeleteConfirmationOpen && (
                <div>
                    <div className="overlay"></div>
                    <div className="confirmation-dialog">
                        <p>Bạn có chắc chắn muốn xóa?</p>
                        <button onClick={handleConfirmDelete}>Xác nhận</button>
                        <button onClick={closeDeleteConfirmation}>Hủy bỏ</button>
                    </div>
                </div>
            )}

            {isEditPopupOpen && selectedphongThiId && (
                <div>
                    <div className="overlay"></div>
                    <div className="popup">
                        {/* Nội dung popup sửa */}
                        <h3>Sửa thông tin giảng viên</h3>
                        <p>ID: {selectedphongThiId.id}</p>
                        <p>Tên: {selectedphongThiId.name}</p>
                        {/* Các trường thông tin khác */}
                        <button onClick={() => setIsEditPopupOpen(false)}>Đóng</button>
                    </div>
                </div>
            )}
        </div>
    );

};

export default GvChamthi;
