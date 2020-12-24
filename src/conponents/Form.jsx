const Form = (props) => (
  <form onSubmit={props.handleAdd}>
    <div className="form-group row">
      <label className="col-sm-2 col-form-label">Your todo:</label>
      <input name="title" type="text" className="siimple-input" />
      　
      <input
        type="submit"
        value="Add"
        className="btn btn-secondary btn-sm"
      />
    </div>
  </form>
);

export default Form;
