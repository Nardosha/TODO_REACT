export const Modal = ({ children, open }) => {
  // const [isOpen, setIsOpen ] = useState(false)
  const classes = ["popup"];
  console.log(open);
  if (!open) return null;
  classes.push("_open");
  console.log(children);

  return (
    <div className={classes.join(" ")} id="popup-new-task">
      <div className="popup__container">{children}</div>
    </div>
  );
};
