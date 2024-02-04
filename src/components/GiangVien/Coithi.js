import React from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';
import examData from './coihoithi.json';

const Coithi = () => {
    const handleViewClick = (room) => {
        // Save exam room to localStorage
        localStorage.setItem('examRoom', room);
    };
    return (
        <div>
            <h2 className='title'>
                Danh sách coi hỏi thi
            </h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Môn học</th>
                        <th>Phòng thi</th>
                        <th>Ngày thi</th>
                        <th>Thời gian thi</th>
                        <th>Hình thức thi</th>
                        <th>Danh sách sinh viên</th>
                    </tr>
                </thead>
                <tbody>
                    {examData.map((exam, index) => (
                        <tr key={exam.id}>
                            <td>{index + 1}</td>
                            <td>{exam.subject}</td>
                            <td>{exam.room}</td>
                            <td>{exam.date}</td>
                            <td>{exam.time}</td>
                            <td>{exam.type}</td>
                            <td className='center-align'>
                            <Link
                                    to={`/dssinhvien`}
                                    className='view-link'
                                    onClick={() => handleViewClick(exam.room)}
                                >
                                    Xem
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Coithi;
