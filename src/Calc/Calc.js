import React from "react";
import CalcHeader from "./CalcHeader";
import CalcNav from "./CalcNav";
import CalcMain from "./CalcMain/CalcMain";

function Calc() {
    return (
        <div className={'calc'}>
            <CalcHeader/>
            <div className="calc_body">
                <div className="calc_bg">
                    <CalcNav/>
                    <CalcMain/>
                </div>
            </div>
        </div>
    )
}

export default Calc