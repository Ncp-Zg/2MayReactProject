import logo from "./logo.svg";
import "./App.css";
import Forminput from "./components/Forminput";
import { useState } from "react";

function App() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const inputs = [
    {
      name: "firstname",
      type: "text",
      errorMessage:"It should be ",
      pattern:"^[A-Za-z0-9]{3,16}$",
      required: true
    },
    {
      name: "lastname",
      type: "text",
      errorMessage:"It should be ",
      required:true
      


    },
    {
      name: "email",
      type: "email",
      errorMessage:"It should be ",
      required:true

    },
    {
      name: "password",
      type: "password",
      errorMessage:"It should be ",
      pattern:`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required:true



    },
    {
      name: "confirmpassword",
      type: "password",
      errorMessage:"It should be ",
      pattern: values.password,
      required:true
      


    },
  ];


  const handleChange = (e)=>{
    e.preventDefault();
    console.log(e.target)
      setValues({...values, [e.target.name]:e.target.value})
  }

  return (
    <div className="App">
      <form>

        {
        inputs.map(input=>
          <Forminput 
            {...input}
            value = {values[input.name]}
            handleChange={handleChange}

          />
          )
      }
      </form>
      

      
    </div>
  );
}

export default App;
