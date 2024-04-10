import { motion } from "framer-motion";

type Props = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ToggleBtn: React.FC<Props> = (props) => {
  const { setOpen } = props;

  return (
    <button
      onClick={() => setOpen((prev) => !prev)}
      className="absolute top-[7.5%] left-[12.5%] w-[30px] sm:w-[35px] md:w-[40px] lg:w-[50px] xl:w-[55px] 2xl:w-[65px] -translate-x-1/2 -translate-y-1/2 aspect-square rounded-full flex items-center justify-center z-50"
    >
      <svg
        height="100%"
        width="100%"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          variants={{
            closed: { d: "M 25 35 L 75 35" },
            open: { d: "M 35 35 L 65 65" },
          }}
          stroke="black"
          strokeWidth={6}
          strokeLinecap="round"
        />
        <motion.path
          variants={{
            closed: { d: "M 25 50 L 75 50", opacity: 1 },
            open: { opacity: 0 },
          }}
          stroke="black"
          strokeWidth={6}
          strokeLinecap="round"
        />
        <motion.path
          variants={{
            closed: { d: "M 25 65 L 75 65" },
            open: { d: "M 35 65 L 65 35" },
          }}
          stroke="black"
          strokeWidth={6}
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
};
export default ToggleBtn;
