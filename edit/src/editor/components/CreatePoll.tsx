import React, { useState } from "react";
// import DisplayPoll from "../components/DisplayPoll";
import Counter from "../components/Counter";

function CreatePoll() {
    const [count, setCount] = useState<number>(0);
    const [pollQuestion, setPollQuestion] = useState<string>("");
    const [pollQuestionVisibility, setPollQuestionVisibility] = useState<boolean>(false);
    const [formVisibility, setFormVisibility] = useState<boolean>(false);
    const [hoverText, setHoverText] = useState<boolean>(false);
    const [response, setResponse] = useState<string>("");
    const [responseOptions, setResponseOptions] = useState<string[]>([]);
    const [voteReady, setVoteReady] = useState<boolean>(false);
    const [questionInput, setQuestionInput] = useState<string>("");
    const [responseInput, setResponseInput] = useState<string>("");
    const [disableQuestion, setDisableQuestion] = useState<boolean>(false);
    const [disableResponse, setDisableResponse] = useState<boolean>(false);

    const pollProps = {
        question: pollQuestion,
        responses: responseOptions,
        votes: 0
    }

    function handleInputChange(e) {
        const name = e.target.value;
        setPollQuestion(name);
        setQuestionInput(name);
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
        setPollQuestionVisibility(true);
        setQuestionInput("");
        e.currentTarget.disabled = true;
        setDisableQuestion(true);
    }
    
    function submitPoll() {
        setVoteReady(true);
        setDisableResponse(true);
    }

    return (
    <div className="bg-yellow-100">
        
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

        <div>
            <button className="create-poll-btn p-0 ml-5" onMouseOver={ () => setHoverText(true) } onMouseOut={ () => setHoverText(false)} onClick={ changeFormVisibility }>
                <img src="../../../plus.png" /> { hoverText && <p className="p-0">Create Poll</p> }

            </button>
        </div>
        
        <div className="create-poll-form-div ml-5 flex">
            { formVisibility == true && voteReady == false &&
            
            <div className="visible-poll-div flex items-start justify-center">
                <div className="build-poll-div basis-1/2">
                    <div className="mb-10">
                        <label>Poll Question: 
                            <input className="ml-2" 
                                type="text" 
                                value={ questionInput }
                                name="pollQuestion" 
                                onChange={ handleInputChange }
                                disabled={ disableQuestion }>
                            </input>
                        </label>

                        <br></br>

                        <button onClick={ handleSubmitQuestion }>Add Poll Question</button>
                    </div>

                    <div className="my-10 basis-1/2">
                        <label>Response: 
                            <input className="ml-2" 
                                type="text" 
                                value={ responseInput }
                                name="pollResponse" 
                                onChange={ handleUpdateResponse}></input>
                        </label>

                        <br></br>                

                        <button className="" onClick={ handleSubmitResponse }>
                            Add Response Option
                        </button>
                    </div>
                </div>
                    
                <div className="poll-display-div p-0 m-0 align-top bg-red-400">
                    <div className="bg-red-100">
                    { pollQuestionVisibility && 
                        <h1>{ pollQuestion }</h1>
                    }
                    </div>

                    { responseOptions.map((e, i) => {
                            return (
                                <div key={ i }>
                                    <h2 className="py-0">{ i + 1 }: { e }</h2>
                                </div>
                            )
                        })}

                </div>

            </div>     
            
            }
        </div>

        <div>
            { formVisibility == true && voteReady == false &&
                <button className="bg-green-300 p-2 ml-5 my-0 rounded h-10" onClick={ submitPoll }>Finish Poll</button>
            }
        </div>
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