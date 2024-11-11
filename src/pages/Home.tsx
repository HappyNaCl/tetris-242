import Navbar from "../components/navbar";
import StartModal from "../components/start/modal";
import "../index.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import "../styles/Home.css"
import "../js/scroll-screen.js"

export default function Home() {
  const [modalOpen, setModalOpen] = useState(true);

  const close = () => {
    setModalOpen(false);
  };

  return (
    <div className="container bg-blue-950 h-screen flex flex-col items-center text-center justify-center">
      {/* <Navbar /> */}
      <div className="text-center first-screen">
        <h1 className="title-screen tracking-widest">NAR</h1>
        <p className="description-screen tracking-wide opacity-70 mt-2">
          25-2
        </p>
      </div>

      {/* <AnimatePresence
        initial={false}
        mode="wait"
        onExitComplete={() => null}
      >
        {modalOpen && (
          <StartModal modalOpen={modalOpen} handleClose={close} />
        )}
      </AnimatePresence> */}
        <div className="container"></div>
    </div>
  );
}
