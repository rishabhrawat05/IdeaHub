

# IdeaHub: Share, Collaborate, and Innovate 💡🤝

We all encounter unique ideas for solving problems in our daily lives, but often we lack a platform to share and develop these ideas collaboratively. **IdeaHub** is the solution. This application is designed to provide a space where everyone can post their ideas, receive constructive feedback, and unlock rewards for innovative solutions.

## Key Features

### 1. Post Your Ideas
- **Express Your Thoughts:** Share your unique ideas regarding various problem statements with the community.
- **Detailed Descriptions:** Provide a comprehensive description of your idea, including the problem it addresses and potential solutions.

### 2. Get Feedback
- **Community Interaction:** Engage with a community of like-minded individuals who can provide valuable feedback on your ideas.
- **Upvote System:** Users can upvote the feedback they find most useful, ensuring the best suggestions rise to the top.


## How It Works

### Sign Up/Log In
- Create an account or log in to your existing account to start sharing and interacting.

### Post an Idea
- Use the "Post Idea" button to submit your idea. Fill in the required fields, including title, description, and relevant tags.

### Interact with the Community
- View and comment on other users' ideas. Provide feedback and suggestions to help improve and refine their concepts.

## Technologies Used

- **Frontend:** React.js
- **Backend:** Spring Boot
- **Database:** MySQL
- **API Testing:** Postman

## Languages Used

- **Java** (for backend)
- **JavaScript** (for frontend)

## Getting Started

### Prerequisites

- Java 11 or higher
- Node.js and npm
- MySQL
- Postman (for API testing)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/ideahub.git
   cd ideahub
   ```

2. **Backend Setup:**

   - Navigate to the `problem-solving-platform` directory:

     ```sh
     cd problem-solving-platform
     ```

   - Configure the database connection in `application.yml`:

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
     ```

   - Run the Spring Boot application:

     ```sh
     ./mvnw spring-boot:run
     ```

3. **Frontend Setup:**

   - Navigate to the `problem-solver` directory:

     ```sh
     cd ../problem-solver
     ```

   - Install dependencies:

     ```sh
     npm install
     ```

   - Start the React application:

     ```sh
     npm start
     ```


## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

