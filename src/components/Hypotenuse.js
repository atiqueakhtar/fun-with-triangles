export default function Hypotenuse() {
  let clickHandler = () => {
    let baseVal = document.querySelector("#base").value;
    let heightVal = document.querySelector("#height").value;
    let hypoResult = document.querySelector("#hypo-result");
    let hypotenuse = Math.sqrt(Math.pow(baseVal,2) + Math.pow(heightVal,2));
    hypoResult.innerText = `Hypotenuse = ${hypotenuse}`;
  }
  return (
    <div>
      <h1>Calculate the hypotenuse of a triangle.</h1>
      <label className="angle-label" htmlFor="base">Enter base value (a)</label>
      <input className="angle-input" id="base" type="number" placeholder="Base.." />
      <label className="angle-label" htmlFor="height">Enter height value (a)</label>
      <input className="angle-input" id="height" type="number" placeholder="Height.." />
      <button onClick={clickHandler} >Calculate</button>
      <div id="hypo-result"></div>
    </div>
  );
} 
