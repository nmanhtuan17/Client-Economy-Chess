import React, { useContext, useState } from 'react';
import './booking.css';
import { CartContext } from '../context/CartContext';
import { message } from 'antd';

const BookingPage = ({product, avgRating}) => {

  const [quantity, setQuantity] = useState(1);
  const [board, setBoard] = useState('Green');
  const [bag, setBag] = useState('Green');
  const [pieces, setPieces] = useState({ black: true, white: true });
  const [message, setMessage] = useState('');

  const { addToCart} = useContext(CartContext);

  const handleQuantityChange = (value) => {
    setQuantity(value);
  };

  const handleBoardChange = (value) => {
    setBoard(value);
  };

  const handleBagChange = (value) => {
    setBag(value);
  };

  const handlePiecesChange = (color, value) => {
    setPieces({ ...pieces, [color]: value });
  };

  const handleAddToCart = () => {
    addToCart(product);
    setMessage('Added to cart successfully!');
    setTimeout(() => {
      setMessage('');
    }, 2000); // Ẩn thông báo sau 3 giây
  };

  return (
    <div className="max-w-2xl mx-auto p-2">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <div className="bg-white rounded-lg p-4">
        <div className="flex items-center mb-4">
          <span className="text-orange-500 mr-2">★★★★★</span>
          <span className="text-gray-600">{avgRating} reviews</span>
        </div>
        <div className="text-3xl mb-4">{product.price}</div>
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
        {/* <div className="bulk mb-4 ">
          <label htmlFor="bulk-discounts" className="block font-bold mb-2">
            Bulk Discounts:
          </label>
          <select
            id="bulk-discounts"
            className="w-full  hover:border-gray-500 px-4 py-2 pr-8 rounded  leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="2">2</option>
            
          </select>
        </div> */}
		{/* <div>
			<p className='custome'><strong>CUSTOMIZE YOURS</strong></p>
		</div>
        <div className="board mb-4">
          <label htmlFor="board" className="block font-bold mb-2">
            Select A Board:
          </label>
          <select
            id="board"
            value={board}
            onChange={(e) => handleBoardChange(e.target.value)}
            className="w-full  border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded  leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="Green">Green</option>
           
          </select>
        </div>
        <div className="bag mb-4">
          <label htmlFor="bag" className="block font-bold mb-2">
            Select A Bag:
          </label>
          <select
            id="bag"
            value={bag}
            onChange={(e) => handleBagChange(e.target.value)}
            className="w-full border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded  leading-tight focus:outline-none focus:shadow-outline"
          >
			
            <option value="Green">Green</option>
            
          </select>
        </div>
        <div className="mb-4">
			<label htmlFor="pieces" className="block font-bold mb-2">
				Select Pieces:
			</label>
			<div className="flex items-center">
				<div className="mr-4">
				<select
					id="pieces"
					value={pieces.black ? 'Black' : ''}
					onChange={(e) => handlePiecesChange('black', e.target.value === 'Black')}
					className="w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
				>
					<option value="">None</option>
					<option value="Black">Black</option>
				</select>
				</div>
				<div>
				<select
					id="pieces"
					value={pieces.white ? 'White' : ''}
					onChange={(e) => handlePiecesChange('white', e.target.value === 'White')}
					className="w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
				>
					<option value="">None</option>
					<option value="White">White</option>
				</select>
				</div>
			</div>
			</div> */}
        <button className="AddToCart text-white font-bold py-2 px-4 rounded flex items-center" onClick={handleAddToCart}>
          <span className="mr-2">ADD TO CART</span>
          <span>| {product.price}</span>
        </button>
        {message && <div className="text-green-500 mt-4"> {message} </div>}
      </div>
    </div>
  );
};

export default BookingPage;