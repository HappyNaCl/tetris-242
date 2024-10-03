import Navbar from "../components/navbar";
import StartModal from "../components/start/modal";
import "../index.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(true);

  const close = () => {
    setModalOpen(false);
  };

  return (
    <div className="bg-blue-950">
      <motion.div className="h-screen">
        <Navbar />
        <h1 className="text-white text-5xl">Hello World!</h1>
        <p>This is home page</p>

        <AnimatePresence
          initial={false}
          mode="wait"
          onExitComplete={() => null}
        >
          {modalOpen && (
            <StartModal modalOpen={modalOpen} handleClose={close} />
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
