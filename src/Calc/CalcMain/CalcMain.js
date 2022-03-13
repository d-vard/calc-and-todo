import React, {useEffect, useState} from "react";
import CalcInput from "./CalcInput";
import CalcTopButtons from "./CalcTopButtons";
import CalcButtonsLeft from "./CalcButtonsLeft";
import NumButtons from "./NumButtons";
import Math from "./Math";
import CalcContext from "../CalcContexts/CalcContext";

function CalcMain() {
    let [inpVal, setInpVal] = useState('');
    useEffect(function (){
    },[inpVal])
    return (
        <div className={'calc_main'}>
            <CalcContext.Provider value={{inpVal,setInpVal}}>
                <CalcInput/>
                <CalcTopButtons/>
                <div className={'calc_block'}>
                    <CalcButtonsLeft/>
                    <NumButtons/>
                    <Math/>
                </div>
            </CalcContext.Provider>
        </div>
    )
}

export default CalcMain