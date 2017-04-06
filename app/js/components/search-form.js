import { h, render, Component } from 'preact';
import KeyCodes from '../helpers/keycodes';

export default class SearchForm extends Component {
  componentDidMount = () => {
    window.onkeydown = ({ keyCode }) => {
      if (this.shouldFocus(keyCode)) {
        this.$input.focus();
      }

      if(KeyCodes.isEscape(keyCode)) {
        this.setState({ search: '' });
      }
    }
  }

  shouldFocus = (keyCode) => {
    return (
      KeyCodes.isNumber(keyCode) ||
      KeyCodes.isLetter(keyCode) ||
      KeyCodes.isEscape(keyCode) ||
      KeyCodes.isBackSpace(keyCode)
    );
  }

  handleSubmit = (e) => {
    this.search();
    e.preventDefault();
  }

  search = () => {
    this.props.search(this.state.search);
  }

  render({ }, { search }) {
    return (
      <form class="mw8 w-100 center mt4 mb2" onSubmit={this.handleSubmit}>
        <input
          ref={(el) => { this.$input = el }}
          value={search}
          onKeyup={this.search}
          onInput={this.linkState('search')}
          class="bg-near-white input-reset bn w-100 pa3"
          type="search"
          autofocus
          placeholder="Start tipyng to search...">
        </input>
      </form>
    );
  }
}
