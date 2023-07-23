import './App.css';
import { useEffect, useState } from "react";
import Axios from "axios";

1.
LEARNING COMPONENTS and PROPS --------------------------------------------------------------

function App() {
    return (
      <div>
          <Job salary={1234} position="manager" company="amazon"/> 
          <Job salary={1254} position="techinion" company="aa"/> 
          <Job salary={234} position="dd" company="bb"/> 
      </div>
    );
}
const Job = (props) =>{
    return(
        <div>
            <h1>
              {props.salary}
            </h1>
            <h1>
              {props.position}
            </h1>
            <h1>
              {props.company}
            </h1>
        </div>
    );
}
// If you are running this file locally then run the files chunk wise and commenting rest all parts
__________________________________________________________________________________________________________________________________________________

2
LEARNING TERNARY-----------------------------------------------------------

function App(){
  const age=12;
  const isGreen =true;
  return (
    <div>
      {age>12?<h1> ram</h1>: <h1> bhardwaj</h1> }
      <h1 style={{color: isGreen? "green":"red"}}> this is color</h1>

      {isGreen &&  <button> this is button</button>  }
      {isGreen? <button> thisisbutton</button> : <p>notabutton</p> }
    </div>

  );
}
// If you are running this file locally then run the files chunk wise and commenting rest all parts
_________________________________________________________________________________________________________________________________________________________________


3.
Traversing to an objects or list

function App(){
  const users = [
    {name : "ram" , age : 324 },
    {name : "rambhars" , age : 32224 },
    {name : "sfs" , age : 321234 }
  ]
  return (
      <div>
          {users.map( (users , key)=>{
              return <h1>{users.name} {users.age}</h1>
          } )}
      </div>
  ); 
}
// If you are running this file locally then run the files chunk wise and commenting rest all parts
______________________________________________________________________________________________________________________________________________________________

4.
Looping with components

function App(){
  const users = [
        {name : "ram" , age : 324 },
        {name : "rambhars" , age : 32224 },
        {name : "sfs" , age : 321234 }
      ];
  return (
    <div>
      {users.map((users,key) =>{
        return  <User name = {users.name} age= {users.age}/>
      })}
    </div>
  );
}

const User=(props)=>{
    return (
      <div> 
        {props.name} {props.age} 
      </div>
    );
}
// If you are running this file locally then run the files chunk wise and commenting rest all parts
____________________________________________________________________________________________________________________________________________________


5.
Object se map use krke agar planet gaseous hai toh rendr else dont useing map , ternary , Components

function App(){
  const planets = [
    { name : "mer" , isGas : false },
    { name : "jup" , isGas : true },
    { name : "ear" , isGas : false },
    { name : "sat" , isGas : true },
    { name : "nep" , isGas : true }
  ];
  return (
      <div>
        {planets.map( (planet, key)=>{
          return  <Planet name = { planet.isGas?planet.name:""}/>
        })}
      </div>
  );
}
const Planet = (props) => {
  return (
    <h1> {props.name} </h1>
  );
}

// If you are running this file locally then run the files chunk wise and commenting rest all parts
__________________________________________________________________________________________________________________________________________________________

6.
Button se counter 

counter and using use State 
function App(){
  const [age, setAge] = useState(0); // whenever value of age changes, the setAge / usState notifies the react App function to rerender the ui and hence the updateed value of age is rendered in the screen
  const incAge=()=>{
    setAge(age+1);
  }
  return (
    <div>
    {age}
        <button onClick={incAge}>Increase Age</button> 
    </div>
  );
}
// If you are running this file locally then run the files chunk wise and commenting rest all parts
_________________________________________________________________________________________________________________________________________________________________

7.
Button pe click ker ne se input wala text h1 form mai input ke bharr bhi render hoga 

function App(){
  const [ inpVal, setVal ] = useState("");
  const write = (event) => {
    setVal(event.target.value);
  };
  return(
    <div>
      <input type="text" onChange={write} />
      <h1>{inpVal}</h1> 
    </div>
  );
}

