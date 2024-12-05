import React from "react";
import HeroImage from "../../assets/hero.png";
import { SlideUp } from "../../utility/animation";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section>
      <div className="bg-brandWhite rounded-3xl container grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[650px]">
        {/* Text section */}
        <div className="flex flex-col justify-center xl:pr-40">
          <div className="mt-24 mb-10 md:mt-0 md:mb-0 space-y-6 text-center md:text-left">
            <motion.h1
              variants={SlideUp(0.2)}
              whileInView={"animate"}
              initial="initial"
              className="text-5xl font-bold text-darkBlue text-left md:text-left"
            >
              Trump Triumphs ! <br /> Elections 2024
            </motion.h1>
            <motion.p
              variants={SlideUp(0.4)}
              whileInView={"animate"}
              initial="initial"
              className="text-lg text-gray-500 mt-4 text-left md:text-left"
            >
              In an interesting battle with Kamala Harris, Trump has emerged victorious in the 2024 elections.
              The results are in, and Trump has secured a landslide victory. 
              This decisive win marks a significant moment in the political landscape. Voters turned out in large numbers, reflecting the high stakes of this election. 
              The outcome has sparked widespread reactions across the nation.
            </motion.p>
            <motion.div
              variants={SlideUp(0.6)}
              whileInView={"animate"}
              initial="initial"
              className="bg-primary text-white px-6 py-4 rounded-lg mt-4 w-fit mx-auto md:mx-0 font-bold hover:shadow-lg duration-200"
            >
              <button>Learn More</button>
            </motion.div>
          </div>
        </div>

        {/* Image section */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex items-center justify-center"
        >
          <img src={HeroImage} alt="" className="w-full rounded-3xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;  