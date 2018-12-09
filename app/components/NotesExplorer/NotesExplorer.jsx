import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'Config/css/_class-names.scss';

import WithBemHelper     from 'CommonComponents/WithBemHelper';
import ResizableSlidable from 'CommonComponents/ResizableSlidable';

import NotesNavigator from 'Components/NotesNavigator';
import Note           from 'Components/Note';

class NotesExplorer extends WithBemHelper{
  render(){
    return (
      <ResizableSlidable
        klassName = {classNames.resizableSlidable}
        left  = {
          <NotesNavigator
            klassName={classNames.notesNavigator}
          />
        }
        right = {<Note/>}
      />
    );
  }
}

NotesExplorer.propTypes = {};

export default NotesExplorer;
