import React, { useState } from "react";

type PollProps = {
    pollText: string;
}

function CreatePoll(props) {
    const [count, setCount] = useState<number>(0);
    const [pollQuestion, setPollQuestion] = useState<string>("");
    const [formVisibility, setFormVisibility] = useState<boolean>(false);
    const [hoverText, setHoverText] = useState<boolean>(false);
    const [responseOptions, setResponseOptions] = useState<string[]>([]);

    function handleInputChange(e) {
        const name = e.target.value;
        setPollQuestion(name);
    }

    function handleSubmitResponse(e) {
        const response = e.target.value;
        setResponseOptions(prevResponses => [...prevResponses, response]);
    }

    function changeFormVisibility() {
        setFormVisibility(!formVisibility);
    }

    function handleSubmitQuestion(e) {
        
        alert(pollQuestion);
    }

    return (
    <div>
        
        <div>
            <button className="create-poll-btn p-0" onMouseOver={ () => setHoverText(true) } onMouseOut={ () => setHoverText(false)} onClick={ changeFormVisibility }>
                <img src="../../../plus.png" /> { hoverText && <p className="p-0">Create Poll</p> }

            </button>
        </div>
        
        <div className="create-poll-form-div">
            { formVisibility == true && 
            
            <div>

                <label>Poll Question: 
                    <input type="text" name="pollQuestion" onChange={ handleInputChange }></input>
                </label>

                <br></br>

                <button onClick={ handleSubmitQuestion }>Submit Poll Question</button>
            
                <br></br>

                <label>Response: 
                    <input type="text" name="pollResponse"></input>
                </label>

                <br></br>                
                <button onClick={ handleSubmitResponse }>Submit Response</button>

                <div>
                    <button onClick={ handleSubmitResponse }>
                        Add Response Option
                    </button>
                    { responseOptions.map((e, i) => {
                            return (
                                <div key={ i }>
                                    <h2>{ e }</h2>
                                </div>
                            )
                        })}
                </div>
                <br></br>

                <button onClick={() => setCount(count => count + 1)}>Votes: { count }</button>
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