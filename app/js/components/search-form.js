import { h, render, Component } from 'preact';

export default class SearchForm extends Component {
  componentDidMount = () => {
    window.onkeydown = ({ keyCode }) => {
      if (this.isNumber(keyCode) || this.isLetter(keyCode)) {
        this.$input.focus();
      }
    }
  }

  isNumber(keyCode) {
    return keyCode >= 48 && keyCode <= 57;
  }

  isLetter(keyCode) {
    return keyCode >= 65 && keyCode <= 90;
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
