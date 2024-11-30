# Node.js Blog and Book Store with Authentication

This project is a **Blog and Book Store application** built with **Node.js**, **Express**, and **MongoDB**. The application allows users to **view, add, edit, and delete blogs and books**. It also provides user **authentication** with JWT tokens for secure access to restricted routes.

## Features

- **Authentication**: Users can register, log in, and log out using JWT-based authentication.
- **Blog System**: Users can create, edit, and delete blog posts.
- **Book Store**: Users can view, add, and delete books.
- **Responsive UI**: The frontend uses **Bootstrap** and **EJS** for dynamic content rendering.
- **CRUD Operations**: Full CRUD operations for blog posts and books.
- **Protected Routes**: Certain actions like adding, editing, and deleting are restricted to logged-in users.

## Technologies Used

- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Frontend**: EJS, Bootstrap
- **Password Encryption**: bcryptjs
- **API**: RESTful API using Express routes

## Installation

Follow these steps to get the project up and running:

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/blog-book-store.git
cd blog-book-store
```

### 2. Install Dependencies

Make sure you have **Node.js** and **npm** installed. Then, install the necessary dependencies:

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the root directory and add the following variables:

```
PORT=5000
MONGODB_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key
```

- **PORT**: Port where your app will run (default is 5000).
- **MONGODB_URI**: MongoDB connection URI.
- **JWT_SECRET**: Secret key for signing JWT tokens.

### 4. Run the Application

Start the application using:

```bash
npm start
```

The app will run on [http://localhost:5000](http://localhost:5000).

### 5. Register and Login

- Visit `/signup` to register a new user.
- Visit `/login` to log in with your credentials.
- After logging in, you will be redirected to the blog management page.

## API Endpoints

### **Authentication**

- **POST** `/api/auth/signup`: Register a new user.
- **POST** `/api/auth/login`: Log in with email and password.
- **GET** `/api/auth/logout`: Log out the user.

### **Blogs**

- **GET** `/api/blogs`: Fetch all blog posts.
- **POST** `/api/blogs`: Create a new blog (requires authentication).
- **GET** `/api/blogs/:id`: View a specific blog.
- **PUT** `/api/blogs/:id`: Update a specific blog (requires authentication).
- **DELETE** `/api/blogs/:id`: Delete a specific blog (requires authentication).

### **Books**

- **GET** `/api/books`: Fetch all books.
- **POST** `/api/books`: Add a new book (requires authentication).
- **GET** `/api/books/:id`: View a specific book.
- **PUT** `/api/books/:id`: Update a specific book (requires authentication).
- **DELETE** `/api/books/:id`: Delete a specific book (requires authentication).

## Screenshots
![Screenshot 2024-11-30 152156](https://github.com/user-attachments/assets/814b29a7-9413-4742-a1ec-62811baae55b)
![Screenshot 2024-11-30 152105](https://github.com/user-attachments/assets/f91b3e09-e60c-478d-883d-d712478c9ce6)
![Screenshot 2024-11-30 152139](https://github.com/user-attachments/assets/0dfb2d6e-1d7e-42f3-a604-3da3311fbd94)

## Contributing

1. Fork the repository.
2. Create a new branch for your changes.
3. Commit your changes.
4. Push your changes to your fork.
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
