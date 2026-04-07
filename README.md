# 💬 Live Chat Room (Fullstack WebSockets Project)

A real-time chat application built using **Node.js, Express, React, and Socket.io** that enables instant bidirectional communication between users.

---

## 🚀 Project Overview

Traditional HTTP APIs are one-way (request → response). This project demonstrates **real-time communication** using **WebSockets**, where the server can push updates instantly to clients — just like WhatsApp or Messenger.

---

## 🎯 Features

### ✅ Level 1

* Real-time messaging using WebSockets
* Instant broadcast to all connected users
* Client-server connection using Socket.io

### ✅ Level 2

* 👤 User identification (enter name before chat)
* 💬 Messages displayed as: `[Username]: Message`
* ⌨️ Typing indicator ("Nakul is typing...")
* 🔄 Live updates across multiple tabs/users

---

## 🛠️ Tech Stack

### Frontend:

* React.js
* Socket.io-client
* CSS (custom styling)

### Backend:

* Node.js
* Express.js
* Socket.io
* CORS

---

## 📁 Project Structure

```
live-chat-room/
│
├── backend/
│   ├── server.js
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── App.js
    │   ├── App.css
    │   └── index.js
    └── package.json
```

---

## ⚙️ Installation & Setup

### 🔹 1. Clone the repository

```
git clone https://github.com/your-username/live-chat-room.git
cd live-chat-room
```

---

### 🔹 2. Setup Backend

```
cd backend
npm install
node server.js
```

👉 Server will run on: `http://localhost:5000`

---

### 🔹 3. Setup Frontend

```
cd frontend
npm install
npm start
```

👉 App will run on: `http://localhost:3000`

---

## 🔗 How It Works

1. User enters a username and joins the chat
2. Messages are sent using:

```
socket.emit("send_message")
```

3. Server broadcasts messages:

```
io.emit("receive_message")
```

4. All connected clients receive updates instantly

---

## ⌨️ Typing Indicator Flow

* When user types → event emitted
* Server broadcasts typing status
* Other users see:

```
Nakul is typing...
```

---

## 🧪 Testing

* Open **multiple browser tabs**
* Join with different usernames
* Send messages and verify:

  * Real-time updates ✔️
  * Username display ✔️
  * Typing indicator ✔️

---

## 🎨 UI Features

* Gradient background
* Chat bubbles (like WhatsApp)
* Responsive layout
* Clean input and button styling

---

## 🚀 Future Improvements (Level 3 Ideas)

* 🏠 Chat rooms (multiple rooms)
* 🟢 Online users list
* 🔒 Private messaging
* ⏱️ Message timestamps
* 😀 Emoji support

---

## 📸 Demo

> Add screenshots or GIF here (optional)

---

## 📌 Key Learning Outcomes

* WebSockets vs HTTP
* Real-time communication
* Event-based architecture
* Fullstack integration (React + Node.js)

---

## 🤝 Contributing

Feel free to fork this repo and improve it!

---

## 📄 License

This project is open-source and available under the MIT License.

---

## 🙌 Acknowledgement

Built as part of a Fullstack Developer track project focusing on **real-time communication using Socket.io**.
