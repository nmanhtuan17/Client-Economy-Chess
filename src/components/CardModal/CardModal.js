import React from 'react';
import { Link } from 'react-router-dom';

const CartModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const handleClose = () => {
    onClose(); // Close the modal
  };

  return (
    <>
      <div className="fixed inset-0 z-10 flex items-center justify-end bg-black bg-opacity-50">
        <div className="bg-white h-[100vh] p-6 rounded-lg mr-8 mt-10 mb-8"> {/* Increased width and height */}
          <div className="flex justify-between items-center border-b pb-3">
            <h3 className="text-lg font-semibold">Cart</h3>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <i className="ri-close-line"></i>
            </button>
          </div>
          <div className="py-6">
            <p>This order qualifies for FREE shipping in the USA.</p>
            {/* Cart items */}
            <div className="mt-4">
              {/* Example item */}
              <div className="flex items-center justify-between border-b py-2">
                <div className="flex items-center">
                  <img src="path_to_image" alt="Product" className="w-20 h-20 object-cover" />
                  <div className="ml-4">
                    <h4 className="text-md font-medium">Stealth Combo - Flex Pad Silicone Chess Set with Deluxe Bag</h4>
                    <p className="text-sm text-red-500">72.590.475 VND</p>
                    <p className="text-sm line-through">85.400.000 VND</p>
                    <p className="text-sm text-gray-500">2 or more discount applied! (-12.809.525đ)</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <input type="number" className="w-16 text-center border rounded" value="56" readOnly />
                  <button className="ml-2 text-red-500">Remove</button>
                </div>
              </div>
              {/* Add more items as needed */}
            </div>
          </div>
          <div className="mt-4 flex flex-col md:flex-row justify-between items-center">
            <div className="text-lg font-semibold">
              <p>Total</p>
              <p className="text-2xl">75.435.812 VND</p>
              <p className="text-sm text-gray-500">Taxes and shipping calculated at checkout</p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center">
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2" onClick={handleClose}>
                <Link to='/cart'>View cart</Link>
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
                <Link to='/checkouts'>Checkout</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Place your header component here */}
    </>
  );
};

export default CartModal;
