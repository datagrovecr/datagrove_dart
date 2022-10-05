import React from "react";

function PollBuilderMenu() {

    let pollProps = {
        questions: [],
    }

    return (
        <div className="flex border-2 border-white-100 rounded-sm m-0 p-0">
            <div className="delete-div pl-2 m0">
                <button>
                    <img className="h-9" src="../../../remove.png" alt="Delete poll question icon"/>
                </button>
            </div>

            <div className="add-div pl-2 m-0">
                <button>
                    <img src="../../../plus.png"  alt="Add poll question icon"/>
                </button>
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