import { motion } from "framer-motion";
import usePageScroll from "../../../hooks/usePageScroll";

type Props = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Links: React.FC<Props> = ({ setOpen }) => {
  const scroll = usePageScroll();
  const listItems = ["Homepage", "Skills/Technologies", "Projects", "Contact"];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.ul
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center text-2xl gap-y-7 font-bold origin-center text-center"
    >
      {listItems.map((item) => {
        return (
          <button key={item} onClick={() => scroll(item)}>
            <motion.li
              onClick={() => setOpen(false)}
              variants={itemVariants}
              className="hover:underline"
            >
              {item}
            </motion.li>
          </button>
        );
      })}
    </motion.ul>
  );
};
export default Links;
