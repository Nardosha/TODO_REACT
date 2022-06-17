export default function NewTaskComponent({ onSubmit, openModal }) {
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
      task: {
        id: defTask.id,
        taskName: defTask.taskName,
        time: defTask.time,
        notes: defTask.notes,
      },
    };
    onSubmit(todoItem);
    openModal(false);
  }

  return (
    <div className="new-task__wrapper">
      <button onClick={() => openModal(false)}>Закрыть</button>
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
          <label
            className="button new-task__button_label"
            htmlFor="newTaskButton"
          >
            +
          </label>
          <input
            id="newTaskButton"
            className="button new-task__button_add"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
}
