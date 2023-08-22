import React from "react";

const Home = () => {
  return (
    <section
      className=" d-flex  flex-column  justify-content-center  align-items-center "
      id="home"
      style={{
        height: "100vh",
        background: "linear-gradient(45deg, red, blue)",
      }}
    >
      <div className=" text-center ">
        <h1>Welcome To Home page</h1>
      </div>
    </section>
  );
};

export default Home;
