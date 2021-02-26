import React from 'react';
import { connect } from 'react-redux';
import { addMember } from '../actions/dragonListActions';

class DragonList extends React.Component {
  state = {
    newMember: ''
  };

  handleChanges = e => {
    this.setState({ newMember: e.target.value });
  };

  render() {
    return (
      <div>
        <div className="friends-list">
          {this.state.members.map((member, index) => (
            <h4 key={index}>
              {member.name}
              {member.dragonStatus && <i className="fas fa-dragon" />}
            </h4>
          ))}
        </div>
        <input
          type="text"
          value={this.state.newMember}
          onChange={this.handleChanges}
          placeholder="Add new member"
        />
        <button onClick={this.props.addMember()}>Add member</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    members: state.dragonList.members
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMember: (name) => dispatch(addMember(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DragonList);
