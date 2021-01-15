const Form = (props) => {
  const handleSentence = (event) => {
    props.setSentence(event.target.value);
    console.log(event.target.value);
  };

  const handleSource = (event) => {
    props.setSource(event.target.value);
  };

  const handleTarget = (event) => {
    props.setTarget(event.target.value);
  };

  return (
    <div>
      <form className="form-group">
        <div className="row">
          <div className="col-xs-3">
            <div className="col-auto">
              <label className="col-form-label col-form-label-lg">
                翻訳したい文章:
              </label>

              <input
                type="text"
                className="form-control"
                onChange={handleSentence}
              />
              <div className="form-group">
                <label htmlFor="sourceText">翻訳前の言語</label>
                <select
                  className="form-control"
                  name="src"
                  onChange={handleSource}
                >
                  <option value="ja">日本語</option>
                  <option value="en">英語</option>
                  <option value="af">アフリカーンス語</option>
                  <option value="sq">アルバニア語</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="targetText">翻訳語の言語</label>
                <select
                  className="form-control"
                  name="target"
                  onChange={handleTarget}
                >
                  <option value="ja">日本語</option>
                  <option value="en">英語</option>
                  <option value="af">アフリカーンス語</option>
                  <option value="sq">アルバニア語</option>
                </select>
              </div>
              <button
                className="btn-success"
                type="button"
                onClick={props.doGet}
              >
                Translate
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
