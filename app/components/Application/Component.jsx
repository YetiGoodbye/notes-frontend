import React from 'react';
import BodyClassName from 'react-body-classname';

import WithBemHelper from 'CommonComponents/WithBemHelper';

import classNames from 'Config/css/_class-names.scss';

import Header            from 'Components/Header';
import Menu              from 'Components/Menu';
import Footer            from 'Components/Footer';
import NotesNavigator    from 'Components/NotesNavigator';

import LayoutHmmf        from 'CommonComponents/LayoutHmmf';
import ResizableSlidable from 'CommonComponents/ResizableSlidable';

import LoremIpsum1       from 'Components/debug/LoremIpsum1';


class Application extends WithBemHelper{
  render(){
    return (
      <BodyClassName {...this.classes()}>
        <LayoutHmmf
          klassName = {classNames.layoutHmmf}
          header = {<Header/>}
          menu   = {<Menu/>}
          main   =
          {
            <ResizableSlidable
              klassName = {classNames.resizableSlidable}
              left  = {
                <NotesNavigator
                  klassName={classNames.notesNavigator}
                />
              }
              right = {<LoremIpsum1 />}
            />
          }
          footer = {<Footer/>}
        />
      </BodyClassName>
    );
  }
}

export default Application;

