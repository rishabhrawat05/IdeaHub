# IdeaHub: Share, Collaborate, and Innovate 💡🤝

We all encounter unique ideas for solving problems in our daily lives, but often we lack a platform to share and develop these ideas collaboratively. **IdeaHub** is the solution. This application is designed to provide a space where everyone can post their ideas, receive constructive feedback, and unlock rewards for innovative solutions.

## 📋 Table of Contents
- [Key Features](#key-features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## ✨ Key Features

### 1. Post Your Ideas
- **Express Your Thoughts:** Share your unique ideas regarding various problem statements with the community.
- **Detailed Descriptions:** Provide a comprehensive description of your idea, including the problem it addresses and potential solutions.
- **Image Support:** Add visual representations to better communicate your ideas.

### 2. Get Feedback
- **Community Interaction:** Engage with a community of like-minded individuals who can provide valuable feedback on your ideas.
- **Upvote System:** Users can upvote the feedback they find most useful, ensuring the best suggestions rise to the top.

### 3. Track Your Ideas
- **My Ideas Dashboard:** View all your posted ideas in one place.
- **View Idea Details:** Access detailed views of individual ideas with all associated feedback.

### 4. Leaderboard & Recognition
- **Best Ideas:** Discover the most popular and innovative ideas in the community.
- **Leaderboard:** Track top contributors and idea creators.

## 🛠️ Technologies Used

### Frontend
- **React.js** - Modern UI library for building interactive user interfaces
- **React Router** - Client-side routing
- **Reactstrap** - Bootstrap components for React
- **Bootstrap** - CSS framework for responsive design
- **Remix Icon** - Icon library
- **React Toastify** - Toast notifications

### Backend
- **Spring Boot** - Java-based backend framework
- **Spring Security** - Authentication and authorization
- **Spring Data JPA** - Database access layer
- **JWT** - Token-based authentication

### Database
- **MySQL** - Relational database management system

### Tools
- **Postman** - API testing and development

## 🚀 Getting Started

### Prerequisites

Before running this project, ensure you have the following installed:

- **Java 11 or higher**
- **Node.js** (v14 or higher) and **npm**
- **MySQL** (v5.7 or higher)
- **Maven** (for building the backend)
- **Postman** (optional, for API testing)

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/rishabhrawat05/IdeaHub.git
cd IdeaHub
```

### 2. Backend Setup

Navigate to the backend directory:

```bash
cd problem-solving-platform
```

#### Configure the Database

Create a MySQL database and update the `application.yml` or `application.properties` file with your database credentials:

```yaml
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/ideahub?createDatabaseIfNotExist=true
    username: root
    password: yourpassword
    driver-class-name: com.mysql.cj.jdbc.Driver
  jpa:
    hibernate:
      ddl-auto: update
    show-sql: true
```

#### Build and Run the Backend

```bash
./mvnw clean install
./mvnw spring-boot:run
```

The backend server will start on `http://localhost:8080`

### 3. Frontend Setup

Navigate to the frontend directory:

```bash
cd ../problem-solver
```

#### Install Dependencies

```bash
npm install
```

#### Configure API Endpoint

Update the API base URL in your service files if needed (typically in `src/services/`).

#### Run the Frontend

```bash
npm start
```

The frontend application will start on `http://localhost:3000`

## 💻 Usage

### Sign Up/Log In
1. Create a new account or log in to your existing account
2. Authentication is handled via JWT tokens

### Post an Idea
1. Click the "Post Idea" button
2. Fill in the required fields:
   - Title
   - Description
   - Optional: Upload an image
3. Submit your idea to share it with the community

### Interact with Ideas
1. Browse ideas on the home page
2. Click "View Idea" to see full details
3. Provide feedback and suggestions on other users' ideas
4. Upvote helpful feedback

### Track Your Contributions
- Visit "My Ideas" to see all your posted ideas
- Check the leaderboard to see top contributors

## 📁 Project Structure

```
IdeaHub/
├── problem-solving-platform/     # Spring Boot backend
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/crowdwork/problem_solving_platform/
│   │   │   │       ├── controller/      # REST API endpoints
│   │   │   │       ├── model/           # Entity models
│   │   │   │       ├── repository/      # Data access layer
│   │   │   │       ├── service/         # Business logic
│   │   │   │       ├── exception/       # Custom exceptions
│   │   │   │       └── config/          # Configuration files
│   │   │   └── resources/
│   │   │       └── application.yml      # Application configuration
│   └── pom.xml                          # Maven dependencies
│
└── problem-solver/                      # React frontend
    ├── public/                          # Static files
    ├── src/
    │   ├── components/                  # Reusable components
    │   ├── pages/                       # Page components
    │   ├── services/                    # API service calls
    │   ├── auth/                        # Authentication utilities
    │   ├── App.js                       # Main application component
    │   └── index.js                     # Application entry point
    └── package.json                     # NPM dependencies
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/YourFeatureName
   ```
3. **Commit your changes**
   ```bash
   git commit -m "Add some feature"
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/YourFeatureName
   ```
5. **Open a Pull Request**

### Guidelines
- Follow the existing code style
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

## 🌟 Features In Development

- Real-time notifications
- Advanced search and filtering
- Idea categories and tags
- User profiles with achievements
- Private messaging between users

## 📧 Contact

For questions or support, please open an issue on the [GitHub repository](https://github.com/rishabhrawat05/IdeaHub/issues).

---

Made with ❤️ by [rishabhrawat05](https://github.com/rishabhrawat05)