// If you are running this file locally then run the files chunk wise and commenting rest all parts
_____________________________________________________________________________________________________________________________________________________________

8.
Button pe click kr ne se text gayab and wapis show

function App(){
  const [showText, setText] = useState(true); 
  // const hideOrShow=()=>{
  //    setText(!showText);
  // }
  return(
    <div>
        <button onClick={()=> {
          setText(!showText);
        }}>
          button hai ye 
        </button>
        {showText ===true && <h1 >Text hai ye</h1>}
    </div>
  );
}

// If you are running this file locally then run the files chunk wise and commenting rest all parts
_____________________________________________________________________________________________________________________________________________________________

9.
Button pe Click krne pe text ka color change 

function App(){
  const [col, setCol] = useState("black"); 
  
  return(
    <div>
        <button onClick={()=> { setCol(col === "black"? "red":"black");  }}>  button hai ye    </button>
        {<h1  style={{color : col}}>Text hai ye</h1>}
    </div> 
  );
}


// If you are running this file locally then run the files chunk wise and commenting rest all parts
_____________________________________________________________________________________________________________________________________________________________

10.
Counter

function App(){
  const [num, setVal] = useState(0); 
  
  return(
    <div>
        <button onClick={()=> {setVal(num+1)}}> ADD  </button>
        <button onClick={()=> {setVal(num-1)}}> SUB    </button>
        <button onClick={()=> {setVal(0)}}>  SET ZERO </button>
        {num}
        
    </div> 
  );
}


// If you are running this file locally then run the files chunk wise and commenting rest all parts
_____________________________________________________________________________________________________________________________________________________________

11.
TODO APP - NAIVE 

function App(){
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange=(event)=>{
      setNewTask(event.target.value);
  }
  const addTask=()=>{
    const newTodo = [...todoList, newTask];
    setTodoList(newTodo);
  }
  const deleteTask=(taskName)=>{
    // const arr= todoList.filter((task)=>{
    //   return task!==taskName;
    // })
    const arr = todoList.filter((task)=>  task!==taskName);
    setTodoList(arr);
  }

   return (
      <div>
        <input type="text" placeholder=' Write a Task'  onChange={handleChange}/>
        <button onClick={addTask}> Add Task</button>

        <div className="list">
              {todoList.map((task)=>{
                return( 
                  <div>
                      <h1>{task} </h1>
                      <button onClick={() => deleteTask(task)}> Delete Task</button>
                  </div>
                );
              })}
        </div>

      </div>
   );
}

 Again
function App(){
  const [textList, addTask]= useState([]);
  const [task, addText]= useState("");
  const changeHandler=(event)=>{
      addText(event.target.value);
  }
  const clickHandler=()=>{
      const newtodo = [...textList, task];
      addTask(newtodo);
  }

  const del=(task)=>{
      const arr = textList.filter((text)=>{
        return text!==task;
      })
      addTask(arr);
  }
  return (
    
    <div>
        <input type="text" placeholder='type a Task'  onChange={changeHandler}/>
        <button onClick={clickHandler}> Add Task</button>
        <div>
            {textList.map((task)=>{
                return (
                  <div>
                      <h1> {task}</h1>
                      <button onClick={()=>del(task)}>delete</button>
                  </div>
                )
            })}
        </div>
    </div>
  );
}


// If you are running this file locally then run the files chunk wise and commenting rest all parts
_____________________________________________________________________________________________________________________________________________________________

12.
TODO LIST - PRO

