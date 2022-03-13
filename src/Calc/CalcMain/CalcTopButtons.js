import {useContext} from "react";
import CalcContext from "../CalcContexts/CalcContext";

function CalcTopButtons(){
    let {inpVal, setInpVal} = useContext(CalcContext);
    return (
        <div className={'calc_top_buttons'}>
            <div className="square"></div>
            <button onClick={function (e){
                setInpVal(inpVal.slice(0,-1))
            }}><img src="img/Backspace.svg" alt=""/></button>
            <button onClick={function (){
                setInpVal('')
            }}><img src="img/Union.svg" alt=""/></button>
            <button onClick={function (){
                setInpVal('')
            }}><img src="img/c.svg" alt=""/></button>
        </div>
    )
}
export default CalcTopButtons