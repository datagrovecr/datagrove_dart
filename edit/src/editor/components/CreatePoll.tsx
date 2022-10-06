import React, { useState } from "react";
// import DisplayPoll from "../components/DisplayPoll";
import Counter from "../components/Counter";
import PollBuilderMenu from "./PollBuilderMenu";
import PollQuestionBuilderMenu from "./PollQuestionBuilderMenu";

function CreatePoll() {
    const [count, setCount] = useState<number>(0);
    const [pollQuestion, setPollQuestion] = useState<string>("");
    const [pollQuestionVisibility, setPollQuestionVisibility] = useState<boolean>(false);
    const [formVisibility, setFormVisibility] = useState<boolean>(false);
    const [hoverText, setHoverText] = useState<boolean>(false);
    const [response, setResponse] = useState<string>("");
    const [responseOptions, setResponseOptions] = useState<string[]>([]);
    const [voteReady, setVoteReady] = useState<boolean>(false);
    const [questionInput, setQuestionInput] = useState<string>("Add Poll Question");
    const [responseInput, setResponseInput] = useState<string>("");
    const [disableQuestion, setDisableQuestion] = useState<boolean>(false);
    const [disableResponse, setDisableResponse] = useState<boolean>(false);

    const pollProps = {
        question: pollQuestion,
        responses: responseOptions,
        votes: 0
    }

    function handleInputChange(e) {
        // const name = e.target.value;

        // const name = e.target.innerHTML;
        
        // console.log("Name: ", name);
        // setPollQuestion(name);
        // setQuestionInput(name);
        // e.target.innerHTML = "";

        setQuestionInput("");
    }

    function handleUpdateResponse(e) {
        const response = e.target.value;
        setResponse(response);
        setResponseInput(response);
    }

    function handleSubmitResponse() {
        setResponseOptions(prevResponses => [...prevResponses, response]);
        setResponseInput("");
    }

    function changeFormVisibility() {
        setFormVisibility(!formVisibility);
    }

    function handleSubmitQuestion(e) {
        const question = document.getElementById('questionDiv').innerHTML;
        
        setPollQuestionVisibility(true);
        setPollQuestion(question);
        setQuestionInput(" ");
        e.currentTarget.disabled = true;
        setDisableQuestion(true);
    }
    
    function submitPoll() {
        setVoteReady(true);
        setDisableResponse(true);
    }

    return (
    <div className="border box-border pt-5 w-full flex flex-row flex-wrap justify-center ">
        <div>
            <PollBuilderMenu />
        </div>
        
        { voteReady && 
            <div className="m-1 p-1">
                {/* <DisplayPoll testData={ pollProps }/> */}
                
                <div>
                    <h1 className="m-0 p-0">{ pollProps.question }</h1>
                </div>

                <div>
                    { pollProps.responses.map((response, index) => {
                        return (
                            <div key={ index }>
                                <Counter response={ response }/>
                            </div>
                        )
                    })}
                </div>

            </div>
        }

        <div className="m-0 p-2" hidden={ formVisibility }>
            <button className="create-poll-btn p-0 ml-5 flex flex-row items-start justify-start" 
                onMouseOver={ () => setHoverText(true) } 
                onMouseOut={ () => setHoverText(false)} 
                onClick={ changeFormVisibility }>
                {/* title="Create Poll" */}
                
                <img className="m-0 p-0"
                    src="../../../plus.png" 
                    // hidden={ formVisibility }
                /> 
                
                { hoverText && 
                    <p className="p-0 mx-2 my-0 italic">Create Poll</p> 
                }

            </button>
        </div>
        
        <div className="create-poll-form-div box-border w-full flex flex-row flex-wrap h-fit justify-start">
            { formVisibility == true && voteReady == false &&
            
            <div className="visible-poll-div p-0 m-0 flex items-start justify-center w-full h-fit">
                <div className="build-poll-div box-border p-0 m-0 w-screen flex flex-col items-end">
                    <div className="mb-2 mb-10 flex justify-center items-end">
                        {/* <label>
                            <input className="ml-2 bg-black-800" 
                                type="text" 
                                placeholder="Poll Question"
                                value={ questionInput }
                                name="pollQuestion" 
                                onChange={ handleInputChange }
                                disabled={ disableQuestion }>
                            </input>
                        </label> */}

                        <div id="questionDiv" onClick={ handleInputChange } contentEditable>
                            { questionInput }
                        </div>

                        <br></br>

                        <button className="bg-green-300 px-1 py-0 mx-2 rounded" onClick={ handleSubmitQuestion }>Add</button>
                    </div>

                    <div className="my-10 flex justify-center items-end">
                        <label>
                            <input className="ml-2" 
                                type="text" 
                                placeholder="Response Option"
                                value={ responseInput }
                                name="pollResponse" 
                                onChange={ handleUpdateResponse}></input>
                        </label>

                        <br></br>                

                        <button className="bg-green-300 px-1 py-0 mx-2 rounded" onClick={ handleSubmitResponse }>
                            Add
                        </button>
                    </div>
                </div>
                    
                <div className="poll-display-div box-border p-0 m-0 w-screen align-top">
                    <div className="">
                    { pollQuestionVisibility && 
                        <div>
                            <h3 className="italic m-0 p-0 text-green-300">Poll Preview</h3>
                            <h1 className="text-gray-50">{ pollQuestion }</h1>
                            <h1 className="text-gray-50">{ questionInput }</h1>
                        </div>
                    }
                    </div>

                    { responseOptions.map((e, i) => {
                            return (
                                <div key={ i }>
                                    <p className="py-0 text-gray-400 break-all">{ i + 1 }: { e }</p>
                                </div>
                            )
                        })}

                </div>

            </div>     
            
            }

            <div>
                { formVisibility == true && voteReady == false &&
                    <button className="bg-green-300 p-2 my-0 rounded" onClick={ submitPoll }>Finish Poll</button>
                }
            </div>
        </div>

        {/* <div>
            { formVisibility == true && voteReady == false &&
                <button className="bg-green-300 p-2 ml-5 my-0 rounded" onClick={ submitPoll }>Finish Poll</button>
            }
        </div> */}
    </div>
    )
}

// ReactDOM.render(
//     <CreatePoll count={ 0 } />,
//     document.getElementById('root')
// );

// type PollProps = {
//     pollText: string;
// }

// type PollState = {
//     count: number;
// }

// class CreatePoll extends React.Component<PollProps, PollState> {
//     // const [count, setCount] = React.useState<PollState>({
//     //     count: 0,
//     // });
    
//     const [count, setCount] = React.useState<number>(0);

//     // React.useEffect(() => {
//     //     setCount(12121212121212);
//     // }, []);

//     state: PollState = {
//         count: 0,
//     };

//     increaseVoteCount() {
//         setCount((this.state.count)++);
//         alert(`Button has been pushed`);
//     }

//     render() {
//         const { pollText } = this.props;
//         const { count } = this.state;
        
//         return (
//             <div>
//                 <p>{ pollText} { count }</p>

//                 <button onClick={ this.increaseVoteCount }>Vote</button>

//             </div>

//         );
//     };
// };

export default CreatePoll;