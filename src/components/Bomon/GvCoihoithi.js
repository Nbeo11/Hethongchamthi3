import React, { useEffect, useState } from 'react';
import '../Navbar.css';
import '../css/style.css';
import giangVienData from './giangvien.json'; 

const GvCoihoithi = () => {
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
        setNewGiangVien({
            id: '',
            name: '',
            Email: '',
            class: '',
            type: '',
        });
    };

    const handleAddGiangVien = () => {
        const newGiangVienWithId = { ...newGiangVien, id: Date.now() };
        setGiangVienList([...giangVienList, newGiangVienWithId]);
        closeAddPopup();
    };

    const handleEdit = (giangVien) => {
       setSelectedGiangVienId(giangVien);
        setIsEditPopupOpen(true);
    };

    const handleDelete = (id) => {
        openDeleteConfirmation();
        setSelectedGiangVienId(id);
    };


    const openDeleteConfirmation = () => {
        setIsDeleteConfirmationOpen(true);
    };

    const closeDeleteConfirmation = () => {
        setIsDeleteConfirmationOpen(false);
    };
    const handleConfirmDelete = () => {
       const updatedList = giangVienList.filter((giangVien) => giangVien.id !== selectedGiangVienId);
        setGiangVienList(updatedList);
        closeDeleteConfirmation();
    };


    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <a href="/bomon/coihoithi">Các học phần     </a>
            <h3>Học phần:   {localStorage.getItem('selectedSubject')}</h3>
            <h2 className='title'>
                Danh sách các giảng viên coi hỏi thi
                <button onClick={openAddPopup}>Thêm</button>
            </h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Họ và tên</th>
                        <th>Email</th>
                        <th>Lớp</th>
                        <th>Hình thức thi</th>
                        <th>Hành động</th> 
                    </tr>
                </thead>
                <tbody>
                    {giangVienList.map((giangVien, index) => (
                        <tr key={index}>
                            <td>{giangVien.id}</td>
                            <td>{giangVien.name}</td>
                            <td>{giangVien.Email}</td>
                            <td>{giangVien.class}</td>
                            <td>{giangVien.type}</td>
                            <td>
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
                        <h3>Sửa thông tin giảng viên</h3>
                        <p>ID: {selectedGiangVienId.id}</p>
                        <p>Tên: {selectedGiangVienId.name}</p>
                        <button onClick={() => setIsEditPopupOpen(false)}>Đóng</button>
                    </div>
                </div>
            )}
        </div>
    );

};

export default GvCoihoithi;
