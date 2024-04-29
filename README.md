## Technologies Required

- **Node.js and Express.js**: For building the backend server and handling HTTP requests.
- **JWT**: For user authentication and token generation.
- **Sequelize**: As an ORM (Object-Relational Mapping) for interacting with the PostgreSQL database.
- **GCP Storage**: For storing media files like photos.
- **PostgreSQL**: As the relational database for storing user data, posts, etc.

## Requirements

### Req 1

#### Express.js App with PostgreSQL
- Initialize a Node.js project, install Express.js and Sequelize.
- Set up a PostgreSQL database and configure Sequelize to interact with it.

#### User Registration
- Create routes for user registration.
- Use Sequelize to define a User model with fields: name, email, and password.
- Implement validation for required fields and password hashing for security.

#### User Login and JWT Token
- Implement routes for user login.
- Upon successful authentication, issue a JWT token to the user.

#### Creating Posts with Photos
- Implement routes for creating posts.
- Each post should have a description and a photo.
- Use GCP Storage to store the photos.
- Configure Sequelize to handle post data and its relationship with users.

### Req 2

#### Adding Created Timestamp
- Modify the Post model to include a field for the creation timestamp.

#### Formatting Time Difference
- Implement a function to calculate the time difference between the current time and the post's creation time.
- Format this difference into a user-friendly format like "2s ago", "10d ago", etc.

#### Multiple Photos per Post
- Update the Post model to allow multiple photos per post, with a maximum of 5.
- Handle the logic to upload and retrieve multiple photos.

#### Editing Post Description
- Implement an endpoint to edit the description of a post.

### Req 3

#### Pagination
- Implement pagination for retrieving posts.
- Allow users to specify a page number and limit the number of posts returned per page.

#### Adding Friends
- Implement functionality for users to add friends.
- Create a new model for storing friendships and define the necessary routes and logic for adding and retrieving friends.

#### Friends List with Mutual Friends Count
- Create an endpoint to retrieve a user's friends list.
- Include information about each friend and the number of mutual friends between the user and each friend.
