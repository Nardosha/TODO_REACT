import Button from "../Buttons/Button";
import SubmitButton from "../Buttons/SubmitButton";
import { ACTION_TYPE } from "../../helpers/variables";
import { useState } from "react";
import Task from "../../../models/Task";
import { useInput } from "../../helpers/customHooks";

export default function NewTaskComponent({
  onSubmit,
  editTask,
  setActionType,
}) {
  const [task, setTask] = useState(editTask ? editTask : new Task());

  const group = useInput(task.group, { isEmpty: true, minLength: 1 });
  const name = useInput(task.name, { isEmpty: true, minLength: 1 });
  const time = useInput(task.time, { isEmpty: true });
  const note = useInput(task.note, { isEmpty: true, minLength: 1 });

  const submitHandler = (e) => {
    const formData = new FormData(e.currentTarget);
    e.preventDefault();

    for (let [key, value] of formData.entries()) {
      task[key] = value;
    }
    setTask(task);
    onSubmit(task);
    closeModal();
  };

  function closeModal() {
    setActionType(ACTION_TYPE.CLOSE_MODAL);
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
          Group
        </label>
        {name.isDirty && name.isEmpty && (
          <div style={{ color: "res" }}>Невалидненько</div>
        )}
        <input
          value={group.value}
          onChange={group.onChange}
          onBlur={group.onBlur}
          name="group"
          id="groupName"
          type="text"
          placeholder="Enter something..."
          className="input new-task__input"
        />

        <label className="label new-task__name" htmlFor="newTaskName">
          Name
        </label>
        {name.isDirty && name.isEmpty && (
          <div style={{ color: "res" }}>Невалидненько</div>
        )}
        <input
          value={name.value}
          onChange={name.onChange}
          onBlur={name.onBlur}
          name="name"
          id="taskName"
          type="text"
          placeholder="Enter something..."
          className="input new-task__input"
        />
        <label className="label new-task__label" htmlFor="newTaskDate">
          Time
        </label>
        <input
          value={time.value}
          id="taskTime"
          className="input new-task__input_time"
          name="time"
          type="time"
          onChange={time.onChange}
          onBlur={time.onBlur}
        />
        <label className="label new-task__name" htmlFor="newTaskName">
          Notes
        </label>
        {name.isDirty && name.isEmpty && (
          <div style={{ color: "res" }}>Невалидненько</div>
        )}
        <input
          value={note.value}
          id="taskNote"
          name="note"
          className="input new-task__input"
          type="text"
          placeholder="Notes..."
          onChange={note.onChange}
          onBlur={note.onBlur}
        />
        <div className="new-task__button">
          <SubmitButton
            className={"new-task__button"}
            id={"new-task-button"}
            text={"+"}
            disabled={name.isValid || note.isValid}
          />
        </div>
      </form>
    </div>
  );
}
