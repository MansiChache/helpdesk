
# Helpdesk Ticketing System (Fullstack MERN App)

This is a full-stack Helpdesk Ticketing System built using the **MERN** stack (MongoDB, Express.js, React.js, Node.js). It supports user authentication, role-based dashboards (User, Operation Team, Technical Support),.

## Project Structure

```
helpdesk-app-fullstack/
│
├── client/              # React frontend
│   └── ...              # Pages, components, and assets
│
├── server/              # Node.js + Express backend
│   ├── models/          # Mongoose models
│   ├── routes/          # Express route handlers
│   ├── .env             # Environment variables
│   └── server.js        # Entry point for backend
│
└── README.md            # This file
```

---

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **Icons**: Lucide-react, React-icons

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/helpdesk-app-fullstack.git
cd helpdesk-app-fullstack
```

### 2. Setup the Backend

```bash
cd server
npm install
```

Create a `.env` file inside `/server` and add:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret
```

Then run the server:

```bash
node server.js
```

### 3. Setup the Frontend

```bash
cd ../client
npm install
```
Then run thr frontend
```bash
npm start
```


## Roles

- **User**: Can raise and view tickets.
- **Operation Team**: Views assigned tickets, manages team assignment.
- **Technical Support**: Resolves and updates tickets.

---

## Contact

For queries or issues, feel free to raise an issue or reach out.
