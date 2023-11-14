import React from 'react';

function Button(props) {
    let {action, title, className, classFront} = props;
    return <button onClick={action} className={className}>
        <span className={classFront}>{title}</span>
        </button>;
}

export default Button