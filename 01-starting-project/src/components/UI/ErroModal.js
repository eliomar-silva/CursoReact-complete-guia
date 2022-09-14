import React from 'react';
import Button from './Button';
import Card from './Card';

import classes from './ErroModal.module.css';

const ErroModal = props => {
    return <>
         <div className={classes.backdrop} onClick={props.onConfirm} />
         <Card className={classes.modal}> 
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <main className={classes.content}>
                <p>{props.message}</p>
            </main>
            <footer className={classes.actions}>
                <Button onClick={props.onConfirm}>Okay</Button>
            </footer>
         </Card> 
    </>
};

export default ErroModal;