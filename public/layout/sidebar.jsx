const Sidebar = () => {
  return (
    <>
      <nav id="mainnav-container" className="mainnav">
        <div className="mainnav__inner">
          <div className="mainnav__top-content scrollable-content pb-5">
            <div className="mainnav__profile mt-3 d-flex3">
              {/* <div className="mainnav-toggle text-center py-2 collapsed">
                <img
                  className="mainnav__avatar img-md rounded-circle"
                  src="/img"
                  alt="profile"
                />
              </div> */}
              <div className="mainnav-content collapse d-mn-max"></div>
            </div>
            <div className="mainnav__categoriy">category</div>
            <div className="mainnav__categoriy">category</div>
            <div className="mainnav__categoriy">category</div>
            <li className="nav-item has-sub">
              <a href="#" className="minnav-toggle nav-link active">
                <i className="pli-idea fs-5 me-2"></i>
                <span className="nav-label ms-1">Active Item</span>
              </a>
              <ul className="mininav-content nav collapse show">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Sub Item
                  </a>
                </li>
              </ul>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
