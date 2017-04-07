import { h, render, Component } from 'preact';

import RawField from './result/raw-field';
import List from './result/list';
import Link from './result/link';

export default class SearchResults extends Component {
  single({ name, media, description, base, modifiers, docs, src }) {
    const mediaHTML = media ? <List items={media} /> : null;
    const modifiersHTML = modifiers ? <List items={modifiers} base={base} /> : null;
    const baseHTMl = base ? <List items={base} /> : null;

    return (
      <li class="pv3 bb last-child-no-bb b--black nested-copy-line-height">
        <h2>
          <span class="ttu">{name}</span>
          <Link href={docs} title="Documentation" />
          <Link href={`https://github.com/tachyons-css/tachyons/blob/master/src/_${src}.css`} title="Source" />
        </h2>
        <RawField value={description} />
        <RawField value={baseHTMl} title="Base" />
        <RawField value={modifiersHTML} title="Modifiers" />
        <RawField value={mediaHTML} title="Media" />
      </li>
    );
  }

  all(results) {
    return results.map(this.single);
  }

  render({ results }) {
    return (
      <ol class="mw8 center list pa0 mv0">
        {this.all(results)}
      </ol>
    );
  }
}
