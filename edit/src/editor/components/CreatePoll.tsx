import React, { useState } from "react";

type PollProps = {
    pollText: string;
}

type PollState = {
    count: number;
}

class CreatePoll extends React.Component<PollProps, PollState> {
    // const [count, setCount] = useState<number>(0)
    
    // static defaultProps = {
    //     pollText: "Count:"
    // }

    state: PollState = {
        count: 0,
    };

    increaseVoteCount() {
        // this.state.count++;
        alert(`Button has been pushed`);
    }

    render() {
        const { pollText } = this.props;
        const { count } = this.state;
        
        return (
            <div>
                <p>{ pollText} { count }</p>

                <button onClick={ this.increaseVoteCount }>Vote</button>

            </div>

        );
    };
};

export default CreatePoll;