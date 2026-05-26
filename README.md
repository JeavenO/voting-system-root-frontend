VotePro Portal

VotePro is a modern, secure, and professional-grade electronic voting application. It provides a sleek, "Premium Dark" user interface designed for high-end executive functionality, ensuring a seamless and secure voting experience.

##  Key Features

* **Premium Dark UI:** A fully customized, glassmorphism-inspired aesthetic using inline CSS-in-JS for maximum performance and build reliability.
* **Secure Authentication Guard:** Integrated `PrivateRoute` logic ensures that only authenticated users can access the dashboard, voting, and results modules.
* **Real-time Analytics:** The Results module features live pulse indicators and dynamic progress bars for instant, clear data visualization.
* **Seamless Navigation:** Intuitive flow with "Back" navigation and clear entry points for new user registration.
* **Interactive UX:** Responsive design with subtle hover animations and professional success modals for a refined interaction feel.

##  Technical Stack

* **Frontend:** React, React Router
* **State Management:** LocalStorage (for session persistence)
* **Networking:** Axios (with custom configuration)
* **Styling:** CSS-in-JS (Inline Object Styling)

##  Getting Started

### Prerequisites
* Node.js installed
* An active backend API (as configured in `api/axiosConfig.js`)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd frontend
Install dependencies:

Bash
npm install
Run the application:

Bash
npm run dev
 Project Architecture
The application is structured to ensure security and maintainability:

pages/: Contains the core views (Login, Register, Dashboard, Voting, Results).

components/: Contains reusable logic and UI guards (e.g., PrivateRoute.jsx).

api/: Centralized API configuration for consistent server communication.

 License
This project is proprietary and intended for secure organizational voting purposes.