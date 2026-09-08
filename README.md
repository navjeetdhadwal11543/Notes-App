# Notes-App

A simple and clean notes application built with **React**, **TypeScript**, and **Material UI**. Create, view, and store your personal notes — all saved locally in your browser so nothing is lost on refresh.

## Features

- Create notes with a title and content
- View all your notes in a styled list
- Notes persist using `localStorage` (no backend needed)
- Each note records its creation date automatically
- Modern UI built with Material UI and gradient styling
- Fully responsive layout (mobile, tablet, desktop)

## Tech Stack

- **React 19** — UI library
- **TypeScript** — type safety
- **Vite** — fast dev server and build tool
- **Material UI (MUI)** — component library and styling
- **React Router DOM** — routing (installed, ready for future pages)
- **ESLint** — code linting

## Project Structure

```
src/
├── App.tsx               # Root component, manages notes state & localStorage
├── Components/
│   ├── Header.tsx        # Top banner of the app
│   ├── NoteInput.tsx     # Form to create a new note
│   └── NoteList.tsx      # Renders the list of saved notes
├── Interface/
│   └── Notes.ts          # TypeScript interfaces (Note, props)
├── App.css
└── index.css
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- npm (comes with Node.js)

### Installation

```bash
# Install dependencies
npm install

# Start the dev server (auto-opens in your browser)
npm run dev
```

### Available Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start the dev server with hot reload     |
| `npm run build`   | Type-check and build for production      |
| `npm run preview` | Preview the production build locally     |
| `npm run lint`    | Run ESLint over the project              |

## How It Works

- Notes are stored in React state inside `App.tsx`.
- Every time the notes change, they are saved to `localStorage` via `useEffect`.
- On page load, the app reads `localStorage` to restore your previous notes.
- Each note has an `id`, `title`, `content`, and `date`.

## Roadmap / Ideas

- Delete a note (button is currently visual only)
- Edit an existing note
- Search and filter notes
- Categories or tags
- Dark mode

## Author

**Navjeet Singh**
