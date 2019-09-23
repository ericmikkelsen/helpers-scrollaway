import { Component, h, State} from '@stencil/core';

@Component({
  tag: 'helpers-scrollaway',
  shadow: true,
  styleUrl: 'helpers-scrollaway.css',
})
export class HelpersScrollaway {

  @State() scrollingDown: Boolean = false;
  oldYPosition: Number = 0;
  ticking: Boolean = false;
  motionOK: Boolean = window.matchMedia('(prefers-reduced-motion: no-preference)') ? true : false;


  setDirection = () => {
        const newY = window.scrollY
        const scrollingDown = this.oldYPosition < newY
        if(scrollingDown !== this.scrollingDown){
          this.scrollingDown = scrollingDown
        }
        this.oldYPosition = newY
  }
  trackPosition = () => {
      if(window.scrollY !== this.oldYPosition && this.ticking === false){
        this.ticking = true
        this.setDirection()
        this.ticking = false
      }
      window.requestAnimationFrame(this.trackPosition)
  }
  componentDidLoad(){
    if(this.motionOK){
      this.trackPosition()
    }
  }

  render() {
    return <div class={this.scrollingDown ? 'hide' : 'show'}>
      <slot/>
    </div>;
  }
}
