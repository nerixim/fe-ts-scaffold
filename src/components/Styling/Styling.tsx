/* tslint:disable-next-line */
import React from 'react';
import stylesLess from  './styles.less';

/* tslint:disable-next-line */
export default function Styling () {
  return (
      <div id={stylesLess.root}>
        <h2 className="my_global">Styling</h2>
        <div id={stylesLess.rootContainer}>
          <div className={stylesLess.rootContainerItem}>One</div>
          <div className={stylesLess.rootContainerItem}>Two</div>
          <div className={stylesLess.rootContainerItem}>Three</div>
        </div>
      </div>
  );
}