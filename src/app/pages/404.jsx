import React from "react";
import "../styles/notfound.css";
import logo from "../../app/assets/404.jpeg";

function Page() {
  const goBack = () => {
    window.history.back()
  };

  return (
    <div className="notfound">
      {<img src={logo} alt="logo" />}
      <button
        onClick={goBack}
        target="_blank"
        rel="noopener noreferrer"
        className="container"
      >
        Go back...
      </button>
    </div>
  );
}

export default Page;
