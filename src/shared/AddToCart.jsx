import React, { useContext, useState } from 'react';
import './add-to-cart.css'
import { CartContext } from '../context/CartContext';
import { message } from 'antd';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const AddToCart = ({product, avgRating}) => {

  const [quantity, setQuantity] = useState(1);
  const [pieces, setPieces] = useState({ black: true, white: true });
  const [message, setMessage] = useState('');

  const { addToCart} = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
  };
  // Kiểm tra nếu product không tồn tại hoặc không có giá trị
  if (!product || !product.price) {
    return null; // Trả về null nếu không có sản phẩm hoặc giá sản phẩm
  }
    // Tính toán giá sau khi giảm
    const discountedPrice = product.discount ? (product.price - (product.price * product.discount / 100)) : product.price;
    // Tính toán số tiền tiết kiệm được
    const savings = product.discount ? (product.price - discountedPrice) : null;

  const handleQuantityChange = (value) => {
    setQuantity(value);
  };

  const handlePiecesChange = (color, value) => {
    setPieces({ ...pieces, [color]: value });
  };

  const checkUserLoggedIn = () => {
    
   if (!user || !user.data || !user.data.id) {
    navigate('/login');
    return true;
   }
  };

  const handleAddToCart = () => {
    if (!checkUserLoggedIn()){
      addToCart(product);
      setMessage('Added to cart successfully!');
      setTimeout(() => {
        setMessage('');
      }, 2000); // Ẩn thông báo sau 3 giây
    }
    
  };

  return (
    <div className="max-w-2xl mx-auto p-2">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <div className="bg-white rounded-lg p-4">
        <div className="flex items-center mb-4">
          <span className="text-orange-500 mr-2">★★★★★</span>
          <span className="text-gray-600">{avgRating} reviews</span>
        </div>
        <div className="text-3xl mb-4">
          
          {product.discount && product.discount > 0 ? (
                                  <div className="price-details">
                                      <span className="discounted-price">{formatCurrency(discountedPrice)}  </span>
                                      <span className="original-price">{formatCurrency(product.price)}  </span>
                                  </div>
                              ) : (
                                  <h5>{formatCurrency(product.price)}  </h5>
                              )}
          {savings != null && <span className="savings">Save {formatCurrency(savings)}</span>} {/* Hiển thị số tiền tiết kiệm */}
        </div>
        {/* <div className="text-3xl mb-4">${product.price}</div> */}
        <div className="flex items-center mb-4" style={{color:'#81B64C'}}>
        <svg className="w-5 h-5 mr-2" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9Z" fill="currentColor" />
          <path d="M5 9.67188L7.44531 12L13 6.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span>In stock {product.stock_quantity}</span>
        </div>
        <div className="mb-4">
			<label htmlFor="quantity" className="block font-bold mb-2">
				Quantity:
			</label>
			<div className="flex items-center bg-gray-200 rounded w-50">
				<button
				onClick={() => handleQuantityChange(quantity - 1)}
				disabled={quantity === 1}
				className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
				>
				-
				</button>
				<input
				id="quantity"
				type="text"
				value={quantity}
				onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
				className="w-12 text-center bg-transparent focus:outline-none"
				pattern="\d*"
				inputMode="numeric"
				/>
				<button
				onClick={() => handleQuantityChange(quantity + 1)}
				className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
				>
				+
				</button>
			</div>
			</div>
        <button className="AddToCart text-white font-bold py-2 px-4 rounded flex items-center" onClick={handleAddToCart}>
          <span className="mr-2">ADD TO CART | </span>
          <div className="text-lg">
          {product.discount && product.discount > 0 ? (
            <div className="price-details">
              <span className="text-white">{formatCurrency(discountedPrice)}  </span>
            </div>
              ) : (
                    <h5 className='mt-2'>{formatCurrency(product.price)}  </h5>
                  )}
          </div>
        </button>
        {message && <div className="text-green-500 mt-4"> {message} </div>}
      </div>
    </div>
  );
};

export default AddToCart;