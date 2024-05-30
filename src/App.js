import React,{useState} from 'react';
import './index.css';
import ListTag from './ListTag';
 const App=()=>
 {
       const [input,setInput]=useState("");
       const [arr,setArr]=useState([]);

   const IListF=(event)=>
   {
     setInput(event.target.value);

   }
   const BtnFRemove=(id)=>{
      console.log("deleted");
      setArr((pva)=>
      {

            return pva.filter((fvalue,findex)=>
         {
                   return findex !== id;
         })

      })
      

   }
   const Clicked=()=>
   {



      setArr((pvalue)=>
      {
         return [...pvalue,input];
      })
      
      setInput('');

   }
  

   













    return(<>
<div className="maindiv">
<div className="centerdiv">
   <br/>
   <h1 className="heading">ToDo List</h1>
   <br/>
   <input type='text' placeholder='Add a item' onChange={IListF} value={input}  />
   <button onClick={Clicked} >+</button>
   <ol>
     { arr.map((val,index)=>
      {
                   return <ListTag list={val}  key={index} id={index} onSelect={BtnFRemove} />
      })}
     
   </ol>
</div>



</div>
        
    </>);
 }


export default App;
