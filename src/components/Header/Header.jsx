import React, { useContext, useState, useEffect } from "react";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
import logoChess from "../../assets/images/logochess.jpeg";
import "./header.css";
import { AuthContext } from "../../context/AuthContext";


const nav_links = [
    {
        path: "/home",
        display: "Home",
    },
    {
        path: "/about",
        display: "About",
    },
    {
        path: "/tours",
        display: "Shop",
    },
  
];

const Header = ({onCartIconClick}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { user, dispatch } = useContext(AuthContext);

    const logout = () => {
        dispatch({ type: "LOGOUT" });
        navigate("/");
    };

    const [isScrolled, setIsScrolled] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            if (scrollTop > 80) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    // Kiểm tra xem đường dẫn có bắt đầu bằng "/tours/" không
    const isTourDetailsPage = location.pathname.startsWith("/tours/");
    const isCartPage = location.pathname.startsWith("/cart");

    return (
        <header
            className={`header sticky__header ${isScrolled || isHovered || isTourDetailsPage || isCartPage ? 'scrolled' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Container>
                <Row>
                    <div className="nav_wrapper d-flex align-items-center justify-content-between">
                        {/*----------- Logo------------ */}
                        <div className="logo">
                            <a href="/home">
                                <img src={logoChess} alt="logo" />
                            </a>
                        </div>

                        {/*----------------- Menu------------------ */}
                        <div className="navigation">
                            <ul className="menu d-flex align-items-center gap-5">
                                {nav_links.map((link, index) => (
                                    <li className="nav__item" key={index}>
                                        <NavLink
                                            to={link.path}
                                            className={(navClass) => navClass.isActive ? "active__link" : ""}
                                        >
                                            {link.display}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Button Login/ Register */}
                        <div className="nav__right d-flex align-items-center gap-4">
                            <div className="nav__btns d-flex align-items-center gap-4">
                                {user ? (
                                    <>
                                        <h5 className="mb-0">{user.data.userName}</h5>
                                        <Button className="btn btn-dark" onClick={logout}>
                                            Logout
                                        </Button>
                                    </>
                                ) : (
                                    <>
                                        <Button className="btn secondary__btn">
                                            <Link to="/login">Login</Link>
                                        </Button>
                                        <Button className="btn primary__btn">
                                            <Link to="/register">Register</Link>
                                        </Button>
                                    </>
                                )}
                            </div>

                            {/* Icon Giỏ Hàng */}
                            <button className="cart__icon relative"  onClick={onCartIconClick} >
                                    <i className="ri-shopping-cart-line"></i>
                            </button>

                            <span className="mobile__menu">
                                <i className="ri-menu-line"></i>
                            </span>
                        </div>
                    </div>
                </Row>
            </Container>
        </header>
    );
};

export default Header;
