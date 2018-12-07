import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';

import WithBemHelper from 'CommonComponents/WithBemHelper';
import media from 'Config/css/_media-size.scss';

const leftWidthInitial = 200;
const resizerWidthInitial = 3;


const getComputedWidth = (elem) => parseFloat($(elem).css('width').replace('px', ''));
const getComputedMarginLeft = (elem) => parseFloat($(elem).css('margin-left').replace('px', ''));


class ResizableSlidable extends WithBemHelper{
  constructor(props){
    super(props);
    this.wrapper = React.createRef();
    this.resizer = React.createRef();
    this.left = React.createRef();
    this.right = React.createRef();
    this.outer = React.createRef();

    this.startResize = this.startResize.bind(this);
    this.startSlide = this.startSlide.bind(this);
    this.initFeature = this.initFeature.bind(this);
  }

  render(){
    let {left, right} = this.props;
    return (
      <div {...this.classes()}
        ref={this.outer}>

        <div {...this.classes('wrapper')}
          ref={this.wrapper}>

          <div {...this.classes('left')}
            ref={this.left}>{left}</div>

          <div {...this.classes('resizer')}
            ref={this.resizer}></div>

          <div {...this.classes('right')}
            ref={this.right}>{right}</div>
        </div>
      </div>
    );
  }

  componentDidMount(){
    window.addEventListener('resize', this.initFeature);
    this.initFeature();
  }

  initFeature(/*window resize event*/){
    let resizer = this.resizer.current;
    let wrapper = this.wrapper.current;

    let mediaSmall = window.matchMedia('(min-width: ' + media.sm + ')');
    if (mediaSmall.matches) {
      resizer.addEventListener("mousedown", this.startResize);
      wrapper.removeEventListener("touchstart", this.startSlide);
      $(wrapper).css('margin-left', '0px');
    } else {
      resizer.removeEventListener("mousedown", this.startResize);
      wrapper.addEventListener("touchstart", this.startSlide);
    }
  }

  startSlide(e/*mouseDown*/){
    //e.preventDefault();
    console.log(e.touches);
    const initialMouseX = e.touches[0].pageX;
    const outerWidth = getComputedWidth(this.outer.current)
    const $wrapper = $(this.wrapper.current);
    const marginLeftMin = -getComputedWidth(this.outer.current);
    const marginLeftMax = 0;
    const initialMargin = getComputedMarginLeft(this.wrapper.current);

    const slide = (e /*mouseMove*/) => {
      let marginLeft = initialMargin + (e.touches[0].pageX - initialMouseX) * 2;

      if (marginLeft < marginLeftMin) {
        marginLeft = marginLeftMin;
      } else if (marginLeft > marginLeftMax) {
        marginLeft = marginLeftMax;
      }
      $wrapper.css('margin-left', marginLeft + 'px');
    }

    const stopSlide = (/*mouseMove*/) => {
      const marginLeft = getComputedMarginLeft(this.wrapper.current);
      console.log(marginLeft, outerWidth, marginLeft/outerWidth);
      if (marginLeft/outerWidth > -0.5) {
        $wrapper.css('margin-left', 0 + 'px');
      } else {
        $wrapper.css('margin-left', -outerWidth + 'px');
      }
      window.removeEventListener('touchmove', slide);
      window.removeEventListener('touchend', stopSlide);
    }

    window.addEventListener('touchmove', slide);
    window.addEventListener('touchend', stopSlide);
  }

  startResize(e/*mouseDown*/){
    e.preventDefault();
    const initialMouseX = e.pageX;

    const wrapperWidth = getComputedWidth(this.wrapper.current);
    const resizerWidth = getComputedWidth(this.resizer.current);
    const initialLeftWidth = getComputedWidth(this.left.current);

    const left = this.left.current;
    const right = this.right.current;

    const {minLeftWidth, minRightWidth} = this.props;

    function resize(e/*mouseMove*/){
      const leftWidth = initialLeftWidth + (e.pageX - initialMouseX);
      const rightWidth = wrapperWidth - resizerWidth - leftWidth;
      $(left) .css('width', leftWidth + 'px');
      $(right).css('width', rightWidth  + 'px');
    }

    function stopResize(){
      window.removeEventListener('mousemove', resize);
      window.removeEventListener('mouseup', stopResize);      
    }

    window.addEventListener('mousemove', resize);
    window.addEventListener('mouseup', stopResize);
  }
}

ResizableSlidable.propTypes = {
  left:  PropTypes.node.isRequired,
  right: PropTypes.node.isRequired,
};

export default ResizableSlidable;
