import React, { useEffect, useState } from "react";
import NewTaskComponent from "./components/NewTask/NewTaskComponent";
import TaskList from "./components/TaskList/TaskList";
import { Modal } from "./components/Modals/Modal";
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
  const [action, setAction] = useState(null);
  const [editTask, setEditTask] = useState(null);
  useEffect(() => actionHandler(), [action]);

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

  function saveTask(newTask) {
    if (isNewGroup(newTask)) {
      const newTodos = [...todos, ...[newTask]];
      console.log(newTask);
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
   setAction(ACTION_TYPE.CLOSE_MODAL)
  }

  function actionHandler() {
    if (action === ACTION_TYPE.OPEN_MODAL) {
      console.log(action);
      setIsModalOpen(true);
    }
    if (action === ACTION_TYPE.CLOSE_MODAL) {
      setIsModalOpen(false);
    }
  }

  console.log('CONTAINER', todos);

  return (
    <main className="main">
      <div className="task-list__wrapper">
        <TaskList
          onChange={changeTodos}
          groupList={todos}
          onDeleteTask={deleteTask}
          openModal={toggleModal}
          onDeleteGroup={deleteGroup}
          onEditTask={setEditTask}
          onAction={setAction}
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
