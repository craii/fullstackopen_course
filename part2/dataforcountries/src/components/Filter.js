import React from 'react'


const Filter = (props) => {
    return (
        <div>
            <form>
                <p>
                Find Counties  <input value={props.value} onChange={props.onChange}/>
                </p>
            </form>
        </div>
    );
};

export default Filter;
