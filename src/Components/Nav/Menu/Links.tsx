import { motion } from "framer-motion";
import { Link } from "react-scroll";

type Props = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Links: React.FC<Props> = ({ setOpen }) => {
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
          <Link key={item} to={`${item}`} smooth={true} duration={100}>
            <motion.li
              onClick={() => setOpen(false)}
              variants={itemVariants}
              className="hover:underline"
            >
              {item}
            </motion.li>
          </Link>
        );
      })}
    </motion.ul>
  );
};
export default Links;
