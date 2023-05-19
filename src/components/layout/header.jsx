const Header = () => {
  return (
    <>
      <header class="header">
        <div class="header__inner">
          {/* <!-- Brand --> */}
          <div class="header__brand">
            <div class="brand-wrap">
              {/* <!-- Brand logo --> */}
              <a href="/" class="brand-img stretched-link">
                <img
                  src="/img/icon/portalLogo.png"
                  alt="Portal"
                  class="Portal"
                />
              </a>
              {/* <!-- Brand title --> */}
            </div>
          </div>
          {/* <!-- End - Brand --> */}
          <div class="header__content">
            {/* <!-- Content Header - Left Side: --> */}
            <div class="header__content-start">
              {/* <!-- Navigation Toggler --> */}
              <button
                type="button"
                class="nav-toggler header__btn btn btn-icon btn-sm"
                aria-label="Nav Toggler"
              >
                <i class="psi-list-view"></i>
                버튼
              </button>
              {/* <!-- Searchbox --> */}
            </div>

            {/* <!-- Content Header - Right Side: --> */}
            <div class="header__content-end">
              {/* <!-- Mega Dropdown --> */}
              <div class="dropdown">
                {/* <!-- Toggler --> */}
                <button
                  class="header__btn btn btn-icon btn-sm"
                  type="button"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-label="Megamenu dropdown"
                  aria-expanded="false"
                >
                  <i class="psi-layout-grid"></i>
                </button>

                {/* <!-- Mega Dropdown Menu --> */}
                <div class="dropdown-menu dropdown-menu-end p-3 mega-dropdown">
                  <div class="row">
                    <div class="col-md-3">
                      {/* <!-- Pages List Group --> */}
                      <div class="list-group list-group-borderless">
                        <div class="list-group-item d-flex align-items-center border-bottom mb-2">
                          <div class="flex-shrink-0 me-2">
                            <i class="pli-file fs-4"></i>
                          </div>
                          <h5 class="flex-grow-1 m-0">Pages</h5>
                        </div>
                        <a
                          href="#"
                          class="list-group-item list-group-item-action"
                        >
                          FAQ
                        </a>
                        <a
                          href="#"
                          class="list-group-item list-group-item-action"
                        >
                          Screen Lock
                        </a>
                      </div>
                    </div>
                    <div class="col-md-3">
                      {/* <!-- Mailbox list group --> */}
                      <div class="list-group list-group-borderless mb-3">
                        <div class="list-group-item d-flex align-items-center border-bottom mb-2">
                          <div class="flex-shrink-0 me-2">
                            <i class="pli-mail fs-4"></i>
                          </div>
                          <h5 class="flex-grow-1 m-0">Mailbox</h5>
                        </div>
                        <a
                          href="#"
                          class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                        >
                          Inbox{" "}
                          <span class="badge bg-danger rounded-pill">14</span>
                        </a>
                      </div>

                      {/* <!-- News --> */}
                      <div class="list-group list-group-borderless">
                        <div class="list-group-item d-flex align-items-center border-bottom">
                          <div class="flex-shrink-0 me-2">
                            <i class="pli-calendar-4 fs-4"></i>
                          </div>
                          <h5 class="flex-grow-1 m-0">News</h5>
                        </div>
                        <small class="list-group-item">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Hic dolore unde autem, molestiae eum laborum
                          aliquid at commodi cum? Blanditiis.
                        </small>
                      </div>
                    </div>
                    <div class="col-md-3">
                      {/* <!-- List Group --> */}
                      <div class="list-group list-group-borderless">
                        <div class="list-group-item list-group-item-action d-flex align-items-start mb-3">
                          <div class="flex-shrink-0 me-3">
                            <i class="pli-data-settings fs-2"></i>
                          </div>
                          <div class="flex-grow-1 ">
                            <div class="d-flex justify-content-between align-items-start">
                              <a
                                href="#"
                                class="h6 d-block mb-1 stretched-link text-decoration-none"
                              >
                                Data Backup
                              </a>
                              <span class="badge bg-success rounded-pill ms-auto">
                                40%
                              </span>
                            </div>
                            <small class="text-muted">
                              Current usage of disks for backups.
                            </small>
                          </div>
                        </div>

                        <div class="list-group-item list-group-item-action d-flex align-items-start mb-3">
                          <div class="flex-shrink-0 me-3">
                            <i class="pli-support fs-2"></i>
                          </div>
                          <div class="flex-grow-1 ">
                            <a
                              href="#"
                              class="h6 d-block mb-1 stretched-link text-decoration-none"
                            >
                              Support
                            </a>
                            <small class="text-muted">
                              Have any questions ? please don't hesitate to ask.
                            </small>
                          </div>
                        </div>

                        <div class="list-group-item list-group-item-action d-flex align-items-start mb-3">
                          <div class="flex-shrink-0 me-3">
                            <i class="pli-computer-secure fs-2"></i>
                          </div>
                          <div class="flex-grow-1 ">
                            <a
                              href="#"
                              class="h6 d-block mb-1 stretched-link text-decoration-none"
                            >
                              Security
                            </a>
                            <small class="text-muted">
                              Our devices are secure and up-to-date.
                            </small>
                          </div>
                        </div>

                        <div class="list-group-item list-group-item-action d-flex align-items-start">
                          <div class="flex-shrink-0 me-3">
                            <i class="pli-map-2 fs-2"></i>
                          </div>
                          <div class="flex-grow-1 ">
                            <a
                              href="#"
                              class="h6 d-block mb-1 stretched-link text-decoration-none"
                            >
                              Location
                            </a>
                            <small class="text-muted">
                              From our location up here, we kept in close touch.
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3">
                      {/* <!-- Simple gallery --> */}
                      <div class="d-grid gap-2 ps-5 pe-2">
                        <div class="row g-1 rounded-3 overflow-hidden">
                          <div class="col-6 mt-0">
                            <img
                              class="img-fluid"
                              src="./assets/img/megamenu/img-1.jpg"
                              alt="thumbnails"
                              loading="lazy"
                            />
                          </div>
                          <div class="col-6 mt-0">
                            <img
                              class="img-fluid"
                              src="./assets/img/megamenu/img-3.jpg"
                              alt="thumbnails"
                              loading="lazy"
                            />
                          </div>
                          <div class="col-6">
                            <img
                              class="img-fluid"
                              src="./assets/img/megamenu/img-2.jpg"
                              alt="thumbnails"
                              loading="lazy"
                            />
                          </div>
                          <div class="col-6">
                            <img
                              class="img-fluid"
                              src="./assets/img/megamenu/img-4.jpg"
                              alt="thumbnails"
                              loading="lazy"
                            />
                          </div>
                          <div class="col-6">
                            <img
                              class="img-fluid"
                              src="./assets/img/megamenu/img-6.jpg"
                              alt="thumbnails"
                              loading="lazy"
                            />
                          </div>
                          <div class="col-6">
                            <img
                              class="img-fluid"
                              src="./assets/img/megamenu/img-5.jpg"
                              alt="thumbnails"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <a href="#" class="btn btn-primary">
                          Browse Gallery
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End - Mega Dropdown --> */}

              {/* <!-- Notification Dropdown --> */}
              <div class="dropdown">
                {/* <!-- Toggler --> */}
                <button
                  class="header__btn btn btn-icon btn-sm"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-label="Notification dropdown"
                  aria-expanded="false"
                >
                  <span class="d-block position-relative">
                    <i class="psi-bell"></i>
                    <span class="badge badge-super rounded bg-danger p-1">
                      <span class="visually-hidden">unread messages</span>
                    </span>
                  </span>
                </button>

                {/* <!-- Notification dropdown menu --> */}
                <div class="dropdown-menu dropdown-menu-end w-md-300px">
                  <div class="border-bottom px-3 py-2 mb-3">
                    <h5>Notifications</h5>
                  </div>

                  <div class="list-group list-group-borderless">
                    {/* <!-- List item --> */}
                    <div class="list-group-item list-group-item-action d-flex align-items-start mb-3">
                      <div class="flex-shrink-0 me-3">
                        <i class="psi-data-settings text-muted fs-2"></i>
                      </div>
                      <div class="flex-grow-1 ">
                        <a
                          href="#"
                          class="h6 d-block mb-0 stretched-link text-decoration-none"
                        >
                          Your storage is full
                        </a>
                        <small class="text-muted">
                          Local storage is nearly full.
                        </small>
                      </div>
                    </div>

                    {/* <!-- List item --> */}
                    <div class="list-group-item list-group-item-action d-flex align-items-start mb-3">
                      <div class="flex-shrink-0 me-3">
                        <i class="psi-file-edit text-blue-200 fs-2"></i>
                      </div>
                      <div class="flex-grow-1 ">
                        <a
                          href="#"
                          class="h6 d-block mb-0 stretched-link text-decoration-none"
                        >
                          Writing a New Article
                        </a>
                        <small class="text-muted">
                          Wrote a news article for the John Mike
                        </small>
                      </div>
                    </div>

                    {/* <!-- List item --> */}
                    <div class="list-group-item list-group-item-action d-flex align-items-start mb-3">
                      <div class="flex-shrink-0 me-3">
                        <i class="psi-speech-bubble-7 text-green-300 fs-2"></i>
                      </div>
                      <div class="flex-grow-1 ">
                        <div class="d-flex justify-content-between align-items-start">
                          <a
                            href="#"
                            class="h6 mb-0 stretched-link text-decoration-none"
                          >
                            Comment sorting
                          </a>
                          <span class="badge bg-info rounded ms-auto">NEW</span>
                        </div>
                        <small class="text-muted">
                          You have 1,256 unsorted comments.
                        </small>
                      </div>
                    </div>

                    {/* <!-- List item --> */}
                    <div class="list-group-item list-group-item-action d-flex align-items-start mb-3">
                      <div class="flex-shrink-0 me-3">
                        <img
                          class="img-xs rounded-circle"
                          src="./assets/img/profile-photos/7.png"
                          alt="Profile Picture"
                          loading="lazy"
                        />
                      </div>
                      <div class="flex-grow-1 ">
                        <a
                          href="#"
                          class="h6 d-block mb-0 stretched-link text-decoration-none"
                        >
                          Lucy Sent you a message
                        </a>
                        <small class="text-muted">30 minutes ago</small>
                      </div>
                    </div>
                    {/* <!-- List item --> */}
                    <div class="list-group-item list-group-item-action d-flex align-items-start mb-3">
                      <div class="flex-shrink-0 me-3">
                        <img
                          class="img-xs rounded-circle"
                          src="./assets/img/profile-photos/3.png"
                          alt="Profile Picture"
                          loading="lazy"
                        />
                      </div>
                      <div class="flex-grow-1 ">
                        <a
                          href="#"
                          class="h6 d-block mb-0 stretched-link text-decoration-none"
                        >
                          Jackson Sent you a message
                        </a>
                        <small class="text-muted">1 hours ago</small>
                      </div>
                    </div>

                    <div class="text-center mb-2">
                      <a href="#" class="btn-link">
                        Show all Notifications
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End - Notification dropdown --> */}

              {/* <!-- User dropdown --> */}
              <div class="dropdown">
                {/* <!-- Toggler --> */}
                <button
                  class="header__btn btn btn-icon btn-sm"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-label="User dropdown"
                  aria-expanded="false"
                >
                  <i class="psi-male"></i>
                </button>

                {/* <!-- User dropdown menu --> */}
                <div class="dropdown-menu dropdown-menu-end w-md-450px">
                  {/* <!-- User dropdown header --> */}
                  <div class="d-flex align-items-center border-bottom px-3 py-2">
                    <div class="flex-shrink-0">
                      <img
                        class="img-sm rounded-circle"
                        src="./assets/img/profile-photos/1.png"
                        alt="Profile Picture"
                        loading="lazy"
                      />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h5 class="mb-0">Aaron Chavez</h5>
                      <span class="text-muted fst-italic">
                        aaron_chavez@example.com
                      </span>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-7">
                      {/* <!-- Simple widget and reports --> */}
                      <div class="list-group list-group-borderless mb-3">
                        <div class="list-group-item text-center border-bottom mb-3">
                          <p class="h1 display-1 text-green">17</p>
                          <p class="h6 mb-0">
                            <i class="pli-basket-coins fs-3 me-2"></i> New
                            orders
                          </p>
                          <small class="text-muted">You have new orders</small>
                        </div>
                        <div class="list-group-item py-0 d-flex justify-content-between align-items-center">
                          Today Earning
                          <small class="fw-bolder">$578</small>
                        </div>
                        <div class="list-group-item py-0 d-flex justify-content-between align-items-center">
                          Tax
                          <small class="fw-bolder text-danger">- $28</small>
                        </div>
                        <div class="list-group-item py-0 d-flex justify-content-between align-items-center">
                          Total Earning
                          <span class="fw-bold text-primary">$6,578</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-5">
                      {/* <!-- User menu link --> */}
                      <div class="list-group list-group-borderless h-100 py-3">
                        <a
                          href="#"
                          class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                        >
                          <span>
                            <i class="pli-mail fs-5 me-2"></i> Messages
                          </span>
                          <span class="badge bg-danger rounded-pill">14</span>
                        </a>
                        <a
                          href="#"
                          class="list-group-item list-group-item-action"
                        >
                          <i class="pli-male fs-5 me-2"></i> Profile
                        </a>
                        <a
                          href="#"
                          class="list-group-item list-group-item-action"
                        >
                          <i class="pli-gear fs-5 me-2"></i> Settings
                        </a>

                        <a
                          href="#"
                          class="list-group-item list-group-item-action mt-auto"
                        >
                          <i class="pli-computer-secure fs-5 me-2"></i> Lock
                          screen
                        </a>
                        <a
                          href="#"
                          class="list-group-item list-group-item-action"
                        >
                          <i class="pli-unlock fs-5 me-2"></i> Logout
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End - User dropdown --> */}
              {/* <!-- Sidebar Toggler --> */}
              <button
                class="sidebar-toggler header__btn btn btn-icon btn-sm"
                type="button"
                aria-label="Sidebar button"
              >
                <i class="psi-dot-vertical"></i>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
