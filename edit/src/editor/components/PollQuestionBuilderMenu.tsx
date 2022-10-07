import React from "react";

function PollQuestionBuilderMenu(props) {
    return(
        <div className="modal">
            <div className="modal-content bg-yellow-200 rounded p-2 flex flex-col ">
                <div className="modal-header">
                    <h2 className="modal-title p-0 m-0">Poll Response Options</h2>
                </div>
                
                <div className="modal-body ml-2">
                    <div className="multiple-choice-div">
                        <h4>Choose One</h4>
                    </div>

                    <div className="checkbox-div">
                        <h4>Choose Many</h4>
                    </div>

                    <div className="up-down-div">
                        <h4>Up/Down Vote</h4>
                    </div>
                </div>

                <div className="modal-footer ">
                    <button onClick={ props.onClose } className="modal-close-btn bg-red-400 rounded px-2 border border-gray-400">Select</button>
                </div>
            </div>
        </div>
    )
}

export default PollQuestionBuilderMenu;