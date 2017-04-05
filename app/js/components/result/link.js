import { h, render, Component } from 'preact';

const Link = ({ title, href }) => {
  if(href) {
    return (
      <a href={href} target="_blank" class="link dib dim fw4 black ml3 f6 v-mid">
        <span class="bb dib">{title}</span>
        <span class="dib rotate-315">&#x2192;</span>
      </a>
    );
  }
}

export default Link;
