export default function Istriangle() {
  let clickHandler = () => {
    let angleInputs = document.querySelectorAll(".angle-input");
    let angleResult = document.querySelector("#angle-result");
    let sumOfAngles = 0;
    for(let ele of angleInputs){
      sumOfAngles = sumOfAngles + parseInt(ele.value);
    }
    console.log(sumOfAngles);
    if(sumOfAngles === 180)
      angleResult.innerText = `It's a triangle!`
    else
      angleResult.innerText = `Not a triangle!`
  }
  return (
    <div>
      <h1>Angles of Triangle</h1>
      <label className="angle-label" htmlFor="angle1">Angle 1</label>
      <input className="angle-input" id="angle1" type="number" placeholder="Enter angle 1.." />
      <label className="angle-label" htmlFor="angle2">Angle 2</label>
      <input className="angle-input" id="angle2" type="number" placeholder="Enter angle 2.." />
      <label className="angle-label" htmlFor="angle3">Angle 3</label>
      <input className="angle-input" id="angle3" type="number" placeholder="Enter angle 3.." />
      <button onClick={clickHandler} >Check</button>
      <div id="angle-result"></div>
    </div>
  );
} 
