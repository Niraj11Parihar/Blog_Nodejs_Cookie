document.addEventListener("DOMContentLoaded", function () {
  // Header content
  let header = document.getElementById("header");

  let element = `
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <!-- Logo -->
      <a class="navbar-brand d-flex align-items-center" href="#">
        <img src="../assets/images/logo (2).png" alt="Logo" class="img-fluid" style="height: 60px; margin-right: 10px;" />
        <span class="fw-bold">My Blog</span>
      </a>

      <!-- Online Links -->
      <div class="online-links">
        <a class="navbar-brand" href="#"><i class="fa-brands fa-instagram"></i></a>
        <a class="navbar-brand" href="#"><i class="fa-brands fa-square-facebook"></i></a>
      </div>

      <!-- Navbar Toggler -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar Links -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav m-auto w-50 shadow-sm d-flex justify-content-evenly">
          <li class="nav-item">
            <a class="nav-link active fw-bold" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle fw-bold"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="true"
            >
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/Logout">Logout</a></li>
              <li><a class="dropdown-item" href="viewblog">Changes</a></li>
              <li><a class="dropdown-item" href="addproduct">Add Product</a></li>
              <li><a class="dropdown-item" href="addblog">AddBlog</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="shop" class="nav-link fw-bold">Books</a>
          </li>
        </ul>

        <!-- Search Bar -->
        <form class="d-flex" role="search">
          <div class="search-container">
            <input
              type="text"
              class="search-input form-control"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
          <button
            class="search-button btn"
            type="button"
            onclick="toggleSearch()"
          >
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
    </div>
  </nav>
  `;

  header.innerHTML = element;
});
