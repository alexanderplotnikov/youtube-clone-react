import React from 'react';

const layout = (props) => (
  <div>
    {/* Toolbar, Sidebar, Backdrop */}
    <main>{props.children}</main>
  </div>
);

export default layout;
