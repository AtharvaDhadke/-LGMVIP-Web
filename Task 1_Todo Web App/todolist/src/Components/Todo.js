import React, {useState, useEffect} from 'react';
import "./style.css";

const getLocalData = () => {
    const lists = localStorage.getItem("todolist");

    if(lists)
    {
        return JSON.parse(lists);
    }else{
        return[];
    }
};

const Todo = () => {

    const[inputData, setInputData] = useState("");
    const[items, setItems] = useState(getLocalData());
    const[isEditItem, setisEditItem] = useState("");
    const [toggleButton, setToggleButton] = useState(false);


    const addItem = () =>{
        if(!inputData){
            alert("Plz fill data");
        }
        else if(inputData && toggleButton) {
            setItems(
                items.map((curElem)=> {
                    if(curElem.id === isEditItem){
                        return{...curElem, name:inputData}
                    }
                    return curElem;
                })
            );

            setInputData("");
            setisEditItem(null);
            setToggleButton(false);
                
        }
        else{
            const myNewInputData = {
                id: new Date().getTime().toString(),
                name: inputData,
            };
            setItems([...items, myNewInputData]);
            setInputData("");
        }
    };

    const deleteItem = (index)=> {
        const updatedItems = items.filter((curElem)=> {
            return curElem.id !== index;
        });
        setItems(updatedItems);
    }

    const editItem = (index) =>{
        const item_todo_edited = items.find((curElem) =>{
            return curElem.id === index;
        });

        setInputData(item_todo_edited.name);
        setisEditItem(index);
        setToggleButton(true);
    };


    const removeAll=()=>{
        setItems([]);
    }

    useEffect(()=>{
        localStorage.setItem("todolist", JSON.stringify(items));
    }, [items]);

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          
                <img src="./images/todo.jpg" className='image' alt="todologo" />
                <figure><figcaption><h2>Add your Todo Tasks</h2></figcaption></figure>
           

            <div className="addItems">
                 <input type="text" placeholder='  Add Items ' className='form-control' 
                 value={inputData}
                 onChange={(event) => setInputData(event.target.value)}
                 />

                {toggleButton ? 
                    (<i className="fa fa-edit add-btn" onClick={addItem}></i>) : (<i className="fa fa-plus add-btn" onClick={addItem}></i>)
                }
                 
            </div>

            <div className="showItems">
                {items.map((curElem)=> {
                    return(
                        <div className="eachItem" key={curElem.id}><h3>{curElem.name}</h3>
                            <div className="todo-btn">
                            
                            

                            <i className="far fa-edit add-btn" onClick={()=> editItem(curElem.id)}></i>

                            <i className="far fa-trash-alt add-btn" onClick={()=> deleteItem(curElem.id)}></i>

                            
                            </div>
                         </div>
                    );
                })}
            </div>


            <div className="showItems">
                <button className='btn effect04' data-sm-link-text="Remove All" onClick={removeAll}><span>Remove All</span></button>
            </div>

            
            
        </div>
      </div>
    </>
  )
}

export default Todo
