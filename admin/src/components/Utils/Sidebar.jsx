import { useDispatch, useSelector } from "react-redux";

const Sidebar = () => {
  const dispatch = useDispatch();

  const handClick = (id) => {
    const elements = document.querySelectorAll(".menu-item");
    elements.forEach((element) => {
      element.classList.remove("active");
      element.classList.remove("open");
    });

    // Add active class to the clicked element
    const clickedElement = document.getElementById(id);
    if (clickedElement) {
      clickedElement.classList.add("active");
      clickedElement.classList.toggle("open");
    }
  };
  return (
    <>
      <aside
        id="layout-menu"
        className="layout-menu menu-vertical menu bg-menu-theme"
      >
        <div className="app-brand demo">
          <a href="/dashboard" className="app-brand-link">
            <span className="app-brand-logo demo"></span>
            <span className="app-brand-text demo menu-text fw-bold ms-2">
              Fruitable Admin
            </span>
          </a>
          <a
            href="javascript:void(0);"
            className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
          >
            <i className="bx bx-chevron-left bx-sm align-middle" />
          </a>
        </div>
        <div className="menu-inner-shadow" />
        <ul className="menu-inner py-1">
          {/* Dashboards */}
          <li
            className="menu-item active open"
            id="dashboardNav"
            onClick={(e) => handClick("dashboardNav")}
          >
            <a href="/dashboard" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-home-circle" />
              <div data-i18n="Dashboards">Dashboards</div>
              {/* <div class="badge bg-danger rounded-pill ms-auto">5</div> */}
            </a>
          </li>
          <li
            className="menu-item "
            id="usersNav"
            onClick={(e) => handClick("usersNav")}
          >
            <a href="javascript:void(0);" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-layout" />
              <div data-i18n="Layouts">Users</div>
            </a>
            <ul className="menu-sub">
              <li className="menu-item">
                <a href="/users" className="menu-link">
                  <div data-i18n="Without menu">List</div>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
