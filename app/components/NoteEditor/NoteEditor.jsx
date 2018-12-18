import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import { Editor } from 'react-draft-wysiwyg';
import {EditorState} from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import {getNote} from 'Selectors';
import {receiveNote} from 'Actions';

import WithBemHelper from 'CommonComponents/WithBemHelper';

class NoteEditor extends WithBemHelper{

  constructor(props){
    super(props);

    console.log('NoteEditor props: ', props);
    
    this.onEditorStateChange = (editorState) => {
      this.props.updateNote(props.match.params.id, editorState);
    }

    #-[
    this.logEditorState = () => {
      console.log(JSON.stringify(
        convertToRaw(this.props.editorState.getCurrentContent()))
      );
    };
    #-]   
  }


  render(){
    return (
      <div>
        #-<button onClick={this.logEditorState}>Log state</button>
        <Editor
          editorState={this.props.editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={this.onEditorStateChange}
        />
      </div>
    );
  }
}

NoteEditor.propTypes = {};

const mapStateToProps = (state, ownProps) => {
  const note = getNote(state, ownProps.match.params.id);
  return {
    editorState: note.editorState,
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateNote: (id, editorState) => {
    dispatch(receiveNote({id, editorState}));
  },
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NoteEditor));



