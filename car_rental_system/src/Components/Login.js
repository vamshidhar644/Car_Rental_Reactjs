import React, { useState } from 'react';
import '../Styles/Login.css';
import { useNavigate } from 'react-router';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Login = () => {
  const navigate = useNavigate();

  const [UserData, SetUserData] = React.useState(null);
  React.useEffect(() => {
    fetch('http://localhost:3001/login/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => SetUserData(data.data));
  }, []);
  console.log(UserData);
  
  const ToSuccessLoginHome = (e) => {
    e.preventDefault();

    const Username = document.getElementById('username').value;
    const Password = document.getElementById('password').value;
    var status = 0;
    for (var index in UserData) {
      if (
        Username === UserData[index]['Username'] &&
        Password === UserData[index]['Password']
      ) {
        status++;
      }
    }
    if (status === 1) {
      navigate('/successlogin');
    }
    console.log(status);
  }

  function ToRegister() {
    navigate('/register');
  }

  return (
    <div className="LoginContainer">
      <div className="App">
        <div className="cover  mt-5">
          <section>
            <h3>Login</h3>
            <Form>
              <Form.Group className="mb-3 lg-2">
                <Form.Control
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Button
                className="BtnSubmit"
                variant="primary"
                type="submit"
                onClick={ToSuccessLoginHome}
              >
                Login
              </Button>
              <p className="bottomLine">
                New User ? <span onClick={ToRegister}>Register</span>
              </p>
            </Form>
          </section>
        </div>
        <div className="otherLogin">
          <p>
            Login as <span>Manager</span>
          </p>
          <p>
            Login as <span>Admin</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
