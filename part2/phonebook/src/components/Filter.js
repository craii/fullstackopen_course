import React from 'react'

const Filter = (props) => {
    return (
        <div>
            <form>
                <p>
                filter shown with  <input value={props.value} onChange={props.onChange}/>
                </p>
            </form>
        </div>
    );
};

export default Filter;