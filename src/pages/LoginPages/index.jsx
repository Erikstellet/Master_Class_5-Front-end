import React, { useState } from "react";

import { Wrapper, FormCard, Form, Field, Label, Input, Button } from "./styles";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    console.log("login");
  };

  return (
    <Wrapper>
      <FormCard>
        <div className="title">Login</div>

        <Form>
          <Field>
            <Label htmlFor="email">Email:</Label>
            <Input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Field>

          <Field>
            <Label htmlFor="password">Senha:</Label>
            <Input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Field>

          <Field>
            <Button onClick={handleLogin}>Entrar</Button>
          </Field>
        </Form>

      </FormCard>
    </Wrapper>
  );
};

export default LoginPage;
