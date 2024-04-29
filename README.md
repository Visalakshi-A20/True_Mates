## Technologies Required

- **Node.js and Express.js**: For building the backend server and handling HTTP requests.
- **JWT**: For user authentication and token generation.
- **Sequelize**: As an ORM (Object-Relational Mapping) for interacting with the PostgreSQL database.
- **GCP Storage**: For storing media files like photos.
- **PostgreSQL**: As the relational database for storing user data, posts, etc.


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
