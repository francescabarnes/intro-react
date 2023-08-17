function Checkbox(props) {
  return (
    <input
      type="checkbox"
      id={props.id}
      defaultChecked={props.completed}
      className="checkbox"
    />
  );
}

export default Checkbox;
