# To-Do List Application

A beautiful and functional to-do list application built with Next.js 14 and React, featuring **local storage persistence**.

## Features

✨ **Core Features:**
- ➕ Add new tasks
- ✅ Mark tasks as completed
- 🗑️ Delete individual tasks
- 🎯 Filter tasks (All, Active, Completed)
- 🧹 Clear all completed tasks
- 💾 Auto-save to browser's local storage
- 📊 Real-time statistics (Total, Active, Completed)
- ⏰ Timestamp for each task
- 🎨 Beautiful modern UI
- 📱 Fully responsive design

## How It Works

### Local Storage Functionality
- Tasks are automatically saved to browser's localStorage
- Data persists even after closing the browser
- No backend or database required
- Instant auto-save on any change

### Technologies Used
- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Local Storage API** - Data persistence
- **React Hooks** - State management

## Usage

1. **Add a Task**: Type in the input field and press Enter or click "Add"
2. **Complete a Task**: Click the checkbox next to the task
3. **Delete a Task**: Hover over the task and click the delete icon
4. **Filter Tasks**: Use the filter buttons to view All, Active, or Completed tasks
5. **Clear Completed**: Click "Clear Completed" to remove all finished tasks

## Data Structure

```typescript
interface Todo {
  id: number          // Unique timestamp-based ID
  text: string        // Task description
  completed: boolean  // Completion status
  createdAt: string   // Creation timestamp
}
```

## Local Storage

All tasks are stored in localStorage under the key `todos` as a JSON string:

```javascript
localStorage.getItem('todos')  // Retrieves all tasks
localStorage.setItem('todos', JSON.stringify(todos))  // Saves tasks
```

## Installation & Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Visit http://localhost:3000/todo
```

## Build & Deploy

```bash
# Build for production
npm run build

# Export for static hosting
npm run export

# Deploy to GitHub Pages
npm run deploy
```

## Browser Support

Works on all modern browsers with localStorage support:
- ✅ Chrome/Edge
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers

## Tips

💡 **Pro Tips:**
- Use keyboard shortcut: Press Enter to add tasks quickly
- Completed tasks show with strikethrough text
- Tasks are deleted on hover, preventing accidental clicks
- Statistics update in real-time
- Empty state messages guide user actions

## Future Enhancements

- 📅 Due dates and reminders
- 🏷️ Categories and tags
- 🔍 Search functionality
- 🌙 Dark mode toggle
- 📤 Export/Import tasks
- 🔔 Notifications for due tasks
- 🌐 Cloud sync across devices

## License

MIT
