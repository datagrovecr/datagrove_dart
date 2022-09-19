import React, { useState } from "react";

type PollProps = {
    pollText: string;
}

function CreatePoll(props) {
    const [count, setCount] = useState<number>(0);
    const [pollQuestion, setPollQuestion] = useState<string>("");

    function handleInputChange(e) {
        const target = e.target;
        const name = target.value;
        setPollQuestion(name);
    }

    return (
    <div>
        <h1>{ pollQuestion }</h1>

        <label>Poll Question: 
            <input type="text" name="pollQuestion" onChange={ handleInputChange }></input>
        </label>
       
       <br></br>

        <button onClick={() => setCount(count => count + 1)}>Votes: { count }</button>

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