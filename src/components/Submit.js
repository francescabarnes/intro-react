function Submit(props) {
  return (
    <button type="submit" className="btn-submit" onClick={props.onSubmit}>
      {" "}
      Add{" "}
    </button>
  );
}

export default Submit;
