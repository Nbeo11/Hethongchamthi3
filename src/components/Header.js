import React, { useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom'; // Import Link và Redirect từ react-router-dom
import logo from '../images/logo.png';
import { useUser } from './UserContext';
import './css/Header.css'; // Import file CSS để áp dụng kiểu dáng

const Header = () => {
    const { userType, login, logout } = useUser();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [lecturerName, setLecturerName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirectTo, setRedirectTo] = useState(null); // State để xác định liệu có chuyển hướng không
    const history = useHistory();
    const [selectedItem, setSelectedItem] = useState(localStorage.getItem('selectedItem') || '/'); // New state for selected item
    useEffect(() => {
        const storedUserType = localStorage.getItem('userType');
        const storedSelectedItem = localStorage.getItem('selectedItem');
        const unlisten = history.listen(() => {
            // Sử dụng userType từ context để kiểm tra xem có cần reload không

            window.location.reload();

        });
        if (storedUserType) {
            login(storedUserType);
            setIsLoggedIn(true);
        }



        // Clear effect when component unmounts
        return () => unlisten();
    }, [history, login, userType]);



    const handleLogin = () => {
        if (username === 'giangvien' && password === '12345') {
            login('giangvien');
            setIsLoggedIn(true);
            setRedirectTo('/');
            localStorage.setItem('userType', 'giangvien'); // Lưu vào localStorage
        } else if (username === 'sinhvien' && password === '12345') {
            login('sinhvien');
            setIsLoggedIn(true);
            setRedirectTo('/');
            localStorage.setItem('userType', 'sinhvien'); // Lưu vào localStorage

        } else if (username === 'bomon' && password === '12345') {
            login('bomon');
            setIsLoggedIn(true);
            setRedirectTo('/');
            localStorage.setItem('userType', 'bomon'); // Lưu vào localStorage

        } else if (username === 'phongdaotao' && password === '12345') {
            login('phongdaotao');
            setIsLoggedIn(true);
            setRedirectTo('/');
            localStorage.setItem('userType', 'phongdaotao'); // Lưu vào localStorage

        } else if (username === 'phongkhaothi' && password === '12345') {
            login('phongkhaothi');
            setIsLoggedIn(true);
            setRedirectTo('/');
            localStorage.setItem('userType', 'phongkhaothi'); // Lưu vào localStorage

        } else {
            alert('Đăng nhập không thành công. Vui lòng kiểm tra lại thông tin đăng nhập.');
        }
    };
    const handleLogout = () => {
        logout();
        setIsLoggedIn(false);
        setRedirectTo('/');
        localStorage.clear();
        // Xóa khỏi localStorage

    };

    const handleNavbarClick = (path) => {
        setSelectedItem(path);
        // Xử lý chuyển hướng khi click vào mục trong navbar
        localStorage.setItem('selectedItem', path); // Save to localStorage
        history.push(path);
    };
    if (redirectTo) {
        // Nếu có chuyển hướng, thì Redirect đến đường dẫn đã được xác định
        return <Redirect to={redirectTo} />;
    }



    return (
        <header>
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                {isLoggedIn ? (
                    <div className="login-form">
                        {/* Hiển thị tên giảng viên và nút Logout khi đã đăng nhập */}
                        <span className='nameuser'>{localStorage.getItem('userType')}</span>
                        <button type="button" onClick={handleLogout}>Logout</button>
                    </div>
                ) : (
                    <div className="login-form">
                        {/* Hiển thị form đăng nhập khi chưa đăng nhập */}
                        <label htmlFor="username">Tên đăng nhập:</label>
                        <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <label htmlFor="password">Mật khẩu:</label>
                        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button type="button" onClick={handleLogin}>Login</button>
                    </div>
                )}
            </div>
            <div className="navbar">
                <ul className="navbar-list"> {/* Thêm class "navbar-list" cho <ul> */}
                    <li className={`navbar-item ${selectedItem === '/' ? 'selected' : ''}`}>
                        <a href="/" onClick={() => handleNavbarClick('/')}>Trang chủ</a>
                    </li>
                    {userType === 'giangvien' && (
                        <>
                            <li className={`navbar-item ${selectedItem === '/giangvien/taobodethi' ? 'selected' : ''}`}>
                                <a href="/giangvien/taobodethi" onClick={() => handleNavbarClick('/giangvien/taobodethi')}>Tạo bộ đề thi</a>
                            </li>
                            <li className={`navbar-item ${selectedItem === '/giangvien/coithi' ? 'selected' : ''}`}>
                                <a href="/giangvien/coithi" onClick={() => handleNavbarClick('/giangvien/coithi')}>Coi hỏi thi</a>
                            </li>
                            <li className={`navbar-item ${selectedItem === '/giangvien/cham' ? 'selected' : ''}`}>
                                <a href="/giangvien/cham" onClick={() => handleNavbarClick('/giangvien/cham')}>Chấm thi</a>
                            </li>
                        </>
                    )}
                    {userType === 'sinhvien' && (
                        <>
                            <li className={`navbar-item ${selectedItem === '/sinhvien/hocphan' ? 'selected' : ''}`}>
                                <a href="/sinhvien/hocphan" onClick={() => handleNavbarClick('/sinhvien/hocphan')}>Học phần</a>
                            </li>
                            <li className={`navbar-item ${selectedItem === '/sinhvien/chitiet' ? 'selected' : ''}`}>
                                <a href="/sinhvien/chitiet" onClick={() => handleNavbarClick('/sinhvien/chitiet')}>Sinh viên</a>
                            </li>
                        </>
                    )}
                    {userType === 'bomon' && (
                        <>
                            <li className={`navbar-item ${selectedItem === '/bomon/coihoithi' ? 'selected' : ''}`}>
                                <a href="/bomon/coihoithi" onClick={() => handleNavbarClick('/bomon/coihoithi')}>Giảng viên coi hỏi thi</a>
                            </li>
                            <li className={`navbar-item ${selectedItem === '/bomon/chamthi' ? 'selected' : ''}`}>
                                <a href="/bomon/chamthi" onClick={() => handleNavbarClick('/bomon/chamthi')}>Giảng viên chấm thi</a>
                            </li>
                            <li className={`navbar-item ${selectedItem === '/bomon/quanlydethi' ? 'selected' : ''}`}>
                                <a href="/bomon/quanlydethi" onClick={() => handleNavbarClick('/bomon/quanlydethi')}>Quản lý đề thi</a>
                            </li>
                        </>
                    )}
                    {userType === 'phongdaotao' && (
                        <>
                            <li className={`navbar-item ${selectedItem === '/phongdaotao/giangvientruong' ? 'selected' : ''}`}>
                                <a href="/phongdaotao/giangvientruong" onClick={() => handleNavbarClick('/phongdaotao/giangvientruong')}>Giảng viên</a>
                            </li>
                            <li className={`navbar-item ${selectedItem === '/phongdaotao/khoahoc' ? 'selected' : ''}`}>
                                <a href="/phongdaotao/khoahoc" onClick={() => handleNavbarClick('/phongdaotao/khoahoc')}>Khóa học</a>
                            </li>
                        </>
                    )}
                    {userType === 'phongkhaothi' && (
                        <>
                            <li className={`navbar-item ${selectedItem === '/phongkhaothi/taodotthi' ? 'selected' : ''}`}>
                                <a href="/phongkhaothi/taodotthi" onClick={() => handleNavbarClick('/phongkhaothi/taodotthi')}>Tạo đợt thi</a>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </header>
    );
};

export default Header;
