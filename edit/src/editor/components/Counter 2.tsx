import React, { useState } from "react";

function Counter({ response }) {
    let [count, setCount] = useState(0);

    function handleClick() {
        count++;
        setCount(count);
    };

    return (
        <div className="flex items-center">     
            <div className="m-1">
                <button className="block bg-blue-200 rounded p-2" onClick={ handleClick }>Vote
                </button>
            </div>

            <div className="m-1">
                <p>{ response }</p>
            </div>

            <div className="m-1">
                <p>Total Votes: { count }</p>
            </div>
        </div>
    )
}

export default Counter;