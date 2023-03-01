import React, { useEffect, useState } from 'react';
import {} from '@chakra-ui/react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../context/authContext';

const Dashboard = () => {
  const [user, setUser] = useState([]);
  const [luser, setLuser] = useState([]);
  const { currentUser } = useAuth();
  const liveUser = currentUser.uid;
  const [selectedOption, setSelectedOption] = useState(user.value);
  const [radioOption, setRadioOption] = useState(user.value);

  console.log(selectedOption, radioOption);
  const location = useLocation();
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
     
    </div>
  );
};

export default Dashboard;
