import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import StartButton from "./StartButton";
import { FC } from "react";

interface StartModalProps {
  modalOpen: boolean;
  handleClose: () => void;
}

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {},
};

const StartModal: FC<StartModalProps> = ({ handleClose }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="h-fit bg-black"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <StartButton onClick={handleClose}>Start</StartButton>
      </motion.div>
    </Backdrop>
  );
};

export default StartModal;
