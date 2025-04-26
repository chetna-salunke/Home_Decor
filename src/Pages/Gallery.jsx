import React, { useEffect, useState } from 'react';
import axios from 'axios';
import  style from './Gallery.module.css'; // Import your CSS file
import Footer from '../Footer';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://api.pexels.com/v1/search?query=home%20decor', {
          headers: {
            Authorization: 'Z2HDm41KySt52oqW77KMbYt0V22Bv0ihFZTzs7siEPQeioD7wf8Tnxs4', // Replace with your Pexels API key
          },
        });
        setImages(response.data.photos);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <>
    <section className={style.size}>
    <div className={style.gallery}>
      <h1>Our pieces, your places</h1>
      <div className={style.gal}>
        {images.map(image => (
          <div className={style.imgcontainer} key={image.id}>
            <img src={image.src.medium} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
    <hr />
    </section>
 
    <Footer/>
    </>
  );
};

export default Gallery;