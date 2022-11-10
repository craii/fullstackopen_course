import React from 'react'

const PersonForm = (props) => {
    return(
        <div>
        <form onSubmit={props.addContact}>
        <div>
          name: <input value={props.newName} onChange={props.onNameChangeHandler} onCompositionEnd={props.onCompositionEndHandler}/>
        </div>

        <div>
          number: <input value={props.newNum} onChange={props.onNumberChangeHandler}/>
        </div>

        <div>
          <button type="submit" onClick={props.onClickHandler}>add</button>
        </div>

      </form>
        </div>
    )
};

export default PersonForm;