import React from 'react';
import PropTypes from 'prop-types';
import {getNote} from 'Selectors';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import classNames from 'Config/css/_class-names.scss';

import {fetchNote} from 'Actions';
import WithBemHelper from 'CommonComponents/WithBemHelper';

class Note extends WithBemHelper{
  render(){
    console.log('render');
    const id = this.props.match.params.id || 0;
    console.log(id);
    const note = this.props.getNote(id);
    console.log(note);
    return (
      <div{...this.classes()}>
      {
        note ? note.text : "Loading..."
      }
      </div>
    );
  }

  componentDidMount(){
    console.log('didMount');
    const {match, fetchNote} = this.props;
    fetchNote(match.params.id || 0);
  }
}


Note.propTypes = {};

const mapStateToProps = (state, ownProps) => ({
  getNote: (id) => getNote(state, id),
});

const mapDispatchToProps = (dispatch) => ({
  fetchNote: (id) => dispatch(fetchNote(id)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Note));
