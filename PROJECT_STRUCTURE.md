# FastTrack Virtuals - Project Structure

```
fasttrack-virtuals-react/
│
├── public/                          # Static assets
│   ├── fav-icon.svg
│   ├── fasttrack-logo.svg
│   ├── fasttrack-logo-footer.svg
│   ├── hero-img.jpg
│   ├── benefit.png
│   ├── stressed.png
│   ├── right-column.png
│   ├── cta-bg.png
│   ├── quote-up.svg
│   ├── service-line-bg.svg
│   ├── icons/
│   │   ├── customer-service.svg
│   │   ├── money-bag.svg
│   │   └── task.svg
│   └── partners/
│       └── innopower.png
│
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx           # Navigation header
│   │   │   ├── Footer.jsx           # Site footer
│   │   │   └── index.js             # Layout exports
│   │   │
│   │   └── ui/
│   │       ├── Button.jsx           # Reusable button component
│   │       ├── Input.jsx            # Form input component
│   │       ├── Checkbox.jsx         # Checkbox component
│   │       └── index.js             # UI exports
│   │
│   ├── pages/
│   │   ├── Home.jsx                 # Landing page
│   │   ├── Login.jsx                # Login page
│   │   ├── Register.jsx             # Registration page
│   │   ├── ForgotPassword.jsx       # Password reset page
│   │   └── AboutUs.jsx              # About page
│   │
│   ├── hooks/
│   │   └── useForm.js               # Custom form handling hook
│   │
│   ├── utils/
│   │   ├── constants.js             # App constants
│   │   └── validators.js            # Validation functions
│   │
│   ├── App.jsx                      # Main app component
│   ├── main.jsx                     # App entry point
│   └── index.css                    # Global styles
│
├── old-html-backup/                 # Backup of original HTML files
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── about-us.html
│   ├── forgot-password.html
│   └── assets/
│
├── .env.example                     # Environment variables template
├── .gitignore                       # Git ignore rules
├── eslint.config.js                 # ESLint configuration
├── index.html                       # HTML entry point
├── package.json                     # Dependencies and scripts
├── postcss.config.js                # PostCSS configuration
├── tailwind.config.js               # Tailwind CSS configuration
├── vite.config.js                   # Vite configuration
├── README.md                        # Project documentation
├── MIGRATION_GUIDE.md               # Migration documentation
└── PROJECT_STRUCTURE.md             # This file
```

## Component Hierarchy

```
App
├── Routes
│   ├── Home
│   │   ├── Header
│   │   ├── Hero Section
│   │   ├── Statistics Section
│   │   ├── Benefits Section
│   │   ├── Services Section
│   │   └── Footer
│   │
│   ├── Login
│   │   ├── Input (email)
│   │   ├── Input (password)
│   │   ├── Checkbox (remember)
│   │   └── Button (submit)
│   │
│   ├── Register
│   │   ├── Input (email)
│   │   ├── Input (password)
│   │   ├── Checkbox (terms)
│   │   └── Button (submit)
│   │
│   ├── ForgotPassword
│   │   ├── Input (email)
│   │   └── Button (submit)
│   │
│   └── AboutUs
│       ├── Header
│       ├── Content Section
│       └── Footer
│
└── ToastContainer
```

## Key Features by Component

### Layout Components

#### Header

- Responsive navigation
- Logo with link to home
- Navigation links (Services, About Us)
- Get Started CTA button
- Mobile menu toggle

#### Footer

- Company logo
- Quick links
- Copyright information
- Powered by section

### UI Components

#### Button

- Multiple variants (primary, secondary, outline)
- Multiple sizes (sm, md, lg)
- Gradient backgrounds
- Hover effects
- Focus states

#### Input

- Label support
- Error message display
- Validation states
- Accessible
- Customizable

#### Checkbox

- Custom styling
- Label support
- Accessible
- Form integration

### Pages

#### Home

- Hero section with CTA
- Statistics section
- Benefits showcase
- Services grid
- Fully responsive

#### Login

- Email/password form
- Remember me checkbox
- Forgot password link
- Sign up link
- Form validation

#### Register

- Email/password form
- Terms acceptance
- Sign in link
- Form validation

#### ForgotPassword

- Email input
- Back to login link
- Form validation

#### AboutUs

- Company information
- Mission statement
- Service overview

## Hooks

### useForm

- Form state management
- Validation handling
- Error management
- Submit handling
- Form reset

## Utilities

### constants.js

- Route definitions
- Services data
- Benefits data

### validators.js

- Email validation
- Password validation
- Required field validation
- Form-specific validators

## Styling Approach

### Tailwind CSS

- Utility-first approach
- Custom color palette
- Custom breakpoints
- Responsive design
- Custom fonts

### Custom Classes

- `.plusjakartasans` - Plus Jakarta Sans font
- `.logo-warm-filter` - Logo filter effect

## State Management

Currently using:

- Component state (useState)
- Custom hooks (useForm)
- React Router for navigation

Future considerations:

- Context API for global state
- React Query for server state
- Zustand/Redux for complex state

## Performance Optimizations

- Code splitting by route
- Lazy loading components
- Optimized images
- Minimal bundle size
- Fast refresh in development

## Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus management
- Screen reader support

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ features
- CSS Grid and Flexbox
- CSS Custom Properties
