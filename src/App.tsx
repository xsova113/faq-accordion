import { useState } from "react";
import "./App.css";
import { motion } from "framer-motion";

interface dataType {
  q: string;
  a: string;
}

function App() {
  const data: dataType[] = [
    {
      q: "How many team members can I invite?",
      a: "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
    },
    {
      q: " What is the maximum file upload size?",
      a: " No more than 2GB. All files in your account must fit your allotted storage space.",
    },
    {
      q: "How do I reset my password?",
      a: "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
    },
    {
      q: "Can I cancel my subscription?",
      a: "Yes! Send us a message and we'll process your request no questions asked.",
    },
    {
      q: "Do you provide additional support?",
      a: "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
    },
  ];

  const [isClicked, setIsClicked] = useState(-1);

  const fadeIn = (
    direction: string,
    type: string,
    delay: number,
    duration: number
  ) => ({
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  });

  return (
    <div className="w-screen h-screen bg-gradient-to-tl from-indigo-700 to-purple-400 flex justify-center items-center relative">
      <div className="bg-[url('/images/bg-pattern-mobile.svg')] sm:bg-[url('/images/bg-pattern-desktop.svg')] md:h-[70%] sm:h-[80%] sm:max-w-[700px] h-[85%] w-[90%] bg-white flex flex-col sm:flex-row sm:mt-0 py-16 rounded-3xl shadow-2xl sm:overflow-hidden">
        <div className="flex items-center mx-auto sm:ml-11">
          <img
            src="/images/illustration-woman-online-desktop.svg"
            alt="image"
            className="sm:min-w-[300px] md:min-w-[380px] w-[250px] relative sm:left-0 left-1 bottom-[110px] sm:bottom-0 sm:-ml-[120px] shadow-gray-700 "
          />
          <img
            src="/images/illustration-box-desktop.svg"
            alt="box"
            className="absolute sm:-left-[30px] md:left-[50px] lg:left-[200px] sm:pt-[100px] w-[100px] sm:w-[120px] md:w-[150px] left-18 sm:mb-0 mb-[170px]"
          />
        </div>

        <div className="flex flex-col sm:mt-[70px] -mt-[40px] sm:items-start items-center mx-8">
          <h1 className="text-3xl font-bold mb-8">FAQ</h1>
          <div className="space-y-4 text-[15px] flex flex-col">
            {data.map((item, i) => (
              <div
                key={i}
                className="flex justify-between gap-12 items-baseline"
              >
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
                    className={`min-w-[13px] ${
                      isClicked === i && "rotate-180"
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
