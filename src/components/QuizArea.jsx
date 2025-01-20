/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { createAnswers, setMark } from "../redux/markSlice";
import { useNavigate } from "react-router-dom";


const QuizArea = () => {
  const [index, setIndex] = useState(0);
  const [quizLst, setQuizLst] = useState(null)
  const [result, setResult] = useState({});
  const [answers, setAnswers] = useState([])
  const dispatch = useDispatch();
  const navigate = useNavigate()
  useEffect(() => {
    const level = location.pathname.split('/')[2];
    axios.get(`https://math-server-nine.vercel.app/api/getQuiz/${level}`)
      .then((res) => {
        setQuizLst(res.data);
      })
  }, [])
  useEffect(() => {
    let opts = document.querySelectorAll('input');
    opts.forEach(element => {
      element.checked = false;
    });
    console.log(result);

  }, [index])

  const heandleSubmit = async()=>{
    dispatch(setMark(result))
    await quizLst.forEach((e)=>{
      answers.push(e.answer);
    })
    dispatch(createAnswers(answers)) 
    console.log(answers);
    navigate('/quiz/result')
  }

  return (
    <div className="quiz-area">
      <div className="question-area">
        {quizLst && quizLst[index].question}
      </div>
      <div className="option-area">
        <div className="option" onClick={() => document.querySelector('#opt1').click()}><input type="radio" id="opt1" name="opt" value={quizLst ? quizLst[index].options[0] : ""} onClick={(e) => result[index] = e.target.value} /> <span>{quizLst && quizLst[index].options[0]}</span>
        </div>
        <div className="option" onClick={() => document.querySelector('#opt2').click()}><input type="radio" id="opt2" name="opt" value={quizLst ? quizLst[index].options[1] : ""} onClick={(e) => result[index] = e.target.value} /> <span>{quizLst && quizLst[index].options[1]}</span>
        </div>
        <div className="option" onClick={() => document.querySelector('#opt3').click()}><input type="radio" id="opt3" name="opt" value={quizLst ? quizLst[index].options[2] : ""} onClick={(e) => result[index] = e.target.value} /> <span>{quizLst && quizLst[index].options[2]}</span>
        </div>
        <div className="option" onClick={() => document.querySelector('#opt4').click()}><input type="radio" id="opt4" name="opt" value={quizLst ? quizLst[index].options[3] : ""} onClick={(e) => result[index] = e.target.value} /> <span>{quizLst && quizLst[index].options[3]}</span>
        </div>
      </div>
      <div className="function-area">
        <button onClick={() => index > 0 && setIndex(index - 1)}>Previous</button>
        <span style={{ marginTop: '6px' }}>{index + 1}</span>
        {index != 9 ? (<button onClick={() => index < 9 && setIndex(index + 1)}>Next</button>)
          : (<button onClick={heandleSubmit}>Submit</button>)
          }
      </div>
    </div>
  )
}

export default QuizArea