import "./App.css";
import { motion } from "framer-motion";
import { fadeIn, imageVariants, zoomIn } from "./utils/variants";
import Faq from "./components/Faq";

function App() {
  return (
    <div className="w-full sm:h-screen min-h-screen bg-gradient-to-tl from-indigo-700 to-purple-400 flex justify-center items-center relative">
      <motion.img
        initial="hidden"
        whileInView="show"
        variants={fadeIn("left", "spring", 1, 1)}
        src="/images/illustration-box-desktop.svg"
        className="hidden sm:block relative z-50 left-[70px] -bottom-[70px] w-[150px] h-[130px] -ml-[150px]"
      />

      <div className=" md:h-[70%] sm:h-[80%] sm:max-w-[750px] h-[70%] pt-10 w-[90%] bg-white flex flex-col sm:flex-row rounded-3xl shadow-2xl sm:overflow-hidden sm:mt-0 mt-[140px] sm:mb-0 mb-[100px]">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={imageVariants("left")}
          className="flex sm:mt-0"
        >
          <div className="flex items-center mx-auto sm:ml-11 relative ">
            <motion.img
              variants={fadeIn("left", "spring", 1, 1)}
              src="/images/illustration-box-desktop.svg"
              alt="box"
              className="sm:hidden block relative z-50 left-[90px] bottom-[115px] w-[90px] items-center -ml-[95px]"
            />
            <img
              src="/images/bg-pattern-desktop.svg"
              alt="bg-image"
              className="absolute sm:min-w-[620px] sm:h-[620px] right-[2px] sm:-right-[5px] -top-[160px] sm:-top-[80px]"
            />
            <img
              src="/images/illustration-woman-online-desktop.svg"
              alt="girl-online-image"
              className="sm:min-w-[300px] md:min-w-[380px] w-[220px] relative sm:left-0 left-1 bottom-[138px] sm:bottom-0 sm:-ml-[130px] shadow-gray-700"
            />
          </div>
        </motion.div>

        <motion.div initial='hidden' whileInView='show' variants={zoomIn(0.5, 0.8)}>
          <Faq />
        </motion.div>
      </div>
    </div>
  );
}

export default App;
