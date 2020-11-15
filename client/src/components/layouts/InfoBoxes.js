import React from "react";
import Info from "./Info";
import img1 from "../../assets/zestaw1.jpeg";
import img2 from "../../assets/man2.jpeg";
import img3 from "../../assets/shoes.jpeg";
import styles from "./info.module.scss";
const infoArr = [
  {
    img: img1,
    title: "All in All",
    desc: "Choose your favorite set",
    btn: "More info",
  },
  {
    img: img2,
    title: "Dress unusual",
    desc: "Ideas how to dress fashionably",
    btn: "More info",
  },
  {
    img: img3,
    title: "More than boots",
    desc: "These shoes will change your life",
    btn: "More info",
  },
];

const InfoBoxes = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        {infoArr.map((info) => (
          <Info
            img={info.img}
            title={info.title}
            desc={info.desc}
            btn={info.btn}
          />
        ))}
      </div>
    </div>
  );
};

export default InfoBoxes;
