import React from "react";
import img1 from "../assets/welcome.jpg";
import img2 from "../assets/bhagvatam.svg";
import img3 from "../assets/bhagvatgeeta.svg";
import img4 from "../assets/chaitanya.svg";
import img5 from "../assets/p1.svg";
import img7 from "../assets/p3.svg";
import img8 from "../assets/p4.svg";
import img9 from "../assets/krishna.jpg";
import img10 from "../assets/RADHAKRISHNA.jpg";
import img11 from "../assets/design.svg";
import Card from "./_8_Card";
import Navbar from "./_8_Navbar";
import { Shelf } from "./_8_Data";

function Assignment1() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="flex justify-center flex-row bg-gradient-to-r from-orange-300 via-orange-400 to-pink-500 py-16 text-orange-100">
        <div>
          <div className="font-bold text-4xl p-6">
            <p>
              The topmost source of spiritual
              <br /> knowledge.
            </p>
          </div>
          <div className="p-10">
            <p>
              Bhaktivedanta Library is a free, online multilingual research tool
              designed
              <br /> primarily to explore the teachings of His Divine Grace
              <br /> A. C. Bhaktivedanta Swami Prabhupada.
            </p>
          </div>
        </div>
        <div className=" px-36 ">
          <Card image={img10} />
          <br />
        </div>
        <p>
          Hare Krishna
          <br /> Hare Krishna
          <br /> Krishna Krishna
          <br /> Hare Hare
          <br /> Hare Rama
          <br /> Hare Rama
          <br /> Rama Rama
          <br /> Hare Hare
        </p>
      </div>
      <div className="bg-red-100">
        <div className="flex">
          <div className="w-12 h-13 flex-1 pr-6">
            <p>Srila Prabhupada, born Abhay Charan De, was a renowned spiritual teacher and the founder-acharya of the International Society for Krishna Consciousness (ISKCON), also known as the Hare Krishna movement. He dedicated his life to spreading the teachings of Bhagavad Gita and the practice of bhakti yoga worldwide. Prabhupada traveled extensively, delivering lectures, writing books, and establishing temples and ashrams around the globe. His profound wisdom, compassion, and devotion continue to inspire millions of people to lead a life of spiritual growth and service.</p>
          </div>
          <div classname = "flex pl-20 px-36 ">
            <Card image={img1} /><br/>
            <p>A. C. Bhaktivedanta Swami Prabhupada</p>
          </div>
        </div>
        <div className="flex justify-center pt-6">
          <Card image={img11} />
        </div>
        <div className=" font-bold text-2xl flex justify-center">
          <p>Top Picks</p>
        </div>
        <div className="">
          <Card image={img3} />
          {/* <Card image={img8} />
          <Card image={img7} />
          <Card image={img2} />
          <Card image={img5} />
          <Card image={img4} />
          <Card image={img9} /> */}
        </div>
      </div>
    </div>
  );
}

export default Assignment1;
