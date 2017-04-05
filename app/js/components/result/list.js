import { h } from 'preact';

import CopyOnClick from '../copy-on-click';

const parse = function(param) {
  return param.split('=')[0].trim();
}

const BasicItem = ({ item, base }) => {
  return (
    <CopyOnClick class="pa2 ma1 bg-near-white" label={parse(base) + parse(item)}>
      <span>{item}</span>
    </CopyOnClick>
  );
}

const ColorItem = ({ color }) => {
  return (
    <CopyOnClick class="w-30 w-20-m w-10-l mb2 pv3 tc">
      <span class={`db center mb2 w3 h3 bg-${color} ba b--black-60`}></span>
      <span data-copy>{color}</span>
    </CopyOnClick>
  );
}

const itemManager = (item, baseText) => {
  const parsedItem = item ? (item.split('^')) : '';

  switch(parsedItem[0]) {
    case 'color':
      return <ColorItem color={parsedItem[1]} base={baseText} />;
    default:
      return <BasicItem item={parsedItem[0]} base={baseText} />;
  }
}

const List = ({ items, base }) => {
  const baseText = base ? (base[0] || '') : '';

  if(items === null) {
    return null;
  }

  const itemsHTML = items.map((item) => itemManager(item, baseText));

  return (
    <div class="list ma0 pa0 flex flex-wrap">{itemsHTML}</div>
  )
}

export default List;
