import React from "react";

const Form = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input
          name="name"
          value={props.namevalue}
          type="text"
          onChange={props.handleChange}
          placeholder="name please"
        ></input>
        <input
          name="dog"
          value={props.dogname}
          type="text"
          onChange={props.handleChange}
          placeholder="dog name please"
        ></input>
        <button type="submit">Submit this form!</button>
      </form>
    </div>
  );
};

export default Form;
