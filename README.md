# Todolist Project
This project let you create account and use your todolists

## Features
- 🗂 CRUD for todo lists — create, read, update, and delete todo lists
- 📝 CRUD for tasks inside each list — add, update, and delete individual tasks
- ✅ Task status updates — mark tasks as completed or active
- ⚡ Optimistic updates — tasks update instantly on the UI without waiting for server response
- 🔍 Todo list filtering — view all, active, or completed lists
- 🔒 User authentication — login via an external registration service
- 🛡 Captcha protection — prevents automated login attempts
- 🌐 Backend integration — interacts with a server via REST API
- 🚪 Private routes — restricted access to authenticated users only
- 🎞 UI enhancements — slider on first load, skeleton screens, and progress bar for subsequent loading
- 🔄 Automatic data loading and syncing — seamless interaction with stored todo lists

## Installation

1. Clone the repository
```bash
git clone https://github.com/dyermantovich/todolist.git
cd todolist
```

2. Install dependencies
```bash
pnpm i
```

3. Start the development server
```bash
pnpm run dev
```

4. Optional: build for production
```bash
pnpm run build
pnpm run preview
```