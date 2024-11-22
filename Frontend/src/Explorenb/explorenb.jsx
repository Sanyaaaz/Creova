import React from "react";
import Navbar from "../components/Navbar";
import Explore from "../components/Free";
import Footer from "../components/Footer";
function explorenb() {
  return (
    <>
      <Navbar />
      <div className=" min-h-screen">
        <Explore />
      </div>
      <Footer />
    </>
  );
}

export default explorenb;