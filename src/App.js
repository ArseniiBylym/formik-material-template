import React from 'react';
import styles from './App.module.scss';
import Menu from './components/Menu';

function App() {
    return (
        <div className={styles.root}>
            <div>Title</div>
            <Menu />
        </div>
    );
}

export default App;
