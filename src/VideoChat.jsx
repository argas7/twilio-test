import React, { useState, useCallback } from 'react';
import Lobby from './Lobby';
import Room from './Room';
import axios from 'axios';

const VideoChat = () => {
  const [username, setUsername] = useState('');
  const [roomName, setRoomName] = useState('');
  const [token, setToken] = useState(null);

  const handleUsernameChange = useCallback(event => {
    setUsername(event.target.value);
  }, []);

  const handleRoomNameChange = useCallback(event => {
    setRoomName(event.target.value);
  }, []);

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    try {
      const roomSID = 'RM212c2f4e1d964fa8741ea26d084b4716';
      const getToken = await axios.get(`https://a263650b57ce.ngrok.io/api/twilio/token/${roomSID}`);
      console.log(getToken.data.data);
      setToken(getToken.data.data);
    } catch (error) {
      console.log(error.response);
    }

    setToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTSzIxYjVkZjIyMjU1N2U5NTllYzIyOTYwNzkxYmMxYTRlLTE1OTg0Njg5NDIiLCJncmFudHMiOnsiaWRlbnRpdHkiOiJwYXRpZW50IiwidmlkZW8iOnt9fSwiaWF0IjoxNTk4NDY4OTQyLCJleHAiOjE1OTg0NzYxNDIsImlzcyI6IlNLMjFiNWRmMjIyNTU3ZTk1OWVjMjI5NjA3OTFiYzFhNGUiLCJzdWIiOiJBQzE2YmYyYTNlN2NjYTI3MjhiMzk3NTI1Yzg2ODg1N2MzIn0.gvlyKwEtQV7v6pakBBawhSrHi5gBgen6gIQ0bXf72Kg');
  }, [roomName, username]);

  const handleLogout = useCallback(event => {
    setToken(null);
  }, []);

  let render;
  if (token) {
    render = (
      <Room roomName={roomName} token={token} handleLogout={handleLogout} />
    );
  } else {
    render = (
      <Lobby
        username={username}
        roomName={roomName}
        handleUsernameChange={handleUsernameChange}
        handleRoomNameChange={handleRoomNameChange}
        handleSubmit={handleSubmit}
      />
    );
  }
  return render;
};

export default VideoChat;





