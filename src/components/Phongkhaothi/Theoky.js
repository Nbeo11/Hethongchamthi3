import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar.css';
import detailData from './dotthi.json';

const Hocphantheoky = () => {
    // Danh sách môn học
    const handleViewClick = (subject, date, time) => {
        localStorage.setItem('selectedSubject', subject);
        localStorage.setItem('date', date);
        localStorage.setItem('time', time);
    };
    return (
        <div>
            <a href="/theokhoa">Kỳ học     </a>
            <h3>Khóa học:   {localStorage.getItem('selectedKhoa')}</h3>
            <h3>Kỳ học:   {localStorage.getItem('selectedKyhoc')}</h3>
            <h2 className='title'>Danh sách các học phần thi</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Môn học</th>
                        <th>Ngày thi</th>
                        <th>Thời gian</th>
                        <th>Chi tiết</th>
                    </tr>
                </thead>
                <tbody>
                    {detailData.map((detail, index) => (
                        <tr key={detail.id}>
                            <td>{index + 1}</td>
                            <td>{detail.subject}</td>
                            <td>{detail.date}</td>
                            <td>{detail.time}</td>
                            <td className='center-align'>
                            <Link
                                    to={`/chitietphongthi`}
                                    className='view-link'
                                    onClick={() => handleViewClick(detail.subject, detail.date, detail.time)}
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

export default Hocphantheoky;