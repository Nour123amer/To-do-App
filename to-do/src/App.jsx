import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [text ,setText] = useState('');
  let [tasks ,setTasks] = useState([]);
  let inputText = document.querySelector('.inputText');
  
  function addTask(){
  
   inputText = document.querySelector('.inputText');
   let x= inputText.value;
   setText(x);
  //  tasks.push(x);
   let newTasks =[...tasks,x];
   setTasks(newTasks);
   localStorage.setItem('tasks',JSON.stringify(newTasks));
   setText('');
   clearText();
   console.log(tasks.length -1);
   
  //  displayTask(tasks.length -1);
  }

  // function deleteTask(index){
  //  tasks.splice(index,1);
  // }

  function deleteTask(index){
   let newTasks= tasks.filter((task,i)=> i !== index);
    setTasks(newTasks);
    localStorage.setItem('tasks',JSON.stringify(newTasks));
  }

  

  // function clearText(){
  // inputText.value='';
  // }

  return (
    <>
    <div className='container w-1/2 mx-auto'>
      <h1 className='text-blue-950 text-2xl font-bold mb-4'>To Do List Application</h1>
      <div className=''>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} className=' border mr-4  text-blue-600 border-gray-300 w-full px-2 py-1 rounded-md inputText mb-8' />
        <button onClick={addTask} className='bg-blue-700 text-white px-2 py-1 rounded-md mb-4'> Add Todo</button>
       
      </div>
      <div >
        {tasks.map((task,index)=>(
          <div className='flex gap-4 mx-auto w-full '>
            <div className='w-full border border-gray-400 px-2 py-1 h-8 rounded-md text-blue-600 mb-3 font-bold'>{task}</div>
       <i onClick={()=>{deleteTask(index)}} className="fa-solid fa-trash text-red-600 cursor-pointer bg-gray-300 w-8 h-8 pt-2 rounded-full"></i> 
       </div>
        ))}
     
      </div>
    </div>
    </>
  )
}

export default App
