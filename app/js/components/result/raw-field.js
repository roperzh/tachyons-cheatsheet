import { h } from 'preact';

const RawField = ({ title, value }) => {
  const titleHTML = title && value ? <h3>{title}</h3> : '',
    valueHTML = value ? <p>{value}</p> : '';

  return (
    <div>
      {titleHTML}
      {valueHTML}
    </div>
  );
}

export default RawField;
