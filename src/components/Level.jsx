import { useNavigate } from "react-router-dom"

const Level = () => {
    const navigate = useNavigate();
  return (
    <div className="level-area">
        <button onClick={()=>navigate('/quiz/beginner')}>Beginner</button>
        <button onClick={()=>navigate('/quiz/easy')}>Easy</button>
        <button onClick={()=>navigate('/quiz/intermediate')}>Intermediate</button>
        <button onClick={()=>navigate('/quiz/expert')}>Expert</button>
    </div>
  )
}

export default Level