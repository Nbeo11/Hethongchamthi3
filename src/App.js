import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Chamthi from './components/Bomon/Chamthi';
import Coihoithi from './components/Bomon/Coihoithi';
import GvChamthi from './components/Bomon/GvChamthi';
import GvCoihoithi from './components/Bomon/GvCoihoithi';
import GvTaobocauhoi from './components/Bomon/GvTaobocauhoi';
import Quanlydethi from './components/Bomon/Quanlydethi';
import Quanlygvdt from './components/Bomon/Quanlygvdt';
import Taodethi from './components/Bomon/Taodethi';
import Cham from './components/GiangVien/Cham';
import Coithi from './components/GiangVien/Coithi';
import Dssinhvienchamthi from './components/GiangVien/Dssinhvienchamthi';
import Dssinhvien from './components/GiangVien/Dssinhviencoithi';
import Taobodethi from './components/GiangVien/Taobodethi';
import Header from './components/Header';
import DsLop from './components/Phongdaotao/DsLop';
import Giangvienbomon from './components/Phongdaotao/Giangvienbomon';
import Giangvienkhoa from './components/Phongdaotao/Giangvienkhoa';
import Giangvientruong from './components/Phongdaotao/Giangvientruong';
import Khoahoc from './components/Phongdaotao/Khoahoc';
import Chitietphongthi from './components/Phongkhaothi/Chitietphongthi';
import Taodotthi from './components/Phongkhaothi/Taodotthi';
import Theokhoa from './components/Phongkhaothi/Theokhoa';
import Theoky from './components/Phongkhaothi/Theoky';
import Chitiet from './components/SinhVien/Chitiet';
import HocPhan from './components/SinhVien/Hocphan';
import Trangchu from './components/Trangchu';
import { UserProvider } from './components/UserContext';

function App() {
  return (
    <Router>
      <UserProvider>
        <Header />
        <Switch>
          /*sinhvien*/
          <Route path="/sinhvien/hocphan" component={HocPhan} />
          <Route path="/sinhvien/chitiet" component={Chitiet} />
          /*giangvien*/
          <Route path="/giangvien/taobodethi" component={Taobodethi} />
          <Route path="/giangvien/coithi" component={Coithi} />
          <Route path="/giangvien/coihoithi" component={Coihoithi} />
          <Route path="/giangvien/cham" component={Cham} />
          <Route path="/dssinhvien" component={Dssinhvien} />
          <Route path="/dssinhvienchamthi" component={Dssinhvienchamthi} />
          /*bomon*/
          <Route path="/bomon/coihoithi" component={Coihoithi} />
          <Route path="/gvcoihoithi/:id" component={GvCoihoithi} />
          <Route path="/bomon/chamthi" component={Chamthi} />
          <Route path="/gvchamthi/:id" component={GvChamthi} />
          <Route path="/bomon/quanlydethi" component={Quanlydethi} />
          <Route path="/quanlygvdt/:id" component={Quanlygvdt} />
          <Route path="/gvchamthi/:id" component={GvChamthi} />
          <Route path="/gvtaobocauhoi/:id" component={GvTaobocauhoi} />
          <Route path="/taodethi/:id" component={Taodethi} />
          /*phongdaotao*/
          <Route path="/phongdaotao/khoahoc" component={Khoahoc} />
          <Route path="/phongdaotao/giangvientruong" component={Giangvientruong} />
          <Route path="/giangvienkhoa/:id" component={Giangvienkhoa} />
          <Route path="/giangvienbomon/:id" component={Giangvienbomon} />
          <Route path="/dslop/:id" component={DsLop} />

          /*phongkhaothi*/
          <Route path="/phongkhaothi/taodotthi" component={Taodotthi} />
          <Route path="/theokhoa" component={Theokhoa} />
          <Route path="/theoky" component={Theoky} />
          <Route path="/chitietphongthi" component={Chitietphongthi} />

          <Route path="/" exact component={Trangchu} />


        </Switch>
      </UserProvider>
    </Router>
  );
}
export default App;
