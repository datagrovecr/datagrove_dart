import React, { useState } from "react";

function CreatePollResponse(props) {

    return (
        <div>
            <h3>Question Type: { props.questionType }</h3>

            { props.questionType === "mc" && 
            <div contentEditable>
                Multiple Choice Question Response
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