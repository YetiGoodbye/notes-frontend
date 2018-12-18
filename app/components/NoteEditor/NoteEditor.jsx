import React from 'react';
import PropTypes from 'prop-types';
import { Editor } from 'react-draft-wysiwyg';
import {convertToRaw, convertFromRaw, EditorState} from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const bla = '{"blocks":[{"key":"lpe6","text":"id: 1","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"7b2vr","text":"123","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":3,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}';

import WithBemHelper from 'CommonComponents/WithBemHelper';

class Component extends WithBemHelper{

  constructor(props){
    super(props);
    this.state = {
      editorState: EditorState.createWithContent(convertFromRaw(JSON.parse(bla))),
    };
    
    this.onEditorStateChange = (editorState) => this.setState({editorState});

    this.logEditorState = () => {
      console.log(JSON.stringify(
        convertToRaw(this.state.editorState.getCurrentContent()))
      );
      console.log(
        convertToRaw(this.state.editorState.getCurrentContent())
      );
    };    
  }


  render(){
    return (
      <div>
        <button onClick={this.logEditorState}>Log state</button>
        <Editor
          editorState={this.state.editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={this.onEditorStateChange}
        />
      </div>
    );
  }
}

Component.propTypes = {};

export default Component;