function App(){
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange=(event)=>{
      setNewTask(event.target.value);
  }
  const addTask=()=>{
    const newTodo = [...todoList, newTask];
    setTodoList(newTodo);
  }
  const deleteTask=(taskName)=>{
    // const arr= todoList.filter((task)=>{
    //   return task!==taskName;
    // })
    const arr = todoList.filter((task)=>  task!==taskName);
    setTodoList(arr);
  }
  //const updateTask=(taskName)=>{}

   return (
      <div>
        <input type="text" placeholder=' Write a Task'  onChange={handleChange}/>
        <button onClick={addTask}> Add Task</button>

        <div className="list">
              {todoList.map((task)=>{
                return( 
                  <div>
                      <h1>{task} </h1>
                      <button onClick={() => deleteTask(task)}> Delete Task</button>
                       {/* <button onClick={()=> updateTask(task)}> Update Task</button> */}
                  </div>
                );
              })}
        </div>

      </div>
   );
}


// If you are running this file locally then run the files chunk wise and commenting rest all parts
_____________________________________________________________________________________________________________________________________________________________

13.
UseEffect Hook

import { Text } from './Text';

function App(){
  const[showText, setSHowText]= useState(false);

  return (
    <div>
        <button onClick={()=>{
          setSHowText(!showText);
        }}>
          ShowText
        </button>
        {showText && <Text/>}
    </div>
  );
}
// If you are running this file locally then run the files chunk wise and commenting rest all parts
_____________________________________________________________________________________________________________________________________________________________

14.
Learning Fetch Api => Cat Fact

function App(){

    fetch("https://catfact.ninja/fact").then((res)=> res.json()).then( (data)=> { console.log(data);});
    return (
      <div>
          <button> Generate Cat </button>
          <p> </p>
      </div>
    );
  }


// If you are running this file locally then run the files chunk wise and commenting rest all parts
_____________________________________________________________________________________________________________________________________________________________

15.
Using Axios ... learn Axios
import Axios from "axios";

function App(){
  // fetch("https://catfact.ninja/fact").then((res)=> res.json()).then( (data)=> { console.log(data);});
  Axios.get("https://catfact.ninja/fact").then((res)=>{
      console.log(res.data)
  });

  return (
    <div>
        <button> Generate Cat </button>
        <p> </p>
    </div>
  );
}

// If you are running this file locally then run the files chunk wise and commenting rest all parts
_____________________________________________________________________________________________________________________________________________________________

16.
Using Axios with use Effect and controlling mounting ... + using OnClick on button as well 
Cat Facts

function App(){
  const [generateFact, setGenerateFact] = useState("");
  const fetchCatFact= () =>{
    Axios.get("https://catfact.ninja/fact").then((res)=>{
          setGenerateFact(res.data.fact);
      }); 
  }
  useEffect(()=>{
      fetchCatFact();
  },[]);

  return (
    <div>
        <button onClick={fetchCatFact}> Generate Cat </button>
        <p>{generateFact}</p> 
    </div>
  );
}

// If you are running this file locally then run the files chunk wise and commenting rest all parts
_____________________________________________________________________________________________________________________________________________________________

17.
API  Part 2 // Using just useState 
Age Pridictor 

function App(){
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
  const fetchData= () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
        setAge(res.data);
    })
  }
 
  return (
    <div>
        <input type="text" placeholder=' Ex. Ram...' onChange={(event)=>{setName(event.target.value)}} />
        <button onClick={fetchData}> Pridict Age  </button>
        <h1> Name :{age?.name}</h1>
        <h1> Pridicted age :{age?.age}</h1>
        <h1> Count :{age?.count}</h1>
    </div>
  );
}

// If you are running this file locally then run the files chunk wise and commenting rest all parts
_____________________________________________________________________________________________________________________________________________________________

18.
Excuse generator 
// Try making it yourself
function App (){

  const [text, setText] = useState("");
  const genExc=(place)=>{
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${place}`).then((res)=>{
      setText(res.data[0].excuse);
    })
  }

  return (
    <div>
        <h1>Generate an Excuse</h1>
        <button onClick={()=>genExc("party")} > Party </button>
        <button onClick={()=>genExc("office")}> Office </button>
        <button onClick={()=>genExc("family")}> Family </button>
        <h1>{text}</h1>
    </div>
  );
}

export default App;

// Thankyou 
