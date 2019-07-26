import React, { Fragment } from 'react';
import './Demo.css';

export const Demo = props => {
  // const styles = { color: props.textColor, textDecoration: 'underline' };
  //
  // return <div style={styles}>{props.children}</div>;
  return <Fragment>
    <div>{props.children}</div>
    <div className="info">{props.children}</div>
    <div id="message">{props.children}</div>
    <section className="info">{props.children}</section>
  </Fragment>;
};
