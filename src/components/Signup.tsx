import { createUserWithEmailAndPassword } from "firebase/auth";
import { FC, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { Button, Container, Form } from "react-bootstrap";

export const Signup: FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <main>
      <Container>
        <div className="mt-5">
          <h1></h1>
          <hr />
          <h3>Create your account</h3>
          <form>
            <div>
              <Form.Control
                type="email"
                value={email}
                className="field mb-2"
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email address"
              />
            </div>

            <div>
              <Form.Control
                type="password"
                value={password}
                className="field mb-4"
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
              />
            </div>

            <Button
              type="button"
              variant="outline-primary"
              style={{ width: "100%" }}
              onClick={() => onSubmit()}
            >
              Sign up
            </Button>
          </form>

          <p>
            Already have an account? <NavLink to="/login">Sign in</NavLink>
          </p>
        </div>
      </Container>
    </main>
  );
};
