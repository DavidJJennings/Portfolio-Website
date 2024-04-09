import { useState } from "react";
import Links from "./Links";
import ToggleBtn from "./ToggleBtn";
import { motion } from "framer-motion";
import useScreenSize from "../../../hooks/useScreenSize";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const screenSize = useScreenSize();
  const circleRadius =
    screenSize == "xs"
      ? "15px"
      : screenSize == "sm"
      ? "17.5px"
      : screenSize == "md"
      ? "20px"
      : screenSize == "lg"
      ? "25px"
      : screenSize == "xl"
      ? "27.5px"
      : screenSize == "2xl"
      ? "32.5px"
      : "30px";

  const getVariants = () => {
    return {
      open: {
        clipPath: `circle(2000px at 50px 50px)`,
        transition: {
          type: "spring",
          stiffness: 20,
        },
      },
      closed: {
        clipPath: `circle(${circleRadius} at 40px 50px)`, // Ensuring correct syntax here
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 40,
        },
      },
    };
  };

  const variants = getVariants();
  const props = {
    setOpen: setOpen,
  };

  return (
    <div className="flex flex-col justify-center items-center text-black z-50 relative">
      <motion.div
        animate={open ? "open" : "closed"}
        variants={variants}
        initial="closed"
        className=" bg-white fixed left-0 top-0 h-full w-full md:w-[400px] flex flex-col justify-center items-center"
      >
        <ToggleBtn {...props} />
        {open && <Links setOpen={setOpen} />}
      </motion.div>
    </div>
  );
  4;
};
export default Menu;
