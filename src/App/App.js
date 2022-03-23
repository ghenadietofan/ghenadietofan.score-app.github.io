import image from "./main.jpg";
import Score from './Score'
import react,{useState,useEffect} from "react"
import './style.css';
import Footer from './footer.js'
function App() {
  const [score1,setScore1]=useState(0);
  const [score2,setScore2]=useState(0);
  const [name1,setName1]=useState("");
  const [name2,setName2]=useState("");
  const [set1,setSet1]=useState(0);
  const [set2,setSet2]=useState(0);
  const [isName,setIsName]=useState(false);
  function check(){
    console.log(score1,score2);
    if(score1-score2>1 && score1>24)return 1;
    else if(score2-score1>1&&score2>24)return 2;
    else return 0;
  }
  function reset(val){
    if(val==1)setSet1(set1+1);
    else setSet2(set2+1);
    setScore1(0);
    setScore2(0);
  }
  function get_name(){
    let name1=prompt("Numele echipei I")
    let name2=prompt("Numele echipei II")
    setName1(name1);
    setName2(name2);
    setIsName(true);
    console.log(isName);
  }
  return (
    
   <div className="container">
    {isName?"":get_name()}
     <div className="player">
      <h1 className="name">{name1}</h1>
     <Score score={score1} setScore={setScore1}check={check}reset={reset}></Score>
     <br></br>
     <div className="set">
     <button onClick={()=>set1>0?setSet1(set1-1):setSet1(0)}>-</button>
     <h4>{set1}</h4>
     <button onClick={()=>setSet1(set1+1)}>+</button>
     </div>
     </div>
     <div className="main-img">
       <img src={image}></img>
       <button onClick={()=>{setSet1(0);setSet2(0);setScore1(0);setScore2(0)}}>Reset</button>

       </div>
     <div className="player">
     <h1 className="name">{name2}</h1>
     <Score score={score2} setScore={setScore2} check={check}reset={reset}></Score>
      <br></br>
      <div className="set">
      <button onClick={()=>set2>0?setSet2(set2-1):setSet2(0)}>-</button>
      <h4>{set2}</h4>
      <button onClick={()=>setSet2(set2+1)}>+</button>
      </div>
     </div>
     <Footer></Footer>
   </div>
  );
}

export default App;
