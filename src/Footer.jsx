import React, { useState } from 'react'

import { Button, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './Footer.module.css'

const Footer = () => {
    const [email, setEmail] = useState('');
      const [showModal, setShowModal] = useState(false);
    
      const handleSubscribe = (e) => {
        e.preventDefault();
        setShowModal(true);
      };
      
  return (
    <>
    <div>
         {/* footer */}
    <div className={style.logo}> INSPIRO</div>

    <section className={style.contact}>
      <div className={style.join}>
        <h2>Join the journey</h2>
        <h5>Sign up to get updates about our new arrivals and seasonal trends.</h5>
  
        <Form onSubmit={handleSubscribe}>
          <Form.Group className={style.formGroup} controlId="formBasicEmail"> {/* Add the formGroup class */}
          <Form.Control  className={style.input} type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <Button className={style.customButton}  type="submit"> Subscribe </Button> {/* Apply the custom button class */}
          </Form.Group>
        </Form>

       {/* Modal for Thank You Message */}
       <Modal show={showModal} onHide={() => setShowModal(false)}>
       <Modal.Header closeButton>
       <Modal.Title> <h6>Thank you for subscribing !!</h6></Modal.Title>
       </Modal.Header>
      </Modal>
    </div>

    <div >
      <h2>Company</h2>
      <ul>
        <li>About Us</li>
        <li>Shop</li>
        <li>Cart</li>
        <li>Contact</li>
      </ul>

    </div>
     <div >
      <h2>Categories</h2>
       <ul>
       <li>Chairs</li>
       <li>Sofa</li>
        <li>Tabble</li>
       <li>Lamp</li>
      </ul>
    </div>
    <div>
      <h2>Contact</h2>
      <ul>
        <li>inspirochetna@gmail.com</li>
        <li>+91 8765432198</li>
      </ul>
    </div>
   </section>
   <div className={style.footerbottom}>
     <p className="copyright">© 2025 Inspiro-Chetna</p>
     <p className="rights">All rights reserved.</p>
    </div>
      
    </div>
    </>
  )
}

export default Footer
