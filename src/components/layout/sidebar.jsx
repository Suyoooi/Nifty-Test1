"use client";
// This is a client component 👈🏽

import { useState } from "react";
import Link from "next/link";

const TIBCO_SERVER_EMS_LIST = [
  { title: "EMS 서버 관리" },
  { title: "EMS 서버 이력 조회" },
  { title: "EMS 속성 조회" },
  { title: "EMS Queue/Topic 추가" },
  { title: "EMS 서비스 조회" },
  { title: "EMS 서비스 이력 조회" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleButtonClick = (e) => {
    console.log(isOpen);
    setIsOpen(!isOpen);

    // if (isOpen) {
    //   return "mainnav";
    // } else {
    //   return "";
    // }
  };

  return (
    <>
      <div className={isOpen}>
        <nav id="mainnav-container" class="mainnav">
          <div class="mainnav__inner">
            {/* <!-- Navigation menu --> */}
            <div class="mainnav__top-content scrollable-content pb-5">
              {/* <!-- End - Profile widget --> */}
              <div class="mainnav__categoriy py-3">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h4 class="mainnav__caption mt-0 px-3 fw-bold">TIBCO</h4>
                  <img
                    src="/img/icon/vector.png"
                    style={{ width: 20, height: 20, cursor: "pointer" }}
                  />
                </div>
                <h5 class="mainnav__caption mt-0 px-3 fw-bold">
                  <img
                    src="/img/icon/tibcoServer.png"
                    style={{ width: 16, height: 16 }}
                  />
                  TIBCO 서버
                </h5>
                <h5 class="mainnav__caption mt-0 px-3 fw-bold">
                  <img
                    src="/img/icon/ems.png"
                    style={{ width: 16, height: 16 }}
                  />
                  EMS
                </h5>
                <ul class="mainnav__menu nav flex-column">
                  {TIBCO_SERVER_EMS_LIST.map((data) => (
                    <li class="nav-item" key={data.title}>
                      <a href="#" class="nav-link mininav-toggle collapsed">
                        <i class="pli-home fs-5 me-2"></i>
                        <span
                          class="nav-label mininav-content ms-1"
                          style={{ color: "#666666" }}
                        >
                          {data.title}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div class="mainnav__categoriy py-3">
                <h6 class="mainnav__caption mt-0 px-3 fw-bold">Submenus</h6>
                <ul class="mainnav__menu nav flex-column">
                  {/* <li class="nav-item has-sub">
                  <a href="#" class="mininav-toggle nav-link">
                    <i class="pli-data-center fs-5 me-2"></i>
                    <span class="nav-label ms-1">Submenu</span>
                  </a>
                  <ul class="mininav-content nav collapse">
                    <li class="nav-item">
                      <a href="#" class="nav-link">
                        Submenu Items
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="#" class="nav-link">
                        Submenu Items
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="#" class="nav-link">
                        Submenu Items
                      </a>
                    </li>
                  </ul>
                </li> */}
                  <li class="nav-item has-sub">
                    <a href="#" class="mininav-toggle nav-link active">
                      <i class="pli-idea fs-5 me-2"></i>
                      <span class="nav-label ms-1">Active Item</span>
                    </a>
                    <ul class="mininav-content nav collapse">
                      <li class="nav-item">
                        <a href="#" class="nav-link">
                          Submenu Items
                        </a>
                      </li>
                      <li class="nav-item">
                        <a href="#" class="nav-link active">
                          Active state
                        </a>
                      </li>
                      <li class="nav-item">
                        <a href="#" class="nav-link">
                          Submenu Items
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- Bottom navigation menu --> */}
            <div class="mainnav__bottom-content border-top pb-2">
              <ul id="mainnav" class="mainnav__menu nav flex-column">
                <li class="nav-item has-sub">
                  <a
                    href="#"
                    class="nav-link mininav-toggle collapsed"
                    aria-expanded="false"
                  >
                    <i class="pli-unlock fs-5 me-2"></i>
                    <span class="nav-label ms-1">Logout</span>
                  </a>
                  <ul class="mininav-content nav flex-column collapse">
                    <li class="nav-item">
                      <a href="#" class="nav-link">
                        This device only
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="#" class="nav-link">
                        All Devices
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link disabled"
                        href="#"
                        tabindex="-1"
                        aria-disabled="true"
                      >
                        Lock screen
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            {/* <!-- End - Bottom navigation menu --> */}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
