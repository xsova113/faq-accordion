import { motion } from "framer-motion";
import { useState } from "react";
import data from "../libs/data";
import { fadeIn } from "../utils/variants";

const Faq: React.FC = () => {
  const [isClicked, setIsClicked] = useState(-1);

  return (
    <div className="flex flex-col sm:mt-[50px] -mt-[90px] sm:items-start items-center mx-8 sm:pb-0 pb-8">
      <h1 className="text-3xl font-bold mb-8">FAQ</h1>
      <div className="space-y-4 sm:text-[15px] text-[13px] flex flex-col">
        {data.map((item, i) => (
          <div key={i} className="flex justify-between gap-12 items-baseline">
            <div className="flex flex-col w-full">
              <h1
                onClick={() => setIsClicked(i === isClicked ? -1 : i)}
                className={`text-gray-600 active:text-black active:font-bold mb-2 ${
                  isClicked === i && "text-black font-bold"
                }`}
              >
                {item.q}
              </h1>

              {isClicked === i && (
                <motion.div
                  variants={fadeIn("left", "spring", 0, 1.2)}
                  initial="hidden"
                  whileInView="show"
                >
                  <p
                    key={i}
                    className="mb-3 font-thin text-[13px] text-gray-500"
                  >
                    {item.a}
                  </p>
                </motion.div>
              )}
              <hr className="my-1" />
            </div>
            <button
              className=""
              onClick={() => setIsClicked(i === isClicked ? -1 : i)}
            >
              <img
                src="/images/icon-arrow-down.svg"
                alt="arrow-icon"
                className={`min-w-[13px] ${isClicked === i && "rotate-180"}`}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
