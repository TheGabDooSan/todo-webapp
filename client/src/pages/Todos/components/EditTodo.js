import React, { Fragment, useState } from "react";

const EditTodo = ({ todo }) => {
  const [description, setDescription] = useState(todo.description);

  //edit description function

  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(
        `http://localhost:199/todos/${todo.t_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      window.location = "/todos";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button type="button" data-toggle="modal" data-target={`#id${todo.t_id}`}>
        Edit
      </button>

      {/* 
        id = id10
      */}
      <div
        class="modal"
        id={`id${todo.t_id}`}
        onClick={() => setDescription(todo.description)}
      >
        <div>
          <div>
            <div>
              <h4>Edit Todo</h4>
              <button type="button" data-dismiss="modal" onClick={() => setDescription(todo.description)}>
                &times;
              </button>
            </div>

            <div class="modal-body">
              <input type="text" value={description} onChange={e => setDescription(e.target.value)}/>
            </div>

            <div>
              <button type="button" data-dismiss="modal" onClick={e => updateDescription(e)}>
                Edit
              </button>
              <button type="button" data-dismiss="modal" onClick={() => setDescription(todo.description)} >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditTodo;