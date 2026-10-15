# 3D Design Portfolio

An interactive 3D design portfolio featuring a rotating cube layout, elegant gold accents, smooth animations, and an immersive dark theme. The portfolio showcases Home, About, Resume, Portfolio, and Contact sections with an animated 3D background.

##  Features

- Interactive 3D rotating cube layout
- Modern dark theme with gold accents
- Animated background with gold particles and a wireframe ring
- Smooth transitions and animations
- Home, About, Resume, Portfolio, and Contact sections
- Reusable React components
- Organized project structure
- Customizable profile information, resume, and portfolio projects

##  Technologies Used

- React
- JavaScript (JSX)
- CSS
- Three.js / React Three Fiber
- Tailwind CSS
- Framer Motion
- Vite

##  Design Theme

- **Background:** Dark obsidian (`#0b0d12`, `#12151d`)
- **Primary Accent:** Gold (`#d4af37`)
- **Glow Effect:** Soft gold (`#f2cf6b`)
- **Typography:** Cormorant Garamond, Inter, and JetBrains Mono

## 📁 Project Structure

```text
3D_Design_portfolio/
│
├── public/
│   └── images and other static assets
│
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── CubeStage.jsx
│   │   │   └── Navbar.jsx
│   │   │
│   │   ├── sections/
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Resume.jsx
│   │   │   ├── Portfolio.jsx
│   │   │   └── Contact.jsx
│   │   │
│   │   ├── three/
│   │   │   └── AmbientScene.jsx
│   │   │
│   │   └── ui/
│   │       ├── SocialIcons.jsx
│   │       └── TabSwitcher.jsx
│   │
│   └── data/
│       ├── portfolio.js
│       ├── profile.js
│       └── resume.js
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

*Note: The root-level files shown above are typical examples. Keep the names consistent with the actual files in your repository.*

##  Getting Started

Follow these steps to run the project on your local computer.

### 1. Clone the Repository

Open your terminal or PowerShell and run:

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
```

Replace `YOUR-USERNAME` and `YOUR-REPOSITORY` with your actual GitHub username and repository name.

### 2. Open the Project Folder

```bash
cd YOUR-REPOSITORY
```

Replace `YOUR-REPOSITORY` with the folder name created by Git when cloning.

### 3. Install Dependencies

Make sure Node.js and npm are installed, then run:

```bash
npm install
```

This installs the packages required by the project.

### 4. Start the Development Server

```bash
npm run dev
```

Open the local URL shown in the terminal, usually:

```text
http://localhost:5173
```

### 5. Build for Production

To create a production-ready build, run:

```bash
npm run build
```

### 6. Preview the Production Build

```bash
npm run preview
```

##  Customization

### Update Profile Information

Edit:

```text
src/data/profile.js
```

Use this file for profile-related content, according to the data structure defined in the project.

### Update Portfolio Projects

Edit:

```text
src/data/portfolio.js
```

Add or modify project details and image paths according to the existing data format.

### Update Resume Information

Edit:

```text
src/data/resume.js
```

Update the resume details to match your experience, education, and skills.

### Add Images

Place your profile image and project screenshots inside the `public/` folder. Update the image paths in the relevant data files.

### Customize Styling

Edit:

```text
src/index.css
```

to customize global styles, colors, typography, spacing, and other visual properties.

##  Main Components

| Component | Purpose |
|---|---|
| `App.jsx` | Main application component |
| `main.jsx` | Application entry point |
| `CubeStage.jsx` | 3D cube layout |
| `Navbar.jsx` | Navigation interface |
| `AmbientScene.jsx` | Animated 3D background |
| `Home.jsx` | Home section |
| `About.jsx` | About section |
| `Resume.jsx` | Resume section |
| `Portfolio.jsx` | Portfolio projects |
| `Contact.jsx` | Contact section |
| `SocialIcons.jsx` | Social media icons |
| `TabSwitcher.jsx` | Tab-switching interface |

##  Notes

- Run commands from the project root directory, where `package.json` is located.
- Make sure Node.js and npm are installed before running the project.
- Check `package.json` for the exact scripts and dependencies configured in your project.
- Keep profile information, resume details, and project content updated in the `src/data/` directory.

##  Author

**Kashi Bangash**

3D Design Portfolio