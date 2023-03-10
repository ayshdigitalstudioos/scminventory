import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';

const Register = () => {
  const [show, setShow] = useState(false);
  const [inputs, setInput] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [err, setErr] = useState(null);
  const [successmsg, setSuccess] = useState(null);

  const handleClick = () => setShow(!show);
  const navigate = useNavigate();

  const handleChange = e => {
    setInput(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/auth/register', inputs);
      setSuccess(res.data);
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (err) {
      setErr(err.response.data);
      setTimeout(() => {
        document.location.reload();
      }, 3000);
    }
  };

  return (
    <div className="registerform">
      <div className="wrapper p-4 rounded">
        <form>
          <h2 className="pb-3 text-danger">Register Form</h2>
          <hr className="pb-3" />
          {err && (
            <Alert status="error" mb="3" variant="left-accent">
              <AlertIcon />
              <AlertTitle>{err}</AlertTitle>
            </Alert>
          )}
          {successmsg && (
            <Alert status="success" mb="3" variant="left-accent">
              <AlertIcon />
              <AlertTitle>{successmsg}</AlertTitle>
            </Alert>
          )}
          <div className="formgroup pb-3">
            <label className="pb-1">Username</label>
            <Input
              type="text"
              placeholder="Enter usename"
              required
              name="username"
              onChange={handleChange}
            />
          </div>
          <div className="formgroup pb-3">
            <label className="pb-1">email</label>
            <Input
              type="email"
              placeholder="Enter email"
              required
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="formgroup pb-3">
            <label className="pb-1">password</label>
            <InputGroup>
              <Input
                pr="4.5rem"
                type={show ? 'text' : 'password'}
                placeholder="Enter password"
                required
                name="password"
                onChange={handleChange}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
          </div>

          <Button onClick={handleSubmit} border="1px">
            Register
          </Button>

          <Box pt="1rem">
            Don't you have an account ? <Link to="/login">Login</Link>
          </Box>
        </form>
      </div>
    </div>
  );
};

export default Register;
