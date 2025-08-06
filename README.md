# mlvs.me - Gaming Community Platform

A modern, production-ready gaming community platform built with Next.js 15, featuring beautiful glassmorphism design and comprehensive community features.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Glassmorphism Design**: Beautiful glass-like effects throughout the interface
- **Authentication System**: Modal-based auth with social login support
- **Blog Posts**: Create, share, and interact with community posts
- **File Sharing**: Upload and share game mods, maps, and other files
- **Real-time Interactions**: Like, comment, and bookmark functionality
- **Notification System**: Stay updated with community activity
- **Responsive Design**: Mobile-first approach with perfect desktop experience
- **Dark/Light Theme**: Complete theme switching with system preference support
- **Docker Ready**: Containerized for easy deployment with Coolify

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS with glassmorphism effects
- **UI Components**: shadcn/ui with Radix UI primitives
- **Icons**: Lucide React
- **State Management**: React Context + useReducer
- **Deployment**: Docker with Coolify support

## 📦 Installation

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Local Development

1. Clone the repository:
\`\`\`bash
git clone https://github.com/your-username/mlvs-me-platform.git
cd mlvs-me-platform
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

3. Start the development server:
\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Docker Deployment

1. Build the Docker image:
\`\`\`bash
docker build -t mlvs-me-platform .
\`\`\`

2. Run the container:
\`\`\`bash
docker run -p 3000:3000 mlvs-me-platform
\`\`\`

### Coolify Deployment

1. Connect your repository to Coolify
2. Set the build command: \`npm run build\`
3. Set the start command: \`npm start\`
4. Configure environment variables as needed
5. Deploy!

## 🎨 Design System

### Glassmorphism Effects

The platform uses consistent glassmorphism styling throughout:

- **Cards**: Semi-transparent backgrounds with backdrop blur
- **Modals**: Glass-like overlays with smooth animations
- **Navigation**: Translucent header and sidebar elements
- **Interactive Elements**: Hover effects with glass morphing

### Color Scheme

- **Primary**: Purple to pink gradients
- **Background**: Dark slate with purple accents
- **Glass Effects**: White/black overlays with blur
- **Text**: High contrast for accessibility

## 🏗️ Project Structure

\`\`\`
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles with glassmorphism
├── components/            # Reusable components
│   ├── features/          # Feature-specific components
│   ├── layout/            # Layout components
│   ├── modals/            # Modal components
│   └── providers/         # Context providers
├── contexts/              # React contexts
├── data/                  # Sample data and mock APIs
├── types/                 # TypeScript type definitions
├── lib/                   # Utility functions
└── public/                # Static assets
\`\`\`

## 🔧 Configuration

### Environment Variables

Create a \`.env.local\` file in the root directory:

\`\`\`env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=mlvs.me
\`\`\`

### Theme Configuration

The platform supports both dark and light themes with system preference detection. Themes can be customized in:

- \`components/providers/ThemeProvider.tsx\`
- \`app/globals.css\`
- \`tailwind.config.js\`

## 🚀 Deployment

### Production Build

\`\`\`bash
npm run build
npm start
\`\`\`

### Docker Production

\`\`\`bash
docker build -t mlvs-me-platform .
docker run -p 3000:3000 mlvs-me-platform
\`\`\`

### Coolify Deployment

1. Push your code to a Git repository
2. Connect the repository to Coolify
3. Configure build settings:
   - Build Command: \`npm run build\`
   - Start Command: \`npm start\`
   - Port: \`3000\`
4. Deploy and enjoy!

## 🎯 Features Overview

### Authentication
- Modal-based login/register
- Social authentication (GitHub, Google)
- Role-based permissions (admin, creator, member)
- Password visibility toggle

### Content Management
- Rich text blog posts with markdown support
- File upload with drag-and-drop
- Category and tag system
- Like, comment, and share functionality

### Community Features
- User profiles with statistics
- Notification system
- Real-time interactions
- Follow/unfollow system

### User Interface
- Responsive design for all devices
- Glassmorphism effects throughout
- Smooth animations and transitions
- Accessible keyboard navigation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: \`git checkout -b feature/amazing-feature\`
3. Commit your changes: \`git commit -m 'Add amazing feature'\`
4. Push to the branch: \`git push origin feature/amazing-feature\`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful components
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first styling
- [Lucide](https://lucide.dev/) for the icon library
- [Radix UI](https://www.radix-ui.com/) for the accessible primitives

## 📞 Support

For support, email support@mlvs.me or join our Discord community.

---

Built with ❤️ by the mlvs.me team
\`\`\`
