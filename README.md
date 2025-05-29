# Global Mind App

## Project Overview

Global Mind is a full-stack application designed to connect experts from around the world to tackle global challenges. The platform leverages AI to decompose complex problems into actionable micro-challenges, match experts based on skills and compatibility, and facilitate real-time collaboration.

## Project Structure

```
global-mind/
├── frontend/ (React + TypeScript + Tailwind)
├── backend/ (Node.js + Express + MongoDB)
├── package.json (root workspace)
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- MongoDB

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/global-mind.git
   cd global-mind
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

- Development mode:
  ```bash
  npm run dev
  ```

- Production build:
  ```bash
  npm run build
  ```

- Start production server:
  ```bash
  npm start
  ```

### Linting

```bash
npm run lint
```

## Features

- **Problem Submission**: Users can submit complex problems that are decomposed into micro-challenges using AI.
- **Expert Matching**: AI-powered matching of experts based on skills, compatibility, and availability.
- **Real-time Collaboration**: Video conferencing, shared whiteboard, and real-time chat for team collaboration.
- **AI Integration**: Mistral AI for problem decomposition, expert matching, and solution synthesis.

## Technology Stack

- **Frontend**: React, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Node.js, Express, MongoDB, Socket.io
- **AI**: Mistral AI API

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
