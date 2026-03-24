# Quick Start Guide

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

## Installation

1. **Install dependencies**

```bash
npm install
```

2. **Start development server**

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Commands

| Command           | Description                       |
| ----------------- | --------------------------------- |
| `npm run dev`     | Start development server with HMR |
| `npm run build`   | Build for production              |
| `npm run preview` | Preview production build locally  |
| `npm run lint`    | Run ESLint to check code quality  |

## Project Overview

### Pages & Routes

| Route              | Component      | Description                |
| ------------------ | -------------- | -------------------------- |
| `/`                | Home           | Landing page with services |
| `/login`           | Login          | User login form            |
| `/register`        | Register       | User registration form     |
| `/forgot-password` | ForgotPassword | Password reset form        |
| `/about-us`        | AboutUs        | Company information        |

### Key Features

✅ **Modern React 19**

- Latest React features
- Concurrent rendering
- Automatic batching

✅ **Vite Build Tool**

- Lightning-fast HMR
- Optimized builds
- ES modules

✅ **Tailwind CSS**

- Utility-first styling
- Custom design system
- Responsive by default

✅ **React Router v7**

- Client-side routing
- Nested routes support
- Navigation guards ready

✅ **Form Handling**

- Custom useForm hook
- Built-in validation
- Error handling

✅ **Toast Notifications**

- Success/error messages
- Customizable position
- Auto-dismiss

## Component Usage Examples

### Button Component

```jsx
import Button from '@components/ui/Button'


<Button variant="primary" size="md">
  Click Me
</Button>


<Button variant="outline" size="lg">
  Learn More
</Button>
```

### Input Component

```jsx
import Input from "@components/ui/Input";

<Input
  label="Email"
  type="email"
  name="email"
  placeholder="your@email.com"
  value={email}
  onChange={handleChange}
  error={errors.email}
/>;
```

### useForm Hook

```jsx
import useForm from "@hooks/useForm";

const { values, errors, handleChange, handleSubmit } = useForm({
  initialValues: { email: "", password: "" },
  validate: (values) => {
    const errors = {};
    if (!values.email) errors.email = "Required";
    return errors;
  },
  onSubmit: (values) => {
    console.log(values);
  },
});
```

## Folder Structure

```
src/
├── components/     # Reusable components
├── pages/          # Page components
├── hooks/          # Custom React hooks
├── utils/          # Utility functions
├── App.jsx         # Main app component
└── main.jsx        # Entry point
```

## Styling Guide

### Using Tailwind Classes

```jsx
<div className="flex items-center justify-between p-4 bg-ftvprimary">
  <h1 className="text-2xl font-bold text-white">Title</h1>
</div>
```

### Custom Colors

- `ftvprimary` - Primary brand color (#db9523)
- `ftvsecondary` - Secondary color (#6360F1)
- `ftvblack` - Text color (#030303)
- `ftvgrey` - Gray shades
- `ftvblue` - Blue accent

### Responsive Breakpoints

```jsx
<div className="w-full md:w-1/2 lg:w-1/3">Responsive width</div>
```

## Development Tips

### Path Aliases

Use path aliases for cleaner imports:

```jsx
// Instead of
import Button from "../../components/ui/Button";

// Use
import Button from "@components/ui/Button";
```

### Hot Module Replacement

Changes are reflected instantly without page reload.

### ESLint

Run `npm run lint` to check code quality before committing.

### Environment Variables

Create `.env` file from `.env.example`:

```env
VITE_API_URL=your_api_url
```

Access in code:

```jsx
const apiUrl = import.meta.env.VITE_API_URL;
```

## Building for Production

1. **Build the project**

```bash
npm run build
```

2. **Preview the build**

```bash
npm run preview
```

3. **Deploy the `dist` folder** to your hosting service

## Common Tasks

### Adding a New Page

1. Create component in `src/pages/`
2. Add route in `src/App.jsx`
3. Update navigation in `Header.jsx`

### Adding a New Component

1. Create component in `src/components/ui/` or `src/components/layout/`
2. Export from `index.js` in the folder
3. Import using path alias

### Adding Form Validation

1. Create validation function in `src/utils/validators.js`
2. Use with `useForm` hook
3. Display errors with Input component

## Troubleshooting

### Port Already in Use

```bash
# Kill process on port 5173
npx kill-port 5173

# Or use different port
npm run dev -- --port 3000
```

### Module Not Found

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

```bash
# Clear Vite cache
rm -rf node_modules/.vite
npm run build
```

## Next Steps

1. ✅ Run `npm install`
2. ✅ Start dev server with `npm run dev`
3. ✅ Open `http://localhost:5173`
4. ✅ Start building!

## Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [React Router](https://reactrouter.com)

## Support

For questions or issues:

1. Check the README.md
2. Review MIGRATION_GUIDE.md
3. Contact the development team

Happy coding! 🚀
