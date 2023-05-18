import Link from "next/link";

const Sidebar = () => {
  return (
    <>
      <nav id="mainnav-container" className="mainnav">
        <div className="mainnav__inner">
          <div className="mainnav__top-content scrollable-content pb-5">
            <div className="mainnav__categoriy py-3">
              <h6 className="mainnav__caption mt-0 px-3 fw-bold">Portal</h6>
              <ul className="mainnav__menu nav flex-column">
                <li className="nav-item has-sub">
                  <Link href="/portal/dash/board">
                    <span className="nav-label ms-1">대시보드</span>
                  </Link>
                </li>
                <li className="nav-item has-sub">
                  <Link href="/portal">
                    <span className="nav-label ms-1">시스템</span>
                  </Link>
                  <ul className="mininav-content nav collapse">
                    <li className="nav-item">
                      <Link href="/portal/srvr/search">서버관리</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="#">사용자 관리</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item has-sub">
                  <Link href="#">
                    <span className="nav-label ms-1">알림</span>
                  </Link>
                  <ul className="mininav-content nav collapse">
                    <li className="nav-item">
                      <Link href="/noti/notiHst" className="">
                        알림 이력
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item has-sub">
                  <Link href="/portal">
                    <span className="nav-label ms-1">로그</span>
                  </Link>
                  <ul className="mininav-content nav collapse">
                    <li className="nav-item">
                      <Link href="/log/logHst">로그 이력</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="mainnav__categoriy py-3">
              <h6 className="mainnav__caption mt-0 px-3 fw-bold">TIBCO</h6>
              <ul className="mainnav__menu nav flex-column">
                <li className="nav-item has-sub">
                  <Link href="/tibco/tibSrvr">
                    <span className="nav-label ms-1">TIBCO 서버 관리</span>
                  </Link>
                </li>
                <li className="nav-item has-sub">
                  <Link href="#">
                    <span className="nav-label ms-1">EMS</span>
                  </Link>
                  <ul className="mininav-content nav collapse">
                    <li className="nav-item">
                      <Link href="/tibco/ems/emsSrvr">EMS 서버 관리</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/tibco/ems/emsSrvrHst">
                        EMS 서버 이력 조회
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/tibco/ems/emsProp">EMS 서버 속성 조회</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/tibco/ems/emsTopicQueue">
                        EMS Queue/Topic 추가
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/tibco/ems/emsService">EMS 서비스 조회</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/tibco/ems/emsSvceHst">
                        EMS 서비스 이력 조회
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="">TIBCO</div>
            <div className="mainnav__menu">category</div>
            <div className="mainnav__menu">category</div>
            <div className="mainnav__menu">category</div>
            <li className="nav-item has-sub">
              <a href="#" className="minnav-toggle nav-link">
                {/* <i className="pli-idea fs-5 me-2"></i> */}
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
