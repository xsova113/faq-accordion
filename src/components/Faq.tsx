import { motion } from "framer-motion";
import data from "../libs/data";
import { fadeIn } from "../utils/variants";
import { useState } from "react";

const Faq = () => {
  const [isClicked, setIsClicked] = useState([-1]);

  const numArray: number[] = [];
  const onClicked = (i: number) => {
    if (numArray.includes(i)) {
      numArray.splice(i, 1);
      setIsClicked(numArray);
    } else {
      numArray.push(i);
      setIsClicked(numArray);
    }
  };

  return (
    <div className="flex flex-col sm:mt-[50px] -mt-[90px] sm:items-start items-center mx-8 pb-20">
      <h1 className="text-3xl font-bold mb-8">FAQ</h1>
      <div className="space-y-4 sm:text-[15px] text-[13px] flex flex-col">
        {data.map((item, i) => (
          <div key={i} className="flex justify-between gap-12 items-baseline">
            <details
              className="flex flex-col w-full"
              onClick={() => onClicked(i)}
            >
              <summary
                style={{ listStyle: "none" }}
                className={`flex justify-between gap-4 text-gray-600 active:text-black active:font-bold mb-2 focus:text-black focus:font-bold cursor-pointer`}
              >
                {item.q}
                <img
                  src="/images/icon-arrow-down.svg"
                  alt="arrow-icon"
                  onClick={() => onClicked(i)}
                  className={`w-3 h-3 cursor-pointer ${
                    isClicked.includes(i) && "rotate-180 transition"
                  }`}
                />
              </summary>

              <hr className="my-2" />
              <motion.div
                variants={fadeIn("left", "spring", 0, 1.2)}
                initial="hidden"
                whileInView="show"
              >
                <p key={i} className="mb-3 font-thin text-[13px] text-gray-500">
                  {item.a}
                </p>
              </motion.div>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
