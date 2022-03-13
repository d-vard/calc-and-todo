import {useContext} from "react";
import CalcContext from "../CalcContexts/CalcContext";

function Math() {
    let {inpVal, setInpVal} = useContext(CalcContext);
    return (
        <div className={'math_buttons btn_box'}>
            <button value="sqrt"><img src="img/sqrt.svg" alt="" /></button>
            <button value="%"><img src="img/math3.svg" alt="" /></button>
            <button value="1/x"><img src="img/math5.svg" alt="" /></button>
            <button value="=" onClick={function (){
                setInpVal('' + eval(inpVal))
            }}><img src="img/math7.svg" alt="" /></button>
        </div>
    )
}
export default Math