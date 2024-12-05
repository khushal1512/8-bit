import React from "react";
import Card from "./CardComp.jsx";
import Icon1 from "../../assets/icon/1.png";
import Icon2 from "../../assets/icon/2.png";
import Icon3 from "../../assets/icon/3.png";
import Icon4 from "../../assets/icon/4.png";
import { motion } from "framer-motion";
import { SlideUp, SlideRight } from "../../utility/animation.js";

const Latest = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <nav className="flex space-x-8">
            <a href="#" className="text-lg font-bold border-b-2 border-black">
              Latest Stories
            </a>
            <a href="#" className="text-lg font-semibold text-gray-500">Think</a>
            <a href="#" className="text-lg font-semibold text-gray-500">
              Health
            </a>
          </nav>
          <button className="p-2 border rounded-lg">
            <span>☰</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
          <motion.div
            variants={SlideRight(0.2)}
            whileInView={"animate"}
            initial="initial"
          >
            <Card
              icon={Icon4}
              heading="Tragic Murder on Edmund Pettus Bridge"
              text="In a shocking turn of events, a murder has occurred on the historic Edmund Pettus Bridge in Selma, Alabama. The victim was found at the site where a significant march for voting rights took place in 2024."
              author="Lucy Hiddleston"
              time="2 hours ago"
            />
          </motion.div>
          <motion.div
            variants={SlideRight(0.4)}
            whileInView={"animate"}
            initial="initial"
          >
            <Card
              icon={Icon2}
              heading="Breakthrough Cancer Vaccine Shows Promising Results"
              text="A new cancer vaccine has demonstrated significant potential in clinical trials, offering hope for advanced-stage cancer patients. This innovative treatment aims to boost the immune system's ability to fight cancer cells effectively."
              author="Caroline Casey"
              time="4 hours ago"
            />
          </motion.div>
          <motion.div
            variants={SlideRight(0.6)}
            whileInView={"animate"}
            initial="initial"
          >
            <Card
              icon={Icon1}
              heading="Tornado and tide warnings as Storm Hanna lashes Texas"
              text="As Storm Hanna lashes Texas, residents are facing tornado warnings and dangerously high tides, causing widespread flooding and damage across the region. The storm has also led to significant rainfall, resulting in further flooding and travel disruptions."
              author="Shane Sahil"
              time="5 hours ago"
              tag="Weather"
              tagColor="bg-red-600"
            />
          </motion.div>
          <motion.div
            variants={SlideRight(0.8)}
            whileInView={"animate"}
            initial="initial"
          >
            <Card
              icon={Icon3}
              heading="20 Years Ago, Steve Jobs Built the 'Coolest Computer Ever.' It Bombed"
              text="This month marks the 20th anniversary of the Power Mac G4 Cube, which debuted July 19, 2000. It also marks the 19th anniversary of Apple's announcement that it was putting the Cube on ice."
              author="Ritesh Lan"
              time="12 hours ago"
            />
          </motion.div>
        </div>
        <div className="flex justify-center mt-8"> {/* Added flex container for centering */}
          <motion.div
            variants={SlideUp(0.6)}
            whileInView={"animate"}
            initial="initial"
            className="bg-primary text-white px-6 py-4 rounded-lg w-fit font-bold hover:shadow-lg duration-200"
          >
 <button>View More</button>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Latest;