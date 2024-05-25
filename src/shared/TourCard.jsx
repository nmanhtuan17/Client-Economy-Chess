import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import './tour-card.css';

const TourCard = ({ product }) => {
    const { id, name, photo, price, discount, featured, stock_quantity } = product;

    const formatCurrency = (value) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
      };

    // Tính toán giá sau khi giảm
    const discountedPrice = discount ? (price - (price * discount / 100)) : price;

    // Tính toán số tiền tiết kiệm được
    const savings = discount ? (price - discountedPrice) : null;

    return (
        <div className='tour__card'>
            <Card>
                <div className="tour__img">
                    <img src={photo} alt="tour-img" />
                    {featured === 1 ? <span>Featured</span> : null}
                </div>
                <CardBody>
                    <div className="card__top d-flex items-center justify-between">
                        {savings !== null && <span className="savings-text">Save {formatCurrency(savings)}</span>}
                    </div>

                    <h5 className="tour__title">
                        <Link to={`/products/${id}`}>{name}</Link>
                    </h5>

                    <div className="card__bottom mt-3 d-flex justify-between align-items-center font-bold text-sm">
                        <div>
                            {discount && discount > 0 ? (
                                <div className="price-detail">
                                    <span className="discounted-price">{formatCurrency(discountedPrice)} USD</span>
                                    <span className="original-price">${price.toFixed(2)} USD</span>
                                </div>
                            ) : (
                                <h5>${price.toFixed(2)} USD</h5>
                            )}
                        </div>
                        
                        <button className='btn booking__btn'>
                            <Link to={`/products/${id}`}>View Product</Link>
                        </button>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

export default TourCard;
