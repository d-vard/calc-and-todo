import {useState, useEffect} from "react";
import Context from "./context";
import ToDoItem from "./ToDoItem";
function Todo() {
    let [val, setVal] = useState('');
    let [toDo, setToDo] = useState([])
    useEffect(function () {
        let toDoArray = localStorage.getItem('todo');
        if (JSON.parse(toDoArray) !== null) {
            setToDo(JSON.parse(toDoArray));
        }
    }, [])
    useEffect(function () {
        localStorage.setItem('todo', JSON.stringify(toDo));
    }, [toDo]);
    let remove = (id) => {
        setToDo(toDo.filter((el) => el.id !== id));
    }
    let toggleCheck = (id) => {
        setToDo(toDo.map(el => {
            if (el.id === id) {
                el.check = !el.check
            }
            return el
        }))
    }
    let change = (id,value)=>{
        setToDo(toDo.map(el => {
            if (el.id === id) {
                el.val = value;
            }
            return el
        }))
    }
    return (
        <div className="App">
            <div className="box">
                <input type="text" value={val} onChange={(e) => setVal(e.target.value)}/>
                <button onClick={() => {
                    if (val.length < 3) {
                        return ''
                    }
                    setToDo([...toDo, {
                        'id': new Date(),
                        'val': val,
                        'check': false,
                    }])
                    setVal('')
                }}>add
                </button>
            </div>
            <ul className={'list'}>
                <Context.Provider value={{remove, toggleCheck,change}}>
                    {
                        toDo.map(function (el, index) {
                            return <ToDoItem key={index} id={el.id} val={el.val} check={el.check}/>
                        })
                    }
                </Context.Provider>
            </ul>
        </div>
    );
}

export default Todo;
