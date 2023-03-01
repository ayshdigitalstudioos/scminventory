import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Radio,
  RadioGroup,
  Select,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
} from '@chakra-ui/react';
import axios from 'axios';
import { useAuth } from '../context/authContext';

const Dashboard = () => {
  const [user, setUser] = useState([]);
  const [luser, setLuser] = useState([]);
  const { currentUser } = useAuth();
  const liveUser = currentUser.uid;
  const [selectedOption, setSelectedOption] = useState(user.value);
  const [radioOption, setRadioOption] = useState(user.value);

  const fetchData = async (e) => {
      try {
        console.log("Ds"+e);
       
      } catch (err) {
        console.log(err);
      }
    };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const luserRes = await axios.get(`/user`);
        setLuser(luserRes.data);
        const res = await axios.get(`/user/${selectedOption}`);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [selectedOption]);

  return (
    <div className="Dashboard">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
        <h1 className="h3">Dashboard</h1>
      </div>
      {/* <Box padding={5}>
        <Select
          value={selectedOption}
          onChange={e => setSelectedOption(e.target.value)}
          size="sm"
          width="fit-content"
          isRequired
        >
          <option>Select the state</option>
          {user.map(users => {
            console.log(selectedOption);
            return (
              <>
                <option key={users.StateId} value={users.StateName}>
                  {users.StateName}
                </option>
              </>
            );
          })}
        </Select>
      </Box>
      <Box padding={5}>
        <RadioGroup
          value={radioOption}
          onChange={setRadioOption}
          className="radiobtn"
        >
          {user.map(users => {
            console.log(radioOption);
            return (
              <div>
                <Radio key={users.StateId} value={users.StateName} size="sm">
                  {users.StateName}
                </Radio>
              </div>
            );
          })}
        </RadioGroup>
      </Box> */}

      <Select
        value={selectedOption}
        onChange={e => setSelectedOption(e.target.value)}
        size="sm"
        width="fit-content"
        isRequired
      >
        <option>Select the state</option>
        {luser.map(todo => {
          return (
            <>
              <option key={todo.uid} value={todo.uid}>
                {todo.username}
              </option>
            </>
          );
        })}
      </Select>

      <TableContainer>
        <Table variant="simple" size="sm" width="fit-content">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>displayname</Th>
              <Th>productcode</Th>
              <Th>productstatus</Th>
              <Th isNumeric>userid</Th>
            </Tr>
          </Thead>
          <Tbody>
            {user.map((todo, index) => {
              return (
                <Tr key={todo.displayid}>
                  <Td>{todo.displayname}</Td>
                  <Td>{todo.productcode}</Td>
                  <Td>{todo.productstatus}</Td>
                  <Td>{todo.uid}</Td>
                  <Td colSpan={3}>
                    <Button onClick={e => fetchData(e.target.todo.displayid)}>
                      Delete
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Dashboard;
