import React from 'react';
import '../css/style.css';
import examData from './sinhvien.json';

const Dssinhvien = () => {
    return (
        <div>
            <a href="/giangvien/coithi">Danh sách coi hỏi thi     </a>
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
                        <th>Thời gian bắt đầu</th>
                        <th>Thời gian Kết thúc</th>
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
                            <td>{exam.start}</td>
                            <td>{exam.end}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dssinhvien;
