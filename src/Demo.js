import React from 'react';

export const Demo = props => {
  const styles = { color: props.textColor, textDecoration: 'underline' };

  return <div style={styles}>{props.children}</div>;
};
