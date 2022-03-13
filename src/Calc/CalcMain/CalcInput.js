import {useContext} from "react";
import CalcContext from "../CalcContexts/CalcContext";

function CalcInput() {
    let {inpVal, setInpVal} = useContext(CalcContext);

    function delLast(event) {
        event.target.value = event.target.value.slice(0, -1);
    }

    return (
        <div className={'input_box'}>
            <input placeholder={'0'} type="text" value={inpVal} onChange={(e) => {
                let item = e.nativeEvent.data;
                if (!item) {
                    return ''
                }
                if (65 <= item.charCodeAt() && item.charCodeAt() <= 122) {
                    delLast(e)
                }
                if (item === '+' || item === '-' || item === '/' || item === '*') {
                    const lastItem = inpVal.charAt(inpVal.length - 1)
                    if (lastItem === '+' || lastItem === '-' || lastItem === '/' || lastItem === '*') {
                        delLast(e)
                    }
                }
                setInpVal(e.target.value)
            }}/>
        </div>
    )
}

export default CalcInput