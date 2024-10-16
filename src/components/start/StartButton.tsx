import { motion } from "framer-motion";

interface StartButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Animate = {
  initial: {},
  animate: {},
};

export default function StartButton({ children, onClick }: StartButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      className="text-9xl text-center text-white font-EditUndo bg-red-700 py-3 px-20 rounded-lg"
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
