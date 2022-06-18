import React, { useState } from "react";
import NewTaskComponent from "./components/NewTask/NewTaskComponent";
import TaskList from "./components/TaskList/TaskList";
import { Modal } from "./components/Modals/Modal";
import { type } from "@testing-library/user-event/dist/type";
import { ACTION_TYPE } from "./helpers/helpers";

export default function TodoContainer() {
  const [todos, setTodos] = useState([
    {
      groupSign: "Study",
      groupId: 12,
      taskList: [
        {
          id: 1,
          taskName: "Learn English",
          time: "20:00",
          notes: "You can do it!",
          completed: false,
        },
        {
          id: 2,
          taskName: "Learn Ract",
          time: "21:00",
          notes: "Finish TODO",
          completed: true,
        },
      ],
    },
    {
      groupSign: "Chill",
      groupId: 14,
      taskList: [
        {
          id: 4,
          taskName: "Sleep early",
          time: "23:00",
          notes: "Dreams is waiting for you",
          completed: false,
        },
      ],
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [action, setAction] = useState(null)


  function toggleModal(boolean) {
    setIsModalOpen(boolean);
  }

  function changeTodos(todo) {
    setTodos(
      todos.map((group) => {
        group.taskList.map((task) => {
          if (task.id === todo.id) {
            task.completed = !task.completed;
          }
          return task;
        });
        return group;
      })
    );
  }

  function deleteTask(id) {
    setTodos(
      todos.filter((group) => {
        group.taskList = group.taskList.filter((task) => task.id !== id);
        if (!group.taskList.length) {
          return false;
        }
        return group.taskList;
      })
    );
  }

  function deleteGroup(deleteGroup) {
    setTodos(todos.filter((group) => group.groupId !== deleteGroup.groupId));
  }

  function isNewGroup(newGroup) {
    return !todos.find((group) => group.groupId === newGroup.groupId);
  }

  // function editTodos(newTodo) {
  //   setAction(ACTION_TYPE.EDIT)
  // }

  function saveTask(newTask) {
    if (isNewGroup(newTask)) {
      const newTodos = [...todos, ...[newTask]];
      setTodos(newTodos);
    } else {
      setTodos(
        todos.map((group) => {
          if (group.groupId === newTask.groupId) {
            group.taskList = [...group.taskList, ...newTask.taskList];
            return group;
          }
          return group;
        })
      );
    }
    toggleModal(false);
  }

  function renameTaskItem(newName) {
  }

  if (action === 'OPEN') {
    setIsModalOpen(true)
    return
  }
  if (action === 'CLOSE') {
    setIsModalOpen(true)
    return
  }

  console.log('ACTION', action);

  return (
    <main className="main">
      <div className="task-list__wrapper">
        <TaskList
          onChange={changeTodos}
          groupList={todos}
          onDeleteTask={deleteTask}
          openModal={toggleModal}
          onDeleteGroup={deleteGroup}
          onRenameTaskItem={renameTaskItem}
          actionType={setAction}
        />
        <Modal open={isModalOpen}>
          <NewTaskComponent actionType={action} setActionType={setAction} openModal={toggleModal} onSubmit={saveTask} />
        </Modal>
      </div>
    </main>
  );
}
