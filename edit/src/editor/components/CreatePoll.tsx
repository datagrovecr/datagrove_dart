import React, { useState } from "react";
import DisplayPoll from "../components/DisplayPoll"

type PollProps = {
    pollText: string;
}

function CreatePoll(props) {
    const [count, setCount] = useState<number>(0);
    const [pollQuestion, setPollQuestion] = useState<string>("");
    const [pollQuestionVisibility, setPollQuestionVisibility] = useState<boolean>(false);
    const [formVisibility, setFormVisibility] = useState<boolean>(false);
    const [hoverText, setHoverText] = useState<boolean>(false);
    const [response, setResponse] = useState<string>("");
    const [responseOptions, setResponseOptions] = useState<string[]>([]);
    const [voteReady, setVoteReady] = useState<boolean>(false);

    const pollProps = {
        question: pollQuestion,
        responses: responseOptions
    }

    function handleInputChange(e) {
        const name = e.target.value;
        setPollQuestion(name);
    }

    function handleUpdateResponse(e) {
        const response = e.target.value;
        setResponse(response);
    }

    function handleSubmitResponse() {
        setResponseOptions(prevResponses => [...prevResponses, response]);
    }

    function changeFormVisibility() {
        setFormVisibility(!formVisibility);
    }

    function handleSubmitQuestion() {
        setPollQuestionVisibility(true);
    }

    return (
    <div className="bg-yellow-100">

        { voteReady && 
            <DisplayPoll testData={ pollProps }/>
        }

        <div>
            <button className="create-poll-btn p-0 ml-5" onMouseOver={ () => setHoverText(true) } onMouseOut={ () => setHoverText(false)} onClick={ changeFormVisibility }>
                <img src="../../../plus.png" /> { hoverText && <p className="p-0">Create Poll</p> }

            </button>
        </div>
        
        <div className="create-poll-form-div ml-5 flex">
            { formVisibility == true && voteReady == false &&
            
            <div className="visible-poll-div">
                <div className="build-poll-div basis-1/3">
                    <div className="mb-10">
                        <label>Poll Question: 
                            <input className="ml-2" type="text" name="pollQuestion" onChange={ handleInputChange }></input>
                        </label>

                        <br></br>

                        <button onClick={ handleSubmitQuestion }>Add Poll Question</button>
                    </div>

                    <div className="my-10">
                        <label>Response: 
                            <input className="ml-2" type="text" name="pollResponse" onChange={ handleUpdateResponse}></input>
                        </label>

                        <br></br>                

                        <button className="" onClick={ handleSubmitResponse }>
                            Add Response Option
                        </button>
                    </div>
                </div>
                    
                <div className="poll-display-div p-0 my-10">
                    <div>
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

                <div>
                    <button onClick={() => setVoteReady(bool => true)}>Finish Poll</button>
                </div>
            </div>          

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