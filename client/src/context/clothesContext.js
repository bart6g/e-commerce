import React, { createContext, useState } from "react";
import img1 from "../assets/man1.jpg";
import img2 from "../assets/man2.jpeg";
import img3 from "../assets/man3.jpeg";
import img4 from "../assets/man4.jpeg";
import img5 from "../assets/man5.jpeg";
import img6 from "../assets/man6.jpeg";
import img7 from "../assets/shoes.jpeg";
import img8 from "../assets/shoes2.jpeg";

export const ClothesContext = createContext({});

const initialMen = [
  {
    id: 1,
    img: img1,
    title: "Black Blouse",
    price: "50$",
  },
  {
    id: 2,
    img: img2,
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
  {
    id: 7,
    img: img7,
    title: "White trainers",
    price: "200$",
  },
  {
    id: 8,
    img: img8,
    title: "White trainers",
    price: "250$",
  },
];
export const ClothesProvider = ({ children }) => {
  const [menClothes, setMenClothes] = useState(initialMen);
  const [womenClothes, setWomenClothes] = useState([]);
  return (
    <ClothesContext.Provider value={{ menClothes, womenClothes }}>
      {children}
    </ClothesContext.Provider>
  );
};
