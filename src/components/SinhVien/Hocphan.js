import React from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';
import examData from './lichthi.json';


const Hocphanthi = () => {
    return (
        <div>
            <h2 className='title'>
                Danh sách các học phần thi
            </h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Môn học</th>
                        <th>Phòng thi</th>
                        <th>Ngày thi</th>
                        <th>Thời gian thi</th>
                        <th>Loại đề thi</th>
                        <th>Trạng thái</th>
                        <th>Điểm</th>
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
                            <td>
                                {exam.status === 'Làm bài' ? (
                                    <Link to={`/dethi/${exam.id}`} className='view-link'>{exam.status}</Link>
                                ) : (
                                    exam.status
                                )}
                            </td>
                            <td>{exam.point}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Hocphanthi;
