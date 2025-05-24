Zestora - A Vibrant Social Media Platform
Connect. Share. Vibe.
Zestora is a dynamic, full-stack social media platform inspired by the rich storytelling traditions of Bhojpuri culture. Built with modern web technologies, it empowers users to create posts, share images, like, comment, and follow others in a seamless, engaging experience. With a sleek React frontend, a robust Express.js backend, and MongoDB for scalable data storage, Zestora blends cultural heritage with cutting-edge tech to create a vibrant community.

Table of Contents

Features
Tech Stack
Project Structure
Getting Started
Prerequisites
Installation
Environment Variables
Running the Application


Usage
API Endpoints
Contributing
Future Enhancements
License
Contact


Features
Zestora offers a rich set of features designed for modern social media interaction:

User Authentication: Secure signup and signin with JWT-based authentication.
Dynamic Feed: Displays posts from followed users and suggested content, with infinite scroll (planned).
Post Creation: Create text posts (up to 280 characters) with optional image uploads, stored via Multer.
Engagement: Like and comment on posts, with real-time updates.
Responsive Design: Mobile-first UI with a desktop sidebar and mobile bottom navigation, styled with Tailwind CSS.
Cultural Aesthetic: Bhojpuri-inspired design with a saffron (#FF9933) and mustard (#FFC107) color palette, evoking vibrancy and heritage.
Single-Page App: React-powered frontend for smooth navigation without reloads.
Info Pages: About, Privacy Policy, and Contact sections, accessible via a single dynamic page.


Tech Stack
Frontend

React (18.2.0): JSX-based components for a dynamic, single-page application.
Tailwind CSS: Utility-first CSS for responsive, modern styling.
Font Awesome: Icons for likes, comments, and navigation.
Montserrat Font: Clean, modern typography for a professional look.

Backend

Node.js & Express.js: RESTful API for handling requests.
MongoDB & Mongoose: NoSQL database for storing users, posts, and comments.
Multer: File upload middleware for storing images in the uploads/ folder.
JWT (jsonwebtoken): Secure authentication with tokens.
Bcryptjs: Password hashing for user security.

Development Tools

Babel: Transpiles JSX for browser compatibility.
Nodemon: Auto-restarts the server during development.
http-server: Serves the frontend for local testing.


Project Structure
zestora/
├── client/                     # Frontend (React)
│   ├── index.html              # Landing page with signup/signin
│   ├── app.jsx                 # Home feed with post creation
│   ├── info.html               # About, Privacy, Contact page
│   ├── info.jsx                # Dynamic section switching
│   └── style.css               # Global styles (used in info.html)
├── server/                     # Backend (Express.js)
│   ├── models/                 # MongoDB schemas
│   │   ├── User.js             # User model
│   │   ├── Post.js             # Post model with image support
│   │   └── Comment.js          # Comment model
│   ├── routes/                 # API routes
│   │   ├── auth.js             # Signup/signin routes
│   │   ├── posts.js            # Post creation, likes, comments
│   │   └── users.js            # User profile and follow routes
│   ├── middleware/             # Custom middleware
│   │   ├── auth.js             # JWT verification
│   │   └── multer.js           # Image upload handling
│   ├── uploads/                # Folder for storing images
│   ├── index.js                # Main server file
│   └── .env                    # Environment variables
├── package.json                # Server dependencies
└── README.md                   # Project documentation


Getting Started
Prerequisites

Node.js (v16 or higher)
MongoDB (local or cloud, e.g., MongoDB Atlas)
npm or yarn
A modern web browser (Chrome, Firefox, etc.)

Installation

Clone the Repository:
git clone https://github.com/anuragchandr/CodeAlpha_Zestora
cd zestora


Install Backend Dependencies:
cd server
npm install


Install Frontend Dependencies:

The frontend uses CDNs for React, Tailwind, and Font Awesome, so no additional installation is required for the client/ directory.



Environment Variables
Create a .env file in the server/ directory with the following:
MONGODB_URI=mongodb://localhost:27017/zestora
JWT_SECRET=your_jwt_secret_key
PORT=5000

Running the Application

Start MongoDB:

Ensure MongoDB is running locally (mongod) or use a cloud URI.


Start the Backend:
cd server
nodemon index.js

The server will run on http://localhost:5000.

Serve the Frontend:
cd client
npx http-server

Open http://localhost:5173/ in your browser.



Usage

Signup/Signin:

Visit http://localhost:5173/
Sign up with a username, email, and password, or sign in with existing credentials.
The JWT token and user data are stored in localStorage.


Create a Post:

On the Home Feed (http://localhost:5173), click the “+” icon (mobile) or sidebar button (desktop).
Enter a description (up to 280 characters) and optionally upload an image.
Submit to post, and the new post appears at the top of the feed.


Interact with Posts:

Like posts (heart icon toggles red).
Click “Comment” to add comments (placeholder for now).
View posts with images displayed below the text.


Navigate:

Use the top navbar for search and profile access.
Desktop: Sidebar for Home, Explore, Profile, Settings, Logout.
Mobile: Bottom navigation for the same.
Visit http://localhost:8080/info for About, Privacy Policy, and Contact.




API Endpoints
The backend exposes the following RESTful endpoints:

Auth:
POST /api/auth/register: Create a new user (username, email, password).
POST /api/auth/login: Authenticate a user and return a JWT token.


Posts:
POST /api/posts: Create a post with text and optional image (multipart/form-data, requires JWT).
GET /api/posts: Fetch all posts, sorted by creation date.
POST /api/posts/:id/like: Like/unlike a post (requires JWT).
POST /api/posts/:id/comment: Add a comment to a post (requires JWT).


Users:
GET /api/users/:id: Get user profile data.
POST /api/users/:id/follow: Follow/unfollow a user (requires JWT).




Contributing
We welcome contributions to make Zestora even better! To contribute:

Fork the repository.
Create a feature branch (git checkout -b feature/YourFeature).
Commit your changes (git commit -m 'Add YourFeature').
Push to the branch (git push origin feature/YourFeature).
Open a pull request with a detailed description.

Please follow the Code of Conduct and ensure code adheres to ESLint and Prettier standards.

Future Enhancements

Infinite Scroll: Load posts dynamically as users scroll.
Image Preview: Show image previews in the post creation form.
Comments Modal: Implement a modal for viewing and adding comments.
Profile Page: Display user posts, followers, and following.
Notifications: Real-time alerts for likes, comments, and follows.
WebSockets: Enable live updates for the feed using Socket.IO.
Advanced Search: Search users and posts with filters.



Contact
For questions, feedback, or support:

Email: nrgchandra@gmail.com
GitHub Issues: Open an issue
Project Maintainer: Anurag Chandra (ECE student, NIT Patna)

Follow me for updates!

Built with ❤️ 

### note some features are still under develeopment ###
