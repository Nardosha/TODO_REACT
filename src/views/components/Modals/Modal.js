export const Modal = ({ children, open }) => {
  if (!open) return null;

  const classes = ["popup"];
  classes.push("_open");

  return (
    <div className={classes.join(" ")} id="popup-new-task">
      <div className="popup__container">{children}</div>
    </div>
  );
};
