import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Navbar.module.css';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser , faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <div>
      <div className={style.offer}>
        <h1>SHOP OUR SPRING DECOR COLLECTION</h1>
      </div>
      
      <section className={style.navbar}>
        <ul className={style.ul1}>
          <li>
            <Link to="/home">
            <h3>INSPIRO</h3>
              {/* <img src="https://cdn.prod.website-files.com/629f3db942b81a5f49ac7ba9/62c4923d2a7ada5125407697_logo.svg" alt="" /> */}
            </Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link to="/shop">SHOP</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/blog">BLOG</Link>
          </li>
          <li>
            <Link to="/gallery">GALLERY</Link>
          </li>
          <li>
            <Link to="#" onClick={handleShowModal}>CONTACT</Link>
          </li>
        </ul>
        <ul className={style.ul2}>
          <li>
            <Link><FontAwesomeIcon icon={faUser } /></Link>
            <span onClick={() => setShowCart(true)} style={{ cursor: 'pointer', color: 'black', margin: 20 }}>
              <FontAwesomeIcon icon={faShoppingCart} />
            </span>
          </li>
        </ul>
        
      </section>

      <Offcanvas show={showCart} onHide={() => setShowCart(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Your cart is empty.
        </Offcanvas.Body>
      </Offcanvas>

      <Modal show={showModal} onHide={handleCloseModal} backdrop="static" keyboard={false} >
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body  modal-sm className={style.contact}>

          <form action="" >
          <p>NAME</p>
          <input type="text" style={{width:344}} />

          <p>Email Address </p>
          <input type="email" required style={{width:344}}  />

          <p>Message</p>
          <textarea name="" id="" rows={5} cols={41} style={{resize:'none'}}></textarea> <br /><br />
          <button>Send</button>
          </form>

        </Modal.Body>
      </Modal>

    </div>
  );
};

export default Navbar;