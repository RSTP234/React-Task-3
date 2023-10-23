import React from "react";
import "./styles.css";

function ColorPicker() {
  function pickColor() {
    document.getElementById("red").style.backgroundColor = "red";
    document.getElementById("chartreuse").style.backgroundColor = "chartreuse";
    document.getElementById("blue").style.backgroundColor = "blue";
    document.getElementById("yellow").style.backgroundColor = "yellow";
    document.getElementById("magenta").style.backgroundColor = "magenta";
    document.getElementById("cyan").style.backgroundColor = "cyan";
    document.getElementById("orange").style.backgroundColor = "orange";
    document.getElementById("darkmagenta").style.backgroundColor =
      "darkmagenta";
    document.getElementById("white").style.backgroundColor = "white";
    document.getElementById("green").style.backgroundColor = "green";
    document.getElementById("tomato").style.backgroundColor = "tomato";
    document.getElementById("darkturquoise").style.backgroundColor =
      "darkturquoise";
    document.getElementById("brown").style.backgroundColor = "brown";
    document.getElementById("chocolate").style.backgroundColor = "chocolate";
    document.getElementById("teal").style.backgroundColor = "teal";
    document.getElementById("gold").style.backgroundColor = "gold";
  }

  let Colorpicked = (e) => {
    console.log(e.target.id);
    document.getElementById("red").style.backgroundColor = "transparent";
    document.getElementById("chartreuse").style.backgroundColor = "transparent";
    document.getElementById("blue").style.backgroundColor = "transparent";
    document.getElementById("yellow").style.backgroundColor = "transparent";
    document.getElementById("magenta").style.backgroundColor = "transparent";
    document.getElementById("cyan").style.backgroundColor = "transparent";
    document.getElementById("orange").style.backgroundColor = "transparent";
    document.getElementById("darkmagenta").style.backgroundColor =
      "transparent";
    document.getElementById("white").style.backgroundColor = "transparent";
    document.getElementById("green").style.backgroundColor = "transparent";
    document.getElementById("tomato").style.backgroundColor = "transparent";
    document.getElementById("darkturquoise").style.backgroundColor =
      "transparent";
    document.getElementById("brown").style.backgroundColor = "transparent";
    document.getElementById("chocolate").style.backgroundColor = "transparent";
    document.getElementById("teal").style.backgroundColor = "transparent";
    document.getElementById("gold").style.backgroundColor = "transparent";
  };
  return (
    <div id="container">
      <h1>Color Picker</h1>
      <div id="colorsCont">
        <button onClick={Colorpicked} disabled>
          <div className="colors" id="red"></div>
        </button>
        <button onClick={Colorpicked}>
          <div className="colors" id="chartreuse"></div>
        </button>
        <button onClick={Colorpicked}>
          <div className="colors" id="blue"></div>
        </button>
        <button onClick={Colorpicked}>
          <div className="colors" id="yellow"></div>
        </button>
        <button onClick={Colorpicked}>
          <div className="colors" id="magenta"></div>
        </button>
        <button onClick={Colorpicked}>
          <div className="colors" id="cyan"></div>
        </button>
        <button onClick={Colorpicked}>
          <div className="colors" id="orange"></div>
        </button>
        <button onClick={Colorpicked}>
          <div className="colors" id="darkmagenta"></div>
        </button>
        <button onClick={Colorpicked}>
          <div className="colors" id="white"></div>
        </button>
        <button onClick={Colorpicked}>
          <div className="colors" id="green"></div>
        </button>
        <button onClick={Colorpicked}>
          <div className="colors" id="tomato"></div>
        </button>
        <button onClick={Colorpicked}>
          <div className="colors" id="darkturquoise"></div>
        </button>
        <button onClick={Colorpicked}>
          <div className="colors" id="brown"></div>
        </button>
        <button onClick={Colorpicked}>
          <div className="colors" id="chocolate"></div>
        </button>
        <button onClick={Colorpicked}>
          <div className="colors" id="teal"></div>
        </button>
        <button onClick={Colorpicked}>
          <div className="colors" id="gold"></div>
        </button>
        <br />
        <button onClick={pickColor} id="colbutton">
          Pick a color
        </button>
      </div>
    </div>
  );
}

export default ColorPicker;
