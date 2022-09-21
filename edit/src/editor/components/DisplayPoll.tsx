import React, { useState } from "react";

function DisplayPoll({ testData }) {
    return(
        <div className="bg-blue-200 my-5 p-5">
            <h1>{ testData.question } </h1>
            
            { testData.responses.map((e, i) => {
                return (
                    <div className="flex flex-row items-center my-5">
                        <div key={ i } className="">
                            <button className="bg-green-300 p-0 m-0 rounded h-10 w-12">vote</button>
                        </div>
                        <div className="pl-5 items-center justify-center">
                            <h2 className="p-0 m-0">{ i + 1 }. { e }</h2>
                        </div>
                    </div>
                )
            })}
            
        </div>
    )


}

export default DisplayPoll;