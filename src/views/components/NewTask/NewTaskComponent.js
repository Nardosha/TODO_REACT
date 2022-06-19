import Button from "../Buttons/Button";
import SubmitButton from "../Buttons/SubmitButton";
import { ACTION_TYPE } from "../../helpers/helpers";
import { useState } from "react";

export default function NewTaskComponent({
  onSubmit,
  editTask,
  setActionType,
}) {
  const defaultTask = {
    taskName: "",
    time: "",
    notes: "",
    id: 13,
    groupSign: "TODO",
    groupId: 25,
    completed: false,
  };

  const currentTask = editTask ? editTask : defaultTask;
  const [newTask, setNewTask] = useState(currentTask);

  function submitHandler(e) {
    e.preventDefault();
    console.log('newTask', newTask);
    const todoItem = {
      groupSign: newTask.groupSign,
      groupId: newTask.groupId,
      taskList: [
        {
          id: newTask.id,
          taskName: newTask.taskName,
          time: newTask.time,
          notes: newTask.notes,
          completed: newTask.completed,
        },
      ],
    };
    console.log('todoItem', todoItem);
    onSubmit(todoItem);
  }

  function closeModal() {
    setActionType(ACTION_TYPE.CLOSE_MODAL);
    setNewTask(defaultTask);
  }

  function inputHandler(e) {
    const value = e.target.value;
    const property = e.target.name;
    const obj = newTask;
    obj[property] = value;

    setNewTask(obj);
  }

  return (
    <div className="new-task__wrapper">
      <Button
        className={"button-close"}
        text={"Закрыть"}
        id={"button-close"}
        click={closeModal}
      />
      <h2 className="title new-task__title">New Task</h2>
      <form className="new-task__form" action="#" onSubmit={submitHandler}>
        <label className="label new-task__name" htmlFor="newTaskName">
          Name
        </label>
        <input
          defaultValue={newTask.taskName}
          name="taskName"
          id="newTaskName"
          type="text"
          placeholder="Enter something..."
          className="input new-task__input"
          onInput={inputHandler}
        />
        <label className="label new-task__label" htmlFor="newTaskDate">
          Time
        </label>
        <input
          defaultValue={newTask.time}
          id="newTaskDate"
          className="input new-task__input_time"
          name="time"
          type="time"
          onChange={inputHandler}
        />
        <label className="label new-task__name" htmlFor="newTaskName">
          Notes
        </label>
        <input
          defaultValue={newTask.notes}
          id="newTaskName"
          name="notes"
          className="input new-task__input"
          type="text"
          placeholder="Notes..."
          onChange={inputHandler}
        />
        <div className="new-task__button">
          <SubmitButton
            className={"new-task__button"}
            id={"new-task-button"}
            text={"+"}
          />
        </div>
      </form>
    </div>
  );
}
