# 💬 Prompt.md – Live Chat Room Project

## 📌 Track

**Fullstack Developers**

## 🎯 Theme

**WebSockets and Real-Time Bidirectional Communication**

---

## 🧠 Problem Statement

Traditional web applications use HTTP-based communication where the client sends a request and the server responds. This approach is not suitable for real-time applications like chat systems, where the server needs to push updates instantly to all connected clients.

The challenge is to build a system that enables **real-time, bidirectional communication** between multiple users.

---

## 💡 Solution

To solve this problem, we implemented a **Live Chat Room** using **Socket.io**, which enables real-time communication using WebSockets.

This application allows multiple users to:

* Connect to a server instantly
* Send and receive messages in real-time
* View typing indicators from other users

---

## ⚙️ Features Implemented

### ✅ Level 1 Features

* Established WebSocket connection between client and server
* Real-time message broadcasting using Socket.io
* Basic chat interface for sending and receiving messages

---

### ✅ Level 2 Features

* 👤 **User Identification**
  Users enter their name before joining the chat. Messages are displayed in the format:

  ```
  [Username]: Message
  ```

* ⌨️ **Typing Indicator**
  When a user types a message, other users see:

  ```
  Nakul is typing...
  ```

* 🔄 **Real-Time Updates**
  Messages and typing status are instantly updated across all connected clients.

---

## 🛠️ Tech Stack

### Frontend:

* React.js
* Socket.io-client
* CSS

### Backend:

* Node.js
* Express.js
* Socket.io

---

## 🔄 Application Flow

1. User enters a username and joins the chat
2. A WebSocket connection is established
3. When a user sends a message:

   * Client emits an event to the server
   * Server broadcasts the message to all clients
4. When a user types:

   * A typing event is emitted
   * Other users see a typing indicator

---

## 📚 Key Concepts Used

* WebSockets
* Real-time communication
* Event-driven architecture
* Client-server interaction using Socket.io

---

## 🚀 Future Scope (Level 3)

* Multiple chat rooms
* Private messaging
* Online users list
* Message timestamps
* Emoji support

---

## 🎯 Conclusion

This project demonstrates how WebSockets can be used to build real-time applications. It highlights the difference between traditional HTTP communication and event-driven systems, making it a strong foundation for building scalable chat applications.
