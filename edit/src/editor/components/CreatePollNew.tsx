import React, { useState } from "react";
import CreatePollResponse from "./CreatePollResponse";

function CreatePollNew() {
    let [questionType, setQuestionType] = useState("");
    let [hideResponseTypeOptions, setHideResponseTypeOptions] = useState(false);

    let pollProps = {
        type: questionType
    }

    function handleMC() {
        setQuestionType("mc");
        setHideResponseTypeOptions(true);
    }

    function handleCB() {
        setQuestionType("cb");
        setHideResponseTypeOptions(true);
    }

    function handleUD() {
        setQuestionType("ud");
        setHideResponseTypeOptions(true);
    }

    return (
        <div>
            <div contentEditable>
                <h1>Add Poll Question</h1>
            </div>

            <div hidden={ hideResponseTypeOptions }>
                <h2>Select Response Type</h2>
                <div>
                    <button className="p-2 m-2 bg-green-200 rounded" onClick={ handleMC }>MC</button>
                    <button className="p-2 m-2 bg-green-200 rounded" onClick={ handleCB }>CB</button>
                    <button className="p-2 m-2 bg-green-200 rounded" onClick={ handleUD }>UD</button>
                </div>

                <div>
                    Type Selected: { pollProps.type }
                </div>
            </div>

            <div>
                Add Response Text

                <CreatePollResponse questionType={ questionType }/>
            </div>
        </div>
    )
}

export default CreatePollNew;