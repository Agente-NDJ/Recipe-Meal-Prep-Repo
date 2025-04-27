🍽️ Meal Planner – Recipe & Meal Planning App
A modern, user-friendly web app for browsing recipes, planning meals, and generating shopping lists. Built with React, powered by Vite, and integrated with Firebase and Stripe for user authentication and monetization.

🚀 Features
Recipe Discovery: Search and browse a rich library of recipes.

Meal Planning: Drag-and-drop meal planner for weekly scheduling.

Personal Accounts: Sign up/log in with Google (Firebase).

Shopping Lists: Auto-generate and manage your grocery lists.

Premium Features: Subscribe for unlimited plans and other perks.

Mobile Responsive: Works great on mobile, tablet, and desktop.

Save Favorites: Bookmark your favorite recipes.

Custom Diets: Filter by dietary needs (vegan, gluten-free, etc.)

🛠️ Tech Stack
Frontend: React (with TypeScript), Vite, Zustand, React Query, Tailwind CSS

Backend: Firebase (Auth & Firestore)

Payments: Stripe

Testing: React Testing Library, Cypress

Deployment: Vercel

🚧 Project Structure
text
/src
  /api             # API and service calls
  /components      # Reusable UI elements
  /hooks           # Custom hooks
  /pages           # Page-level components
  /stores          # Zustand state
  /types           # TypeScript types
  /utils           # Utility functions
🚀 Getting Started
1. Clone the Repository
bash
git clone https://github.com/yourusername/meal-planner.git
cd meal-planner
2. Install Dependencies
bash
npm install
3. Environment Variables
Create a .env file in the root with the following:

text
VITE_FIREBASE_KEY=your_firebase_key
VITE_FIREBASE_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_STRIPE_KEY=your_stripe_public_key
4. Start the App
bash
npm run dev
App runs at http://localhost:5173

🧪 Testing
Unit/Component Tests:
npm run test

E2E Tests:
npx cypress open

🚀 Deployment
Vercel:
Push to main branch for automatic deploy (see .github/workflows/deploy.yml).

💡 Monetization
Freemium model: core features are free, subscribe for premium

Stripe integration for secure payments

Affiliate links and ads supported (future)

🤝 Contributing
Pull requests, issues, and suggestions are welcome!
Please see CONTRIBUTING.md for guidelines.

📄 License
MIT

🙏 Acknowledgements
React

Vite

Firebase

Stripe

Tailwind CSS

Happy cooking and coding! 🍳