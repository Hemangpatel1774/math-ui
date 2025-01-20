
import I1 from "../assets/minus.svg"
import I2 from "../assets/maths1-svgrepo-com.svg"
import I3 from "../assets/maths3-svgrepo-com.svg"
import I4 from "../assets/maths5-svgrepo-com.svg"
import I5 from "../assets/maths7-svgrepo-com.svg"
const Banner = () => {
    return (
        <div className="header">
            <img src={I4} />
            <img src={I2} />
            <img src={I3} />
            <img src={I5} />
            <img src={I1}  style={{transform:'translateY(-7px)'}}/>
        </div>
    )
}

export default Banner