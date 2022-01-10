import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  let str = "Ganesh Kanna, Durga, ";
  let arr = str.split("");
  // console.log(arr);
  let i = 0;
  let timeOut = 1000;
  let [value, setValue] = useState("");
  let bb = "";

  for (let j = 0; j < 10; j++) {
    myText();
  }
  // setTimeout(()=>{},1000)

  function myText() {
    useEffect(() => {
      arr.map((x) => {
        i += .5;
        // console.log("Am outside timeout " + x);
        setTimeout(() => {
          bb += x;
          setValue(bb + "|");
          console.log(bb);
        }, timeOut * i);
      });
    }, []);
  }
  // console.log(bb);

  return (
    <div className="App">
      <h1>{value}</h1>
      {/* {list.map((a)=><h1>{a}</h1>)} */}
    </div>
  );
}
