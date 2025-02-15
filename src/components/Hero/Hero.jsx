import { useState } from "react";
import "./Hero.css";
import converseBlack from "./converse.png";
import converseMaron from "./thumbnail-shoe3-pwAprjS_.svg";
import ShoeItem from "./ShoeItem";
import CreatShoe from "./CreatShoe";
export default function Hero() {
  const [actualshoe, setActulShow] = useState(converseBlack);

  return (
    <section id="hero">
      <div className="left">
        <div className="smalleTitle">Our Summer Collection</div>
        <div className="bigTitle">
          New Collection <span>Converse</span>
        </div>
        <p>
          Discover stylish Converse arrivals, quality comfort, and innovation
          for your active life.
        </p>
        <button>Shop now</button>
        <CreatShoe />
      </div>

      <div className="right">
        <img className="bigImg" src={actualshoe} width={560} height={520} />

        <div className="miniImgs">
          {shoesData.map(function (shoe) {
            return (
              <ShoeItem
                changeShowWithProps={setActulShow}
                name={shoe.name}
                img={shoe.img}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
const shoesData = [
  {
    name: "Adidas",
    img: "https://converse-store.vercel.app/assets/big-shoe1-VFPhAFde.png",
  },
  {
    name: "Fila",
    img: "https://converse-store.vercel.app/assets/big-shoe2-DQX3Rp_U.png",
  },
  {
    name: "Nike",
    img: "https://converse-store.vercel.app/assets/big-shoe3-ncxL7lz9.png",
  },
  {
    name: "Puma",
    img: "https://converse-store.vercel.app/assets/big-shoe3-ncxL7lz9.png",
  },
  {
    name: "Ambro",
    img: "https://converse-store.vercel.app/assets/big-shoe3-ncxL7lz9.png",
  },
];
