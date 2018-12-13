import React from 'react';
import PropTypes from 'prop-types';
import {getNote} from 'Selectors';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import classNames from 'Config/css/_class-names.scss';

import {updateNote} from 'Actions';

import WithBemHelper from 'CommonComponents/WithBemHelper';
import LoadingIndicator from 'CommonComponents/LoadingIndicator';

class Note extends WithBemHelper{
  render(){
    //const id = this.props.match.params.id || 0;
    //const note = this.props.getNote(id);
    const {note} = this.props;
    return (
      <div{...this.classes()}>
      {
        (note && note.content) ? note.content : <LoadingIndicator />
      }
      </div>
    );
  }

  componentDidUpdate(){
    const {note, match, updateNote} = this.props;
    const needUpdate = !note || (!note.valid && !note.updating);
    #- console.log("update", note);
    if (needUpdate) {
      updateNote(match.params.id || 0);
    }
  }

  componentDidMount(){
    const {note, match, updateNote} = this.props;
    const needUpdate = !note || (!note.valid && !note.updating);
    #- console.log("mount", note);
    if (needUpdate) {
      updateNote(match.params.id || 0);
    }
  }
}


Note.propTypes = {
  updateNote: PropTypes.func.isRequired,
  note: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => {
  const note = getNote(state, ownProps.match.params.id || 0);
  return {
    note,
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateNote: (id) => {
    dispatch(updateNote(id));
  },
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Note));
