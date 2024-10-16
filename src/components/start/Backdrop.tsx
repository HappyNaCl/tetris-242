import { motion } from "framer-motion";

interface BackdropProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

export default function Backdrop({ children, onClick }: BackdropProps) {
  return (
    <motion.div
      className="flex justify-center items-center overflow-hidden w-full h-screen bg-black absolute top-0 left-0"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ y: "-100vh", transition: { duration: 0.75 } }}
    >
      {children}
    </motion.div>
  );
}
