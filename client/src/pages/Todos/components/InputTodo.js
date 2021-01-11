import React, { Fragment, useState } from 'react';

const InputTodo = () => {

    const [description, setDescription] = useState('');

    const onSubmitForm = async(e) => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch('http://localhost:199/todos', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(body)
            });

            window.location = '/todos';
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <Fragment>
            <h1>Todo List</h1>
            <form onSubmit={onSubmitForm}>
                <input type='text' value={description} onChange={e => setDescription(e.target.value)} />
                <button>Add</button>
            </form>
        </Fragment>
    );
};

export default InputTodo;