import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/auth.js";

import { FormGroup, InputGroup, Button, Label } from "@blueprintjs/core";

function Signup() {
  const { signup } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const handleChange = (e) => {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    } else {
      setRole(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(username, password, role);
  };

  return (
    <div>
      <h1>Signup</h1>

      <card
        className="app"
        intent="danger"
        style={{
          "margin-top": "0rem",
        }}
      >
        <FormGroup>
          <FormGroup >
            <label>Username</label>
            <InputGroup
              type="text"
              onChange={handleChange}
              name="username"
              placeholder="user name ... "
              required
            />
          </FormGroup>
          <FormGroup controlId="formBasicPassword"  >
            <Label >Password</Label>
            <InputGroup
              type="password"
              onChange={handleChange}
              name="password"
              placeholder="password ..."
              required
            />
          </FormGroup>

          <FormGroup >
            <Label>Role</Label>
            <select onChange={handleChange} name="role" as="select">
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </FormGroup>
        </FormGroup>

        <Button  onClick={handleSubmit}>
          Signup
        </Button>
      </card>
    </div>
  );
}

export default Signup;
