import React from "react";
function CalcHeader(){
    return (
        <div className={'calc_header'}>
            <div className="calc_icon"><img src="img/calc_icon.svg" alt=""/> <span><img src="img/Title.svg" alt=""/></span></div>
            <div className="calc_nav_bar">
                <button className={'collapse'}><img src="img/collapse.svg" alt=""/></button>
                <button className={'expand'}><img src="img/expand.svg" alt=""/></button>
                <button className={'close'}><img src="img/close.svg" alt=""/></button>
            </div>
        </div>
    )
}
export default CalcHeader