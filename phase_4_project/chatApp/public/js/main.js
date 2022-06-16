const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');
const roomName = document.getElementById('room-name');
const userList = document.getElementById('users');

// Get username and room from URL
    const { username, room } = Qs.parse(location.search, {
          ignoreQueryPrefix: true,
    });

    const socket = io();

// Join the chatbox
    
    socket.emit('joinRoom', { username, room });

// When user entered the chatbox
    
    socket.on('roomUsers', ({ room, users }) => {
      outputRoomName(room);
      outputUsers(users);
    
    });

// Message from server
 
  socket.on('message', (message) => {
    console.log(message);
    outputMessage(message);

// to create Scroll down in chatbox

    chatMessages.scrollTop = chatMessages.scrollHeight;
     });

// Message submit

    chatForm.addEventListener('submit', (e) => {
    e.preventDefault();

  // Get message text
    
    let msg = e.target.elements.msg.value;
      msg = msg.trim();

    if (!msg) {
      return false;
  }

  // Emit message to server
  
    socket.emit('chatMessage', msg);

  //To Clear input
    
    e.target.elements.msg.value = '';
    e.target.elements.msg.focus();
    
  });

// Output message to DOM of chat.HTML
  function outputMessage(message) 
  {
      const div = document.createElement('div');
          div.classList.add('message');
    
      const p = document.createElement('p');
          p.classList.add('meta');
          p.innerText = message.username;
          p.innerHTML += `<span>${message.time}</span>`;
          div.appendChild(p);
    
      const para = document.createElement('p');
    
          para.classList.add('text');
          para.innerText = message.text;
          div.appendChild(para);
          document.querySelector('.chat-messages').appendChild(div);
}

// Add room name to DOM of chat.HTML
      function outputRoomName(room)
      {
        roomName.innerText = room;
      }

// Add users to DOM chat.html

    function outputUsers(users) {
      userList.innerHTML = '';
      users.forEach((user) => {
      
        const li = document.createElement('li');
        li.innerText = user.username;
        userList.appendChild(li);
      
      });
    }

//Prompt the user before leave chat room

    document.getElementById('leave-btn').addEventListener('click', () =>{

      const leaveRoom = confirm('Are you sure you want to leave the chatroom?');

      if (leaveRoom) 
        {
          window.location = '../index.html';
        } 
      else 
      {
      
      }
    });
