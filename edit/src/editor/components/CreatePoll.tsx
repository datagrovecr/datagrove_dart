import React, { useState } from "react";

type PollProps = {
    pollText: string;
}

type PollState = {
    count: number;
}

class CreatePoll extends React.Component<PollProps, PollState> {
    // const [count, setCount] = React.useState<PollState>({
    //     count: 0,
    // });
    
    const [count, setCount] = React.useState<number>(0);

    // React.useEffect(() => {
    //     setCount(12121212121212);
    // }, []);

    state: PollState = {
        count: 0,
    };

    increaseVoteCount() {
        setCount((this.state.count)++);
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