import "./Welcome.css";
import {useHistory} from 'react-router-dom'


import img1 from "./1.png"
import img2 from "./2.png"
import img3 from "./3.png"
import img4 from "./4.png"
import img5 from "./5.png"
import img6 from "./6.png"
import img7 from "./8.png"
import wave1 from "./wave1-01.svg"

import AppIonc from "./feed-up-01.svg"

export default function Welcome() {
    const history = useHistory()
    return (
        <div className="WelcomePage" >
        <img className="wave1" src={wave1} alt="backWave1" />


            <button onClick={()=>{
                history.push("/user/signin")
            }} className="login" >LOGIN</button>
            <img className="AppIcon" src={AppIonc} alt="icon" />

<div className="WelcomeADD" >
<div className="Imges" >
<img className="img1" src={img1} alt="images" />
<img className="img3" src={img3} alt="images" />
<img className="img2" src={img2} alt="images" />
<img className="img4" src={img4} alt="images" />
<img className="img5" src={img5} alt="images" />
<img className="img6" src={img6} alt="images" />
<img className="img7" src={img7} alt="images" />

</div>


<h1 className="WelcomeText" >Let's Get Started</h1>


</div>


        <button onClick={()=> history.push("/user/signup")} className="SIGN-UPBTn" >SIGN UP</button>
        


        </div>
    )
}
