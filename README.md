# Pancake Tutorial 🥞

An interactive web application for learning to make delicious pancakes step-by-step. This project features authentication, user dashboards, responsive design, and Firebase integration for a complete cooking guide experience.

## Features

✨ **Interactive Recipe Guide** - Step-by-step pancake cooking instructions with detailed images
🔐 **Authentication System** - User login and registration with Firebase
📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
🖼️ **Image Gallery** - High-quality images showing each cooking step
💾 **Firebase Integration** - Backend support for authentication and future data storage
🚀 **Live Preview** - Serve locally with npm start

## Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript
- **Backend:** Firebase (Authentication & Hosting)
- **Server:** Node.js with http-server
- **Version Control:** Git & GitHub

## Project Structure

```
pancake-tutorial/
├── public/
│   ├── index.html           # Home page
│   ├── auth.html            # Authentication page
│   ├── app.html             # Main application/recipe page
│   ├── script.js            # JavaScript functionality
│   ├── style.css            # Styling
│   ├── Batter.jpg           # Step 1: Batter preparation
│   ├── chutney.jpg          # Step 2: Chutney/topping
│   ├── cooking_pancake.jpg  # Step 3: Cooking process
│   └── final.jpg            # Step 4: Final result
├── firebase.json            # Firebase configuration
├── .firebaserc              # Firebase project settings
├── package.json             # Project dependencies
└── README.md               # This file
```

## Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)
- Git

### Local Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/khaleedshaik62/pancake-tutorial.git
   cd pancake-tutorial
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   The application will automatically open at `http://localhost:8000`

## Usage

### Home Page (index.html)

- Welcome screen with introduction to the pancake tutorial
- Navigation to authentication and main application

### Authentication (auth.html)

- User login and registration
- Firebase authentication integration
- Secure user session management

### Recipe Dashboard (app.html)

- Detailed step-by-step pancake recipe
- High-quality instructional images
- Easy-to-follow cooking guide

## Features Walkthrough

### Step 1: Prepare Batter

View ingredients and mixing instructions

### Step 2: Add Toppings/Chutney

Learn about flavor combinations and toppings

### Step 3: Cook the Pancake

Master the cooking technique and timing

### Step 4: Final Presentation

Plating tips and serving suggestions

## Firebase Deployment

To deploy to Firebase Hosting:

```bash
firebase login
firebase deploy
```

Your application will be hosted at a Firebase URL.

## Configuration

### Firebase Setup

Update Firebase credentials in `firebase.json` and `.firebaserc` with your project details.

### Development Server Port

The default port is 8000. To use a different port, modify the `start` script in `package.json`:

```json
"scripts": {
  "start": "http-server public -p YOUR_PORT -o"
}
```

## Scripts

- `npm start` - Starts the local development server on port 8000

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Contact & Support

- **GitHub:** [@khaleedshaik62](https://github.com/khaleedshaik62)
- **Email:** khaleedshaik27@gmail.com
- **LinkedIn:** [in/khaleedshaik](https://linkedin.com/in/khaleedshaik)

## Acknowledgments

- Firebase for backend services
- All contributors and users who help improve this project

---

**Enjoy making delicious pancakes! 🥞✨**

Last updated: June 3, 2026
