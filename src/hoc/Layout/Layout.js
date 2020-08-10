import React, { useState } from 'react';
import Toolbar from '../../components/Toolbar/Toolbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import classes from './Layout.module.css';
import disableScroll from '../../helpers/disableScroll';
import enableScroll from '../../helpers/enableScroll';

const Layout = (props) => {
  const [show, setShow] = useState(false);
  const handleToggleSidebar = () => {
    const state = !show;
    setShow(state);
    if (!show) {
      disableScroll();
    } else {
      enableScroll();
    }
  };
  return (
    <div className={classes.Layout}>
      <Sidebar show={show} clicked={handleToggleSidebar} />
      <Toolbar clicked={handleToggleSidebar} />
      <Backdrop show={show} clicked={handleToggleSidebar} />
      <main className={classes.Content}>{props.children}</main>
    </div>
  );
};

export default Layout;
