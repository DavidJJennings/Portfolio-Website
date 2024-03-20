import { motion } from "framer-motion";

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
      className="flex flex-col items-center justify-center text-2xl gap-y-7 font-bold origin-center"
    >
      {listItems.map((item) => {
        return (
          <motion.li
            onClick={() => setOpen(false)}
            variants={itemVariants}
            key={item}
            className="hover:underline"
          >
            <a href={`#${item}`}>{item}</a>
          </motion.li>
        );
      })}
    </motion.ul>
  );
};
export default Links;
