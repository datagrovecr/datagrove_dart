import React, { useState } from "react";
import PollBuilderMenu from "./PollBuilderMenu";

function CreatePollResponse(props) {

    return (
        <div>
            {/* <h3>Question Type: { props.questionType }</h3> */}

            { props.questionType === "mc" && 
            <div>
                <div contentEditable>
                    Multiple Choice Question Response
                </div> 

                <PollBuilderMenu />
            </div>
            }

            { props.questionType === "cb" && 
            <div contentEditable>
                Checkbox Question Response
            </div> 
            }

            { props.questionType === "ud" && 
            <div contentEditable>
                Up/Down Question Response
            </div> 
            }

            
        </div>
    )
}

export default CreatePollResponse;