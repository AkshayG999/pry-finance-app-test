import React from "react";
import CreateModel from "../components/modelComponents/CreateModel";
import ModelMainBody from "../components/modelComponents/ModelMainBody";
import DynamicInput from "../components/modelComponents/DynamicInput";

function ModelScreen() {
  return (
    <>
      <section style={{ background: "#F4F9FA", height: "100vh" }}>
        <CreateModel />
        <ModelMainBody />
        {/* <DynamicInput/> */}
      </section>
    </>
  );
}

export default ModelScreen;
