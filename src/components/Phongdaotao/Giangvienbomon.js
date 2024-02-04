import React, { useEffect, useState } from 'react';
import '../Navbar.css';
import '../css/style.css';
import giangVienData from './giangvien.json'; // Import file JSON

const Giangvienbomon = () => {
    const [giangVienList, setGiangVienList] = useState([]);
    const [error, setError] = useState(null);
    const [selectedGiangVienId, setSelectedGiangVienId] = useState(null);
    const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
    const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);
    const [newGiangVien, setNewGiangVien] = useState({
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
            setGiangVienList(giangVienData);
        } catch (error) {
            setError(error.message || 'Error fetching data');
        }
    }, []);

    const openAddPopup = () => {
        setIsAddPopupOpen(true);
    };

    const closeAddPopup = () => {
        setIsAddPopupOpen(false);
        // Reset giá trị của newGiangVien khi đóng popup
        setNewGiangVien({
            id: '',
            name: '',
            Email: '',
            class: '',
            type: '',
        });
    };

    const handleAddGiangVien = () => {
        // Thực hiện thêm giảng viên vào danh sách
        // Để đơn giản, ở đây ta giả sử id là timestamp để đảm bảo duy nhất
        const newGiangVienWithId = { ...newGiangVien, id: Date.now() };
        setGiangVienList([...giangVienList, newGiangVienWithId]);
        closeAddPopup();
    };

    const handleEdit = (giangVien) => {
        // Mở popup sửa và set giangVien được chọn
        setSelectedGiangVienId(giangVien);
        setIsEditPopupOpen(true);
    };

    const handleDelete = (id) => {
        // Mở dialog xác nhận
        openDeleteConfirmation();
        // Lưu lại giảng viên được chọn để xóa
        setSelectedGiangVienId(id);
    };


    const openDeleteConfirmation = () => {
        setIsDeleteConfirmationOpen(true);
    };

    const closeDeleteConfirmation = () => {
        setIsDeleteConfirmationOpen(false);
    };
    const handleConfirmDelete = () => {
        // Thực hiện xóa giảng viên từ danh sách
        const updatedList = giangVienList.filter((giangVien) => giangVien.id !== selectedGiangVienId);
        setGiangVienList(updatedList);
        // Đóng dialog xác nhận
        closeDeleteConfirmation();
    };


    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <a href="/giangvienkhoa/{index}">Bộ môn     </a>
            <h3>Bộ môn:   {localStorage.getItem('selectedSubject')}</h3>
            <h2 className='title'>
                Danh sach các giảng viên
                <button onClick={openAddPopup}>Thêm</button>
            </h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Họ và tên</th>
                        <th>Email</th>
                        <th>Hành động</th> {/* Thêm cột hành động */}
                    </tr>
                </thead>
                <tbody>
                    {giangVienList.map((giangVien, index) => (
                        <tr key={index}>
                            <td>{giangVien.id}</td>
                            <td>{giangVien.name}</td>
                            <td>{giangVien.Email}</td>
                            <td>
                                {/* Nút sửa và xóa */}
                                <button onClick={() => handleEdit(giangVien)}>Sửa</button>
                                <button onClick={() => handleDelete(giangVien.id)}>Xóa</button>
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
                        <h3>Thêm thông tin giảng viên</h3>
                        <label htmlFor="newId">ID:</label>
                        <input
                            type="text"
                            id="newId"
                            value={newGiangVien.id}
                            onChange={(e) => setNewGiangVien({ ...newGiangVien, id: e.target.value })}
                        />

                        <label htmlFor="newName">Họ và tên:</label>
                        <input
                            type="text"
                            id="newName"
                            value={newGiangVien.name}
                            onChange={(e) => setNewGiangVien({ ...newGiangVien, name: e.target.value })}
                        />

                        <label htmlFor="newEmail">Email:</label>
                        <input
                            type="text"
                            id="newEmail"
                            value={newGiangVien.Email}
                            onChange={(e) => setNewGiangVien({ ...newGiangVien, Email: e.target.value })}
                        />

                        <label htmlFor="newClass">Lớp:</label>
                        <input
                            type="text"
                            id="newClass"
                            value={newGiangVien.class}
                            onChange={(e) => setNewGiangVien({ ...newGiangVien, class: e.target.value })}
                        />

                        <label htmlFor="newType">Hình thức thi:</label>
                        <input
                            type="text"
                            id="newType"
                            value={newGiangVien.type}
                            onChange={(e) => setNewGiangVien({ ...newGiangVien, type: e.target.value })}
                        />

                        <button onClick={handleAddGiangVien}>Thêm</button>
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

            {isEditPopupOpen && selectedGiangVienId && (
                <div>
                    <div className="overlay"></div>
                    <div className="popup">
                        {/* Nội dung popup sửa */}
                        <h3>Sửa thông tin giảng viên</h3>
                        <p>ID: {selectedGiangVienId.id}</p>
                        <p>Tên: {selectedGiangVienId.name}</p>
                        {/* Các trường thông tin khác */}
                        <button onClick={() => setIsEditPopupOpen(false)}>Đóng</button>
                    </div>
                </div>
            )}
        </div>
    );

};

export default Giangvienbomon;
