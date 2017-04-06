import { h, render, Component } from 'preact';
import lunr from 'lunr';

import SearchForm from 'js/components/search-form';
import SearchResults from 'js/components/search-results';

export default class CheatSheet extends Component {
  state = {
    data: [],
    results: []
  }

  search = (term) => {
    let results = this.state.index.search(term).map(
      (result) => this.state.data[result.ref]
    );

    this.setState({ ...this.state, results });
  }

  loadData() {
    fetch('./data.json').then((response) => {
      return response.text();
    })
    .then((rawData) => {
      const data = JSON.parse(rawData);

      const index = lunr(function() {
        this.field('name', { boost: 10 });
        this.field('tags', { boost: 15 });
        this.field('description');
        this.ref('id');
      });

      data.forEach((item, id) => index.add({ ...item, id }));

      this.setState({ data, index });
      this.search('color');
    });
  }

  componentDidMount() {
    this.loadData();
  }

  render({ }, { results }) {
    return (
      <div>
        <SearchForm search={this.search} />
        <SearchResults results={results} />
      </div>
    );
  }
}
