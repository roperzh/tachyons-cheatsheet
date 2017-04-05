import { h, render, Component } from 'preact';

import Cheatsheet from 'js/components/cheatsheet';


class Wrapper extends Component {
  state = {
    copyDisplay: 'o-0'
  }

  componentDidMount() {
    window.addEventListener('copy', (e) => {
      this.setState({ copyDisplay: 'o-1' });

      setTimeout(() => {
        this.setState({ copyDisplay: 'o-0' });
      }, 700);
    }, false);
  }

  render({ }, { copyDisplay }) {
    return (
      <div>
        <Cheatsheet />
        <div class={`fixed top25 pa3 white bg-black effect-reveal ${copyDisplay}`}>Copied!</div>
      </div>
    )
  }
}

render(
  <Wrapper />,
  document.getElementById('app')
);
