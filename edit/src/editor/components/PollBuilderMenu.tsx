import React, { useState } from "react";
import PollQuestionBuilderMenu from "./PollQuestionBuilderMenu";

function PollBuilderMenu(props) {
    const [showPollOptions, setShowPollOptions] = useState<boolean>(false);

    let pollProps = {
        // questions: [],
        type: "mc"
    }

    function handleAddResponse() {
        setShowPollOptions(!showPollOptions);
    }

    return (
        <div className="flex border-2 border-white-100 rounded-sm m-0 p-0">
            <div className="delete-div pl-2 m0">
                
                {/* <h1>{ props.questionType }</h1> */}

                <button>
                    <img className="h-9" src="../../../remove.png" alt="Delete poll question icon"/>
                </button>
            </div>

            <div className="add-div pl-2 m-0">
                <button onClick={ handleAddResponse }>
                    <img src="../../../plus.png"  alt="Add poll question response icon"/>
                </button>

                {/* <PollQuestionBuilderMenu onClose={ ()=> setShowPollOptions(false) } show={ showPollOptions } /> */}

                { showPollOptions &&
                    // <PollQuestionBuilderMenu onClose={ ()=> setShowPollOptions(false) } />
                    <PollQuestionBuilderMenu props={ pollProps } />
                }
            </div>

            <div className="move-div px-2 m-0">
                <button>
                    <img src="../../../move.png"  alt="Move poll question icon"/>
                </button>
            </div>
        </div>
    )
}

export default PollBuilderMenu;