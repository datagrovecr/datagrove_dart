import React, { useState } from "react";

const PollQuestionBuilderMenu = (props) => {
    let [showModal, setShowModal] = useState(true);
    let [propType, setPropType] = useState([]);
    let [showMCText, setShowMCText] = useState(false);
    let [showCBText, setShowCBText] = useState(false);
    let [showUDText, setShowUDText] = useState(false);
    
    // props.func = "THIS IS A TEST"

    let propsForCreatePoll = propType;

    function handleSelectMC() {
        // setPropType(prevTypes => [...prevTypes, "mc"]);
        setShowModal(false);
        console.log("propType: ", propType);
    }

    function hoverMC() {
        setShowMCText(true);
    }

    function mouseOutMC() {
        setShowMCText(false);
    }

    function handleSelectCB() {
        setPropType(prevTypes => [...prevTypes, "cb"]);
        console.log("propTypes: ", propType);
    }

    function hoverCB() {
        setShowCBText(true);
    }

    function mouseOutCB() {
        setShowCBText(false);
    }

    function handleSelectUD() {
        setPropType(prevTypes => [...prevTypes, "ud"]);
        console.log("propType: ", propType);
    }

    function hoverUD() {
        setShowUDText(true);
    }

    function mouseOutUD() {
        setShowUDText(false);
    }
    
    return(
        <div className="modal">
            { showModal && 
            <div className="modal-content bg-yellow-200 rounded p-2 flex flex-col ">

                <div className="modal-header">
                    <h2 className="modal-title p-0 m-0">Poll Response Options</h2>
                    {/* <h1>Test props: { props.props.type }</h1> */}
                </div>
                
                <div className="modal-body ml-2">
                    <div className="multiple-choice-div p-0 m-0">
                        <button onClick={ handleSelectMC } onMouseOver={ hoverMC } onMouseOut = { mouseOutMC } className="p-0 m-0"><h4>Multiple Choice</h4></button>
                        { showMCText && 
                        <p className="p-0 m-0"><em>Users may select one option from many</em></p>
                        }
                    </div>

                    <div className="checkbox-div">
                        <button onClick={ handleSelectCB } onMouseOver={ hoverCB } onMouseOut={ mouseOutCB }><h4>Checkbox</h4></button>
                        { showCBText &&
                        <p className="p-0 m-0"><em>Users may select multiple options</em></p>
                        }
                    </div>

                    <div className="up-down-div">
                        <button onClick={ handleSelectUD } onMouseOver={ hoverUD } onMouseOut={ mouseOutUD }><h4>Up/Down Vote</h4></button>
                        { showUDText &&
                        <p className="p-0 m-0"><em>Users may vote to increase or decrease an option's ranking</em></p>
                        }
                    </div>
                </div>

                <div className="modal-footer ">
                    <button onClick={ props.onClose } className="modal-close-btn bg-red-400 rounded px-2 border border-gray-400">Close Modal</button>
                </div>
            </div>
            }
        </div>
    )
}

export default PollQuestionBuilderMenu;