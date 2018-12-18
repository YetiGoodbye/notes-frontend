import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import classNames from 'Config/css/_class-names.scss';
import syncStatus from 'Config/dataSyncStatus';

import {getNote} from 'Selectors';
import {updateNote} from 'Actions';

import WithBemHelper from 'CommonComponents/WithBemHelper';
import LoadingIndicator from 'CommonComponents/LoadingIndicator';

import NoteEditor from 'Components/NoteEditor';

class Note extends WithBemHelper{

  render(){
    const {note} = this.props;

    if (!note) return <LoadingIndicator />;

    switch (note.status) {
      case syncStatus.OK:
        return <NoteEditor />
      default:
        return <LoadingIndicator />;
    }
    return <NoteEditor />;
  }

  componentDidUpdate(){
    const {note, match, updateNote} = this.props;
    if (!note || note.status === syncStatus.NEED_UPDATE) {
      updateNote(match.params.id || 0);
    }
  }

  componentDidMount(){
    const {note, match, updateNote} = this.props;
    if (!note || note.status === syncStatus.NEED_UPDATE) {
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
