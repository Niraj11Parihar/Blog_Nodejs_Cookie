let header = document.getElementById("header");

let div = " ";

div = `

<nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <div class="online-links">
                        <a class="navbar-brand" href="#"><i class="fa-brands fa-instagram"></i></a>
                        <a class="navbar-brand" href="#"><i class="fa-brands fa-square-facebook"></i></a>
                        <a class="navbar-brand" href="#"></a>
                    </div>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav m-auto w-25 d-flex justify-content-evenly">
                      <li class="nav-item">
                        <a class="nav-link active fw-bold " aria-current="page" href="blogPage">Home</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link fw-bold " href="viewblog">View</a>
                      </li>
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle fw-bold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                          Dropdown
                        </a>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="Login">Logout</a></li>
                          <li><a class="dropdown-item" href="profile">Profile</a></li>
                          <li><hr class="dropdown-divider"></li>
                          <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                      </li>
                      <li class="nav-item">
                        <a href="addblog" class="nav-link fw-bold ">Add Blogs</a>
                      </li>
                    </ul>
                    <form class="" role="search">
                      <!-- <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> -->
                      <button class="btn" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                    </form>
                  </div>
                </div>
              </nav>

`;

header.innerHTML = div;
