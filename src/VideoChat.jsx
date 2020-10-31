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
      const getToken = await axios.get(`https://a263650b57ce.ngrok.io/api/twilio/token/${roomName}/${username}`);
      console.log(getToken.data.data);
      setToken(getToken.data.data);
    } catch (error) {
      console.log(error.response);
    }
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





