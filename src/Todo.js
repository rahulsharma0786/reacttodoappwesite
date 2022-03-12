import React, { useEffect, useState } from "react"
import todo1 from "../src/images/todo2.png"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const getLocalItems=()=>{
    let list=localStorage.getItem("list")
if(list){
    return JSON.parse(localStorage.getItem("list"))
}else{
    return[];
}



}

const Todo=()=>{
const[inputData,setInputData]=useState(" ")
const[items,setItems]=useState(getLocalItems())
const addItem=()=>{
    if(!inputData){

    }else{
setItems([...items,inputData])
setInputData("")
    }
}
const Deleted=(id)=>{
const updateditems=items.filter((elem,ind)=>{
return ind!==id;

})
setItems(updateditems)
}

const removAll=()=>{
 setItems([])   
}
useEffect(()=>{
localStorage.setItem("list",JSON.stringify(items))
},[items])

return(
<>
<div className="todo">
<div className="container text-center pt-5">
<figure>
<img src={todo1} class="todo1" style={{width:"100px",height:"100px",}} alt="todologo" className="bg-danger"/>
<figcaption>Add Your List Here</figcaption>
</figure>

<div className="addItems cinput">
<input type="text" placeholder="Add Item...." value={inputData} onChange={(e)=>setInputData(e.target.value)}/>
<i className="fa fa-plus  add-btn  " title="Add Item" onClick={addItem}></i>
</div>

<div className="showItems">
{
  items.map((elem,ind)=>{
return(
<>
<div className="eachItems" key={ind}>
<h3 className="text-white items" >{elem}</h3>
<i className="far fa-trash-alt add-btn" title="Deleted Item" onClick={()=>Deleted(ind)}></i>
</div>

</>
)
  })

}

</div>

<div className="showItems pt-3 click">
<button className="btn-success text-center" onClick={removAll} >Clear All</button>
</div>
</div>
</div>
</>


)



}
export default Todo;