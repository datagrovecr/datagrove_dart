import React, { useState } from "react";
import PollQuestionBuilderMenu from "./PollQuestionBuilderMenu";

function PollBuilderMenu(props) {
    var [showPollOptions, setShowPollOptions] = useState<boolean>(false);
    var [responseOption, setResponseOptions] = useState<string>("Add response option");

    let pollProps = {
        // questions: [],
        type: "mc"
    }

    function handleAddResponse() {
        setShowPollOptions(!showPollOptions);
    }

    function handleResponseClick(e) {
        setResponseOptions("");
        console.log("e.target:", e.target);
        // setResponseOptions(e.target.innerHTML);

    }

    return (
        <div>
            <div className="flex border-2 border-white-100 rounded-sm m-0 p-2 max-w-max">
                <div className="delete-div pl-2 m-0 flex justify-center">
                    
                    {/* <h1>{ props.questionType }</h1> */}

                    <button>
                        <img className="m-0" src="../../../remove.png" alt="Delete poll question icon"/>
                    </button>
                </div>

                <div className="add-div pl-2 m-0 flex justify-center">
                    <button onClick={ handleAddResponse }>
                        <img className="m-0" src="../../../plus.png"  alt="Add poll question response icon"/>
                    </button>

                    {/* <PollQuestionBuilderMenu onClose={ ()=> setShowPollOptions(false) } show={ showPollOptions } /> */}

                    {/* { showPollOptions &&
                        <PollQuestionBuilderMenu onClose={ ()=> setShowPollOptions(false) } />
                        <PollQuestionBuilderMenu props={ pollProps } />
                    } */}

                </div>

                <div className="move-div px-2 m-0 flex justify-center">
                    <button>
                        <img className="m-0" src="../../../move.png"  alt="Move poll question icon"/>
                    </button>
                </div>
            </div>

            <div className="response-display-div">
                { showPollOptions &&
                    <div contentEditable={ true } onClick={ handleResponseClick }>
                        <h3>{ responseOption }</h3>
                    </div>
                }

            </div>
        </div>
    )
}

export default PollBuilderMenu;