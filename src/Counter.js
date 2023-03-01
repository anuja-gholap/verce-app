
import React, { useState } from 'react';

const Counter = () => {

    const [count, setCount] = useState(0);
    const incrNumb = () => {
        setCount(count + 1);
    }
    const decrNumb = () => {
        setCount(count - 1);
    }
    const reset = () => {
        setCount(0);
    }
    return (
        <>
            <div className='main_div'>
                <div className='center_div'>
                    <h1>{count}</h1>
                    <div className='btn_div'>
                        <button onClick={incrNumb}>Increament</button>
                        <button onClick={decrNumb} disabled={count === 0}>Decreament</button>
                        <button onClick={reset} disabled={count === 0}>Reset</button>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Counter;