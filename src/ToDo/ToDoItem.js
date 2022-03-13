import {useContext, useState} from 'react';
import Context from "./context";

function ToDoItem({check, id, val}) {
    let {remove, toggleCheck, change} = useContext(Context);
    let [itemChange, setChange] = useState(false);
    let [newValue, setNewValue] = useState(val)
    return (
        <li>
            <label>
                <input type="checkbox" checked={check} onChange={() => {
                    toggleCheck(id)
                }}/>
                {
                    itemChange ?
                        <div className={'chengText'}>
                                <input type="text" value={newValue} className={'change'}
                                       onChange={(e) => setNewValue(e.target.value)}/>
                                <button className={'save'} onClick={() => {
                                    change(id, newValue);
                                    setChange(!itemChange);
                                }}>save</button>
                            </div>
                        :
                        <span className={check ? 'check' : ''}>{val}</span>
                }

            </label>
            {
                !itemChange ? <div onClick={() => { setChange(!itemChange) }}>change</div> : ''
            }

            <button onClick={() => {
                remove(id)
            }}>Delete
            </button>
        </li>
    )
}

export default ToDoItem