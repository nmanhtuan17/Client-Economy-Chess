// Layout.js
import React, {useState} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Routers from '../../router/Routers';
import { useLocation } from 'react-router-dom';
import CartModal from '../CardModal/CardModal';

const Layout = () => {
  const location = useLocation();
  const isLoginOrRegisterPage = location.pathname === '/login' || location.pathname === '/register';

  const [isCartModalOpen, setCartModalOpen] = useState(false);

  const toggleCartModal = () => {
    setCartModalOpen(!isCartModalOpen);
  };

  // Kiểm tra xem đây có phải là trang đăng nhập hoặc đăng ký không
  if (isLoginOrRegisterPage) {
    return (
      <div>
        <Routers />
      </div>
    );
  }

  // Trang không phải là trang đăng nhập hoặc đăng ký, hiển thị header và footer
  return (
    <div>
      <Header onCartIconClick={toggleCartModal} />
      <CartModal isOpen={isCartModalOpen} onClose={toggleCartModal} />
      <Routers />
      <Footer />
    </div>
  );
}

export default Layout;
