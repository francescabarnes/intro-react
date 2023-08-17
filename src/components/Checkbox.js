function Checkbox(props) {
  return (
    <input
      type="checkbox"
      defaultChecked={props.completed}
      className="checkbox"
    />
  );
}

export default Checkbox;
