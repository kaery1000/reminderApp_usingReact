import React from 'react'

// creating a stateless functional componenet for action
const Action = (props) => (
    <div>
        <button className="big-button"
            disabled = {!props.hasOption}
            onClick = {props.handlePick}
        >
            What should I do?</button>
    </div>
)

export default Action