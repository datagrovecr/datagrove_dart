import React, { useState } from "react";

function DisplayPoll({ testData }) {
    const [res1, setRes1]=useState<number>(0);
    const [res2, setRes2]=useState<number>(0);
    const [res3, setRes3]=useState<number>(0);
    const [res4, setRes4]=useState<number>(0);
    const [res5, setRes5]=useState<number>(0);

    let [buttons, setButtons]=useState([]);

    function increaseVoteTest4( e, key ) {
        // console.log("testData:", testData.votes);
        
        let res = testData.votes++;

        setRes1(res);

        console.log("res1:", res1);

        // console.groupCollapsed("votes:", testData.votes);
    }
    
    function increaseVoteTest3(key) {
        buttons = buttons.map((button) => {
            if (button.id === key) {
                button.votes = button.votes+1;
            }
            return button;
        });
        setButtons(buttons);
    }
    
    function increaseVoteTest2(e, key) {
        console.log(e.target, key);


    }
    
    function increaseVote(e, key, stateName) {
        // let id=e.target.id; 
        console.log("stateName: ", stateName);
        
        switch(stateName) {
            case "res1":
                let vote1 = res1;
                vote1++;
                setRes1(vote1);
                break;
            case "res2":
                let vote2 = res2;
                vote2++;
                setRes2(vote2);
                break;
            case "res3":
                let vote3 = res3;
                vote3++;
                setRes3(vote3);
                break;
            case "res4":
                let vote4 = res4;
                vote4++;
                setRes4(vote4);
                break;
            case "res5":
                let vote5 = res5;
                vote5++;
                setRes5(vote5);
                break;
        }

        console.log("res1:", res1);
        console.log("res2: ", res2);
    }

    return(
        <div className="bg-blue-200 my-5 p-5">
            <h1>{ testData.question } </h1>
            
            { testData.responses.map((e, i) => {
                let key = i + 1;

                let stateName = `res${ key }`;
                
                return (
                    <div key={ key } className="flex flex-row items-center my-5">
                        <div className="">
                            <button className="bg-green-300 p-0 m-0 rounded h-10 w-12" onClick={ (e) => increaseVote(e, key, stateName) }>vote</button>
                        </div>
                        <div className="pl-5 items-center justify-center">
                            <h2 className="p-0 m-0">{ key }. { e }</h2>
                        </div>
                        <div className="pl-5 m-0 items-center justify-center">
                            <h2 className="p-0 m-0">Total Votes: {  }</h2>
                        </div>


                        {/* { currRes++ }; */}
                    </div>

                )

            })}
            
        </div>
    )


}

export default DisplayPoll;