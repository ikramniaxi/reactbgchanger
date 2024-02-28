 
import { useState } from 'react';
import './App.css'
import Card from './components/Card'
function App() {
  // const [count, setCount] = useState(0)
  const [color,setColor]=useState("green");
  


  // let myObj={
  //   username:"ikram",
  //   age:23
  // };

  return(
   <div className='w-full h-screen'
   style={{backgroundColor:color}}>

<button onClick={()=>setColor("blue")} className="flex items-center px-4 py-3 text-white bg-blue-500 hover:bg-blue-400">Blue</button>
<button onClick={()=>setColor("yellow")} className="flex items-center px-4 py-3 mt-3 text-white bg-yellow-500 hover:bg-yellow-400">yellow</button>


   
{/* <h1 className="text-3xl font-bold underline bg-green-600">
      Hello world!
    </h1>
    <Card username="ikram" contact={123939}/>
    <Card username="Niazi" btnTxt="visit me"/> */}

   </div>


 
  )
}

export default App
