export default function Area() {
  let clickHandler = () => {
    let sideElement = document.querySelectorAll(".angle-input");
    let areaResult = document.querySelector("#area-result");
    let base = sideElement[0].value;
    let height = sideElement[1].value;
    let area = 1/2*(base)*(height);
    areaResult.innerText = `The area is ${area}`;
  }
  return (
    <div>
      <h1>Calculate the Area of a triangle</h1>
      <label className="angle-label" htmlFor="base1">Enter base value (a)</label>
      <input className="angle-input" id="base1" type="number" placeholder="Base.." />
      <label className="angle-label" htmlFor="height1">Enter height value (a)</label>
      <input className="angle-input" id="height1" type="number" placeholder="Height.." />
      <button onClick={clickHandler} >Check</button>
      <div id="area-result"></div>
    </div>
  );
} 
