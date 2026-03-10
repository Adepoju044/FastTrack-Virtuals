# FastTrack Virtuals - React Application

A modern, responsive React application for FastTrack Virtuals built with best practices and latest technologies.

## 🚀 Tech Stack

- **React 19** - Latest React with modern features
- **Vite** - Fast build tool and dev server
- **React Router v7** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **React Toastify** - Toast notifications
- **ESLint** - Code linting

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   └── ui/
│       ├── Button.jsx
│       ├── Input.jsx
│       └── Checkbox.jsx
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── ForgotPassword.jsx
│   └── AboutUs.jsx
├── hooks/
│   └── useForm.js
├── App.jsx
├── main.jsx
└── index.css
```

## 🎯 Features

- ✅ Modular component architecture
- ✅ Reusable UI components
- ✅ Custom hooks for form handling
- ✅ Client-side routing with React Router
- ✅ Responsive design with Tailwind CSS
- ✅ Form validation
- ✅ Toast notifications
- ✅ Modern ES6+ JavaScript
- ✅ Path aliases for clean imports

## 🛠️ Installation

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview production build:

```bash
npm run preview
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Styling

The project uses Tailwind CSS with custom configuration:

- Custom color palette matching brand colors
- Custom breakpoints for responsive design
- Custom fonts (Plus Jakarta Sans, Space Grotesk)
- Utility classes for common patterns

## 🔧 Path Aliases

The project uses path aliases for cleaner imports:

- `@` → `/src`
- `@components` → `/src/components`
- `@pages` → `/src/pages`
- `@hooks` → `/src/hooks`
- `@utils` → `/src/utils`
- `@assets` → `/src/assets`

## 📱 Responsive Breakpoints

- `mobilesm`: 375px
- `mobilemd`: 425px
- `mobilelg`: 576px
- `mobilelandscape`: 768px
- `tabletmd`: 900px
- `tabletlg`: 1024px

## 🎯 Best Practices Implemented

1. **Component Modularity** - Small, reusable components
2. **Custom Hooks** - Shared logic extraction
3. **Form Handling** - Centralized form state management
4. **Error Handling** - Proper validation and error messages
5. **Code Organization** - Clear folder structure
6. **Performance** - React 19 optimizations
7. **Accessibility** - Semantic HTML and ARIA labels
8. **Type Safety** - PropTypes validation (can be extended to TypeScript)

## 🚀 Deployment

Build the project:

```bash
npm run build
```

The `dist` folder will contain the production-ready files.

## 📄 License

Private - FastTrack Virtuals

## 👥 Contributing

This is a private project. For any changes, please contact the development team.
