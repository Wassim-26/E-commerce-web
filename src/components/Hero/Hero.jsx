import { useState } from "react";
import "./Hero.css";
import converseBlack from "./converse.png";
import converseMaron from "./thumbnail-shoe3-pwAprjS_.svg";
export default function Hero() {
  const [actualshoe, setActulShow] = useState("converse.png");

  return (
    <section id="hero">
      <div className="left">
        <div className="smalleTitle">Our Summer Collection</div>
        <div className="bigTitle">
          New Collection<br></br> <span>Converse</span>
        </div>
        <p>
          Discover stylish Converse arrivals, quality<br></br> comfort, and
          innovation for your active life.
        </p>
        <button>Shop now</button>
      </div>

      <div className="right">
        <img className="bigImg" src={actualshoe} width={560} height={520} />

        <div className="miniImgs">
          <img
            src={converseBlack}
            width={132}
            height={132}
            onClick={function () {
              setActulShow(converseBlack);
            }}
          />
          <img
            onClick={function () {
              setActulShow(
                "https://converse-store.vercel.app/assets/thumbnail-shoe2-cgdXOLk4.svg"
              );
            }}
            src="https://converse-store.vercel.app/assets/thumbnail-shoe2-cgdXOLk4.svg"
            width={132}
            height={132}
          />{" "}
          <img
            onClick={function () {
              setActulShow(converseMaron);
            }}
            src={converseMaron}
            width={132}
            height={132}
          />
        </div>
      </div>
    </section>
  );
}
