import React from "react";

function PollQuestionBuilderMenu(props) {
    return(
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">Poll Response Options</h4>
                </div>
                
                <div className="modal-body">
                    <div className="multiple-choice-div">

                    </div>

                    <div className="checkbox-div">

                    </div>

                    <div className="up-down-div">

                    </div>
                </div>

                <div className="modal-footer">
                    <button onClick={ props.onClose } className="modal-close-btn">Close</button>
                </div>
            </div>
        </div>
    )
}

export default PollQuestionBuilderMenu;