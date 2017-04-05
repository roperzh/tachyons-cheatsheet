import { h, render, Component } from 'preact';
import Clipboard from 'clipboard';

class CopyOnClick extends Component {
  componentDidMount () {
    const $wrapper = this.$wrapper;

    this.clipboard = new Clipboard(
      $wrapper, {
        text: () => {
          let text = $wrapper.getAttribute('aria-label') || $wrapper.textContent;
          return text.trim();
        }
      }
    )

    this.clipboard.on('success', this.emit);
  }

  componentWillUnmount() {
    if (this.clipboard) {
      this.clipboard.destroy();
    }
  }

  emit(e) {
    window.dispatchEvent(new Event('copy'));
  }

  teste(e) {
    e.preventDefault();
  }

  render ({ children, label }) {
    return (
      <a
        href="#"
        ref={(el) => { this.$wrapper = el }}
        class={`bg-animate hover-bg-washed-green pointer link black ${this.props['class']}`}
        onClick={this.teste}
        aria-label={label}
      >
        {children}
      </a>
    )
  }
}

export default CopyOnClick;
