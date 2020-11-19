import React from "react";
import ClothesBox from "./../layouts/ClothesBox";
import img1 from "../../assets/woman1.jpg";
import img3 from "../../assets/woman3.jpeg";
import img4 from "../../assets/woman4.jpeg";
import img5 from "../../assets/zestaw1.jpeg";
import img6 from "../../assets/zestaw2.jpeg";

const womenClothes = [
  {
    id: 1,
    img: img1,
    title: "Black Blouse",
    price: "50$",
  },

  {
    id: 3,
    img: img3,
    title: "Jeans set",
    price: "150$",
  },
  {
    id: 4,
    img: img4,
    title: "White and pink blouse",
    price: "80$",
  },
  {
    id: 5,
    img: img5,
    title: "Jeans jacket and hat",
    price: "120$",
  },
  {
    id: 6,
    img: img6,
    title: "Leather bag",
    price: "200$",
  },
  
];


const Women = () => {
  return (
    <div>
      <ClothesBox topic={"women"} clothes={womenClothes} />
    </div>
  );
};

export default Women;
