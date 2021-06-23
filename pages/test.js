import React, { Component,useState } from 'react';
import styles from '../styles/Test.module.css';

const Dropdown=()=> {
    const[sidebar, setSidebar]=useState(false);
    const showSidebar = () => {
        setSidebar(!sidebar);
    }

        return (
            <div className={styles.dropdown}  >
                <div className={styles.button} onClick={showSidebar}> My Setting </div>
                {(() => {
                    if (sidebar === true) {
                        return (
                            <ul className={styles.list}>
                                <li className={styles.lists}><a className="active" href="#Create Page">Create Page</a></li>
                                <li className={styles.lists}><a href="#Manage Pages">Manage Pages</a></li>
                                <li className={styles.lists}><a href="#Create Ads">Create Ads</a></li>
                                <li className={styles.lists}><a href="#Manage Ads">Manage Ads</a></li>
                                <li className={styles.lists}><a href="#Activity Logs">Activity Logs</a></li>
                                <li className={styles.lists}><a href="#Setting">Setting</a></li>
                                <li className={styles.lists}><a href="#Log Out">Log Out</a></li>
                            </ul>
                        )
                    }
                    else {
                        return null;
                    }
                })()}
            </div>

        );
}

export default Dropdown;