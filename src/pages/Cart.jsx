import React, { useContext, useEffect } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { state, removeFromCart, updateQuantity } = useContext(CartContext);
  const { items } = state;

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
  };

  const calculateSubtotal = () => {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 pt-24">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Product Information */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6">Cart</h2>
          <p className="text-green-600 mb-6">This order qualifies for FREE shipping in the USA.</p>
          {items.length > 0 ? (
            items.map((item) => (
              <div key={item.id} className="border-t border-b py-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <img
                      src={item.image || "https://via.placeholder.com/80"}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-red-600">{formatCurrency(item.price)}</p>
                      
                    </div>
                  </div>
                  <div className="text-right">
                    <input
                      type="number"
                      value={item.quantity}
                      className="w-12 border text-center"
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    />
                    <button
                      className="text-red-600 mt-2 block"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          )}
        </div>

        {/* Right Column: Order Summary */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="border-b pb-4 mb-4">
            <div className="flex justify-between">
              <span className="text-gray-700">Subtotal</span>
              <span className="text-gray-700">{formatCurrency(calculateSubtotal())}</span>
            </div>
            <div className="flex justify-between font-bold text-xl mt-2">
              <span>Total</span>
              <span>{formatCurrency(calculateSubtotal())}</span>
            </div>
            <p className="text-gray-500 text-sm mt-1">Taxes and shipping calculated at checkout</p>
          </div>
          <div className="mb-4">
            <label htmlFor="order-note" className="block text-sm font-medium text-gray-700 mb-2">Order note</label>
            <textarea
              id="order-note"
              rows="3"
              className="w-full p-2 border rounded-md"
              placeholder="Add a note to your order"
            ></textarea>
          </div>
          <button className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold">Checkout</button>
          <div className="mt-4">
            <p className="text-center text-sm font-medium text-gray-700 mb-2">We accept</p>
            <div className="flex justify-center space-x-2">
              <img src="https://via.placeholder.com/40" alt="Payment method" />
              <img src="https://via.placeholder.com/40" alt="Payment method" />
              <img src="https://via.placeholder.com/40" alt="Payment method" />
              <img src="https://via.placeholder.com/40" alt="Payment method" />
              <img src="https://via.placeholder.com/40" alt="Payment method" />
              <img src="https://via.placeholder.com/40" alt="Payment method" />
              <img src="https://via.placeholder.com/40" alt="Payment method" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
