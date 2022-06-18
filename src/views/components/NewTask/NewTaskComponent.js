import Button from "../Buttons/Button";
import SubmitButton from "../Buttons/SubmitButton";
import { ACTION_TYPE } from "../../helpers/helpers";

export default function NewTaskComponent({ onSubmit, openModal, setActionType, actionType }) {
  const defTask = {
    taskName: "",
    time: "",
    notes: "",
    id: 13,
    groupSign: "TODO",
    groupId: 25,
    completed: false,
  };


  function onChange(e) {
    const property = e.target.name;
    const value = e.target.value;
    defTask[property] = value ? value.toString() : "";
  }

  function submitHandler(e) {
    e.preventDefault();

    const todoItem = {
      groupSign: defTask.groupSign,
      groupId: defTask.groupId,
      taskList: [{
        id: defTask.id,
        taskName: defTask.taskName,
        time: defTask.time,
        notes: defTask.notes,
        completed: defTask.completed,
      }]
    };
    onSubmit(todoItem);
    openModal(false);
  }

  return (
    <div className="new-task__wrapper">
      <Button
        className={'button-close'}
        text={'Закрыть'}
        id={'button-close'}
        action={openModal}
        value={false}
        setActionType={setActionType}
        actionType={ACTION_TYPE.CLOSE}
      />
      <h2 className="title new-task__title">New Task</h2>
      <form className="new-task__form" action="#" onSubmit={submitHandler}>
        <label className="label new-task__name" htmlFor="newTaskName">
          Name
        </label>
        <input
          name="taskName"
          id="newTaskName"
          type="text"
          placeholder="Enter something..."
          className="input new-task__input"
          onChange={(e) => onChange(e)}
        />
        <label className="label new-task__label" htmlFor="newTaskDate">
          Time
        </label>
        <input
          id="newTaskDate"
          className="input new-task__input_time"
          name="time"
          type="time"
          onChange={(e) => onChange(e)}
        />
        <label className="label new-task__name" htmlFor="newTaskName">
          Notes
        </label>
        <input
          id="newTaskName"
          name="notes"
          className="input new-task__input"
          type="text"
          placeholder="Notes..."
          onChange={(e) => onChange(e)}
        />
        <div className="new-task__button">
          <SubmitButton
            className={'new-task__button'}
            id={'new-task-button'}
            text={'+'}
          />
        </div>
      </form>
    </div>
  );
}
