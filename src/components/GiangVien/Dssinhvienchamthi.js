import React from 'react';
import '../css/style.css';
import examData from './sinhvien.json';

const Dssinhvienchamthi = () => {
    return (
        <div>
            <a href="/giangvien/coithi">Danh sách chấm thi     </a>
            <h2 className='title'>
            Phòng thi {localStorage.getItem('examRoom')}
            </h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Họ và tên</th>
                        <th>Ngày sinh</th>
                        <th>Giới tính</th>
                        <th>Lớp</th>
                        <th>Trạng thái</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {examData.map((exam, index) => (
                        <tr key={exam.id}>
                            <td>{index + 1}</td>
                            <td>{exam.name}</td>
                            <td>{exam.dateofbirth}</td>
                            <td>{exam.sex}</td>
                            <td>{exam.class}</td>
                            <td>{exam.status}</td>
                            <td>
                                {exam.status === 'Đã chấm' ? (
                                    <span>Xem</span>
                                ) : (
                                    <span>Chấm</span>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dssinhvienchamthi;
