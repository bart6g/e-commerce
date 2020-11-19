import React from "react";
// import Carousel from "react-elastic-carousel";
import img1 from "../../../src/assets/img1.jpg";
import img2 from "../../../src/assets/img2.jpg";
import img3 from "../../../src/assets/img3.jpg";
import img4 from "../../../src/assets/img4.jpg";
import Carousel from "react-bootstrap/Carousel";
import { useHistory } from "react-router-dom";
import styles from "./slider.module.scss";

const Slider = () => {
  const history = useHistory();
  return (
    // <Carousel>
    //   <div className="box">
    //     <img src={img1} alt="img" />
    //     <p>Join us</p>
    //   </div>
    //   <div className="box">
    //     <img src={img2} alt="img" />
    //     <p>Join us</p>
    //   </div>
    //   <div className="box">
    //     <img src={img3} alt="img" />
    //     <p>Join us</p>
    //   </div>
    //   <div className="box">
    //     <img src={img4} alt="img" />
    //     <p>Join us</p>
    //   </div>
    // </Carousel>
    <>
      <div className={styles.container}>
        <Carousel>
          <Carousel.Item>
            <div className={styles.box}>
              <img className={styles.img} src={img1} alt="First slide" />
              <span></span>
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div className={styles.box}>
              <img className={styles.img} src={img2} alt="Third slide" />
              <span></span>
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div className={styles.box}>
              <img className={styles.img} src={img4} alt="Third slide" />
              <span></span>
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className={styles.content}>
        <h1>Welcome to our store!</h1>
        <h2>Choose clothes that you are intrested in</h2>
        <div>
          <button onClick={() => history.push("/men")}>Men</button>
          <button onClick={() => history.push("/women")}>Women</button>
        </div>
      </div>
    </>
  );
};

export default Slider;
