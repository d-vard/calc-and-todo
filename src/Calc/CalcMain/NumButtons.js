import {useContext} from "react";
import CalcContext from "../CalcContexts/CalcContext";

function NumButtons() {
    let {inpVal, setInpVal} = useContext(CalcContext);
    let buttons = [
        {
            val: 7,
            src: 'img/7.svg',
        },
        {
            val: 8,
            src: 'img/8.svg',
        },
        {
            val: 9,
            src: 'img/9.svg',
        },
        {
            val: '/',
            src: 'img/math1.svg',
        },
        {
            val: 4,
            src: 'img/4.svg',
        },
        {
            val: 5,
            src: 'img/5.svg',
        },
        {
            val: 6,
            src: 'img/6.svg',
        },
        {
            val: '*',
            src: 'img/math2.svg',
        },
        {
            val: 1,
            src: 'img/1.svg',
        },
        {
            val: 2,
            src: 'img/2.svg',
        },
        {
            val: 3,
            src: 'img/3.svg',
        },
        {
            val: '-',
            src: 'img/math4.svg',
        },
        {
            val: 0,
            src: 'img/0.svg',
        },
        {
            val: 'minus',
            src: 'img/+-.svg',
        },
        {
            val: '.',
            src: 'img/dot.svg',
        },
        {
            val: '+',
            src: 'img/math6.svg',
        },
    ]
    return (
        <div className={'num_buttons btn_box'}>
            {
                buttons.map(function (el, index) {
                    return <button key={index} onClick={
                        (e) => {
                            let val = e.target.dataset.val
                            if (val === 'minus') {
                                return ''
                            }
                            if (val === '+' || val === '-' || val === '/' || val === '*') {
                                const lastItem = inpVal.charAt(inpVal.length - 1)
                                if (lastItem === '+' || lastItem === '-' || lastItem === '/' || lastItem === '*') {
                                    return ''
                                }
                            }
                            setInpVal(inpVal + val);
                        }
                    }
                                   data-val={el.val}><img src={el.src} alt={el.val} data-val={el.val}/></button>
                })
            }
        </div>
    )
}

export default NumButtons