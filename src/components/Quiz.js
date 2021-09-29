export default function Quiz() {
  const solObj = {
    "qn1":"45°",
    "qn2":"right angle",
    "qn3":"12, 16, 20",
    "qn4":"45°",
    "qn5":"no"
  }
  let submitHandler = () => {
    let formEle = document.querySelector("#quiz-form");
    let formData = new FormData(formEle);
    let quizResult = document.querySelector("#quiz-result");
    let points = 0;
    for(let ele of formData){
      console.log(ele);
      if(ele[1] === solObj[ele[0]]){
        points++;
      }
    }
    quizResult.innerText = `Your final score is ${points}`;
  }
  return (
    <div>
      <h1>Quiz on Triangles</h1>
      <h3>For each correct answer you will get 1 point.</h3>
      <form id="quiz-form">
        <ol className="quiz-list">
          <li className="quiz-list-item">What is the third angle for the triangle where angle1 = 45° and angle2 = 45°?
            <div>
              <label className="quiz-options"><input type="radio" value="45°" name="qn1"/>45°</label>
              <label className="quiz-options"><input type="radio" value="90°" name="qn1"/>90°</label>
              <label className="quiz-options"><input type="radio" value="60°" name="qn1"/>60°</label>
            </div>
          </li>
          <li className="quiz-list-item">What is the third angle for the triangle where angle1 = 45° and angle2 = 45°?
            <div>   
              <label className="quiz-options"><input type="radio" value="obtuse" name="qn2"/>obtuse</label>
              <label className="quiz-options"><input type="radio" value="acute" name="qn2"/>acute</label>
              <label className="quiz-options"><input type="radio" value="right angle" name="qn2"/>right angle</label>
            </div>
          </li>
          <li className="quiz-list-item">Which of the following can form a right angled triangle?
            <div>
              <label className="quiz-options"><input type="radio" value="14, 15, 26" name="qn3"/>14, 15, 26</label>
              <label className="quiz-options"><input type="radio" value="12, 16, 20" name="qn3"/>12, 16, 20</label>
            </div>
          </li>
          <li className="quiz-list-item">If one angle of a triangle is obtuse, then which one of the following is the possible measure of remaining angles?
            <div>
              <label className="quiz-options"><input type="radio" value="100" name="qn4"/>100°</label>
              <label className="quiz-options"><input type="radio" value="45°" name="qn4"/>45°</label>
            </div>
          </li>
          <li className="quiz-list-item">A scalene triangle has ___ lines of symmetry
            <div>
              <label className="quiz-options"><input type="radio" value="2" name="qn5"/>2</label>
              <label className="quiz-options"><input type="radio" value="no" name="qn5"/>no</label>
              <label className="quiz-options"><input type="radio" value="15" name="qn5"/>15</label>
            </div>
          </li>
        </ol>
      </form>
      <button onClick={submitHandler} >Submit</button>
      <div id="quiz-result"></div>
    </div>
  );
} 
