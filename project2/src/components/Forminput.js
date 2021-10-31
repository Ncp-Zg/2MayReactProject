import React, { useState } from "react";
import "./FormInput.css";

const Forminput = (props) => {
  const [focused, setFocused] = useState(false);
  const { errorMessage, ...rest } = props;

  return (
    <div>
      <input
        onChange={(e) => props.handleChange(e)}
        {...rest}
        onBlur={() => setFocused(true)}
        focused={focused.toString()}
        onFocus={() => rest.name === "confirmpassword" && setFocused(true)}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default Forminput;
