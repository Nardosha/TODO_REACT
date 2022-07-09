import React, { useEffect, useState } from "react";
import NewTaskComponent from "./components/NewTask/NewTaskComponent";
import TaskList from "./components/TaskList/TaskList";
import { Modal } from "./components/Modals/Modal";
import { ACTION_TYPE } from "./helpers/variables";

export default function TodoContainer() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      name: "Learn English",
      time: "20:00",
      note: "You can do it!",
      completed: false,
      group: "Study",
      groupId: 12,
    },
    {
      id: 36,
      name: "test",
      time: "00:00",
      note: "You can do it!",
      completed: false,
      group: "TestGroup",
      groupId: 54,
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [action, setAction] = useState(null);
  const [editTask, setEditTask] = useState(null);

  useEffect(actionHandler, [action, actionHandler]);
  function toggleModal(boolean) {
    setIsModalOpen(boolean);
  }

  function toggleTaskItem(todo) {
    console.log("CHANGE", todo);
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          item.completed = !todo.completed;
        }
        return item;
      })
    );
  }

  function deleteTask(id) {
    console.log("Удаление таска", id);
    setTodos(todos.filter((task) => task.id !== id));
  }

  function deleteGroup(deleteGroup) {
    console.log("Удаление ГРУППЫ", deleteGroup);
    setTodos(todos.filter((task) => task.group !== deleteGroup));
  }

  function isNewTask(newTask) {
    console.log(newTask);
    return !todos.find((task) => task.id === newTask.id);
  }

  function saveTask(newTask) {
    console.log("SAVE TASK", newTask);

    if (isNewTask(newTask)) {
      console.log("НОВЫЙ ТАСК");
      return setTodos([...todos, newTask]);
    } else {
      console.log("СТАРЫЙ ТАСК", newTask, todos);

      setTodos(todos.map((task) => (task.id === newTask.id ? newTask : task)));
    }
    setAction(ACTION_TYPE.CLOSE_MODAL);
  }

  const createTask = () => {
    setAction(ACTION_TYPE.CREATE_TASK);
  };

  function actionHandler() {
    if (action === ACTION_TYPE.CLOSE_MODAL) {
      setIsModalOpen(false);
      console.log("МОДАЛКА ЗАКРЫТА");
      return;
    }

    if (action === ACTION_TYPE.CREATE_TASK) {
      console.log(action);
      setEditTask(null);
      setIsModalOpen(true);
    }

    if (action === ACTION_TYPE.EDIT_TASK) {
      console.log(action);
      setIsModalOpen(true);
    }
  }

  console.log("CONTAINER", todos);

  return (
    <main className="main">
      <div className="task-list__wrapper">
        <TaskList
          onChange={toggleTaskItem}
          todos={todos}
          onDeleteTask={deleteTask}
          openModal={toggleModal}
          onDeleteGroup={deleteGroup}
          onEditTask={setEditTask}
          onAction={setAction}
          onCreateTask={createTask}
        />
        <Modal open={isModalOpen}>
          <NewTaskComponent
            editTask={editTask}
            setActionType={setAction}
            onSubmit={saveTask}
          />
        </Modal>
      </div>
    </main>
  );
}
