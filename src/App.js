import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'; 
import Button from './components/Button';
import {useState} from 'react'
import Counter from './components/Counter';


function App() {
  const [counters,setCounters] = useState([]);
  const [index,setIndex] = useState(0);
  
  const deleteCounter = (indexValue) => {
    console.log('delete counter',indexValue);
    let newCounter = [...counters];
    console.log("newCounter",newCounter);
    let dumArr =  newCounter.filter((shiva)=> shiva != indexValue)
    console.log("dum arr",dumArr);
   // newCounter = dumArr;
    setCounters(dumArr)
  }
   
 const displayCounter = () => { 
   const newArr = [...counters,index];
   console.log("new Arr",newArr)
   console.log(index)
   setCounters(newArr);
   setIndex((prev) => prev + 1); 
 }

  return (
   <>
    <div className = "addBtn" >
      <Button  click = {displayCounter} name = "+" />
    </div>
    <div className = "counters">

    {counters.map((item) => <div key = {item} > <Counter index = {item + 1} deleteCounter = {()=>deleteCounter(item)} />  </div> )}
    </div>
   </>
  );
}

export default App;
