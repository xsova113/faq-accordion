import "./App.css";
import { motion } from "framer-motion";
import { fadeIn, imageVariants } from "./utils/variants";
import Faq from "./components/Faq";

function App() {
  return (
    <div className="w-full h-screen bg-gradient-to-tl from-indigo-700 to-purple-400 flex justify-center items-center relative">
      <motion.img
        initial="hidden"
        whileInView="show"
        variants={fadeIn("left", "spring", 1.5, 1)}
        src="/images/illustration-box-desktop.svg"
        className="hidden sm:block relative z-50 sm:left-[70px] left-[160px] bottom-[300px] sm:-bottom-[70px] w-[100px] sm:w-[150px] sm:h-[130px] items-center sm:-ml-[150px] -ml-[95px]"
      />

      <div className=" md:h-[70%] sm:h-[80%] sm:max-w-[750px] h-[85%] pt-10 w-[90%] bg-white flex flex-col sm:flex-row sm:mt-0 rounded-3xl shadow-2xl sm:overflow-hidden my-[190px]">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={imageVariants("left")}
          className="flex"
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

        <Faq />
      </div>
    </div>
  );
}

export default App;
