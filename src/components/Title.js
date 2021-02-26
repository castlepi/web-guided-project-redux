import React, { useState, useReducer } from 'react';
import { connect } from "react-redux";

import { initialState, titleReducer } from '../reducers/titleReducer';
import { toggleEditing, updateTitle} from './../actions/titleActions';

const Title = (props) => {
  const [newTitleText, setNewTitleText] = useState();

  const handleChanges = e => {
    setNewTitleText(e.target.value);
  };

  return (
    <div>
      {!props.editing ? (
        <h1>
          {props.title}{' '}
          <i
            className="far fa-edit"
            onClick={() => dispatch(toggleEditing())}
          />
        </h1>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={newTitleText}
            onChange={handleChanges}
          />
          <button
            onClick={() =>
              dispatch(updateTitle(newTitleText))
            }
          >
            Update title
          </button>
        </div>
      )}
    </div>
  );
};

// Step 3: connect components to the store, so that they can:
// * read the state values that are relevant to this compoennt from the store (mapStateToProps)
// * update state in the store by dispatching actions to the reducer (mapDispatchToProps)

// Show which values from the state tree should be provided to this component as props
const mapStateToProps = (state) => {
  return {
    title: state.title,
    editing: state.editing
  };
}

// build dispatching functions that handle state updates as relevant to this component
const mapDispatchToProps = (dispatch) => {
  return {
    toggleEditing: () => dispatch(toggleEditing()),
    updateTitle: (newTitle) => dispatch(updateTitle(newTitle))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Title);
// connect(mapStateToProps, mapDispatchToProps) returns a HOC (aka, a enhancer function)
// we *invoke* that enhancer function on our component in order to "enhance" it with the ability to:
// * read state from the store
// * update the store, by dispatching actions to the reducer
