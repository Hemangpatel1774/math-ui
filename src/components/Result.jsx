import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

const Result = () => {
    const [mark, setMark] = useState(null)
    const marksObj = useSelector(state => state.marksObj);
    const answers = useSelector(state => state.answers);
    const navigate = useNavigate();

    useEffect(() => {
        let count = 0;
        if(answers){
            
            answers.forEach((e,i) => {
                if(e==marksObj[i]){
                    count+=1;
                }
            });
            setMark(count);
        }else{
            document.querySelector('button').click()
        }
    }, [])
    
    return (
        <div className="result-area">
            <h1 className="result-header">Result</h1>
            <div className="marks">{mark!==null ? mark : 11} / 10</div>
            <button onClick={()=>navigate('/')}>Next</button>
        </div>
    )
}

export default Result