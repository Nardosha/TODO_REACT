export function ButtonAddTask(props) {
    const onClick = (e) => {
    console.log(props, e)
    }
    return (
        <button
            className="button add-task"
                onClick={onClick}>
            Add new task
        </button>
    )
}