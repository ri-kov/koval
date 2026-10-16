import "./App.css";

function App() {
  return (
    <section className = "hero_section">
      <div id = "header">
        <img src="pictures/logo.png" alt="VALEN logo" id = "logo" />
        <button id = "hamburger" className = "hamburger" type = "button">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <a href="" className = "phone_head_link"><i className="fa-solid fa-phone" style={{ color: "#1f71ce" }}></i></a>
        <button className = "close_menu" id = "closeMenu" type = "button">
          <i className = "fa-solid fa-xmark"></i>
        </button>
        <div className = "nav_links" id = "mobileMenu">
          <img src="pictures/logo.png" alt="VALEN logo" className = "hamburger_logo" />
          <a className = "link home nav_link" href="index.html" data-section = "home"><img className = "link_icons" src="pictures/homeIcon.svg" alt="home-icon" />Home</a>
          <a className = "link nav_link" href = "current-vehicles/inventory.html"><img className = "link_icons" src="pictures/carPic7.svg" alt="car-icon" />Inventory</a>
          <a className = "link nav_link" href = "#sellForm" data-section = "sell-your-car"><img className = "link_icons" src="pictures/tagPic6.svg" alt="tag-icon" />Sell Your Car</a>
          <a href="#RepairServices" className = "link nav_link" data-section = "repair-services"><img className = "link_icons" src="pictures/repairPic4.svg" alt="wrench-icon" />Repair Services</a>
          <a href = "#AboutUs" className = "link nav_link" data-section = "about-us"><img className = "link_icons" src="pictures/userPic.svg" alt="user-icon" />About Us</a>
          <a href = "#ContactUs" className = "link nav_link" data-section = "contact"><img className = "link_icons" src="pictures/mailPic3.svg" alt="mail-icon" />Contact</a>
          <a className = "phone_num"><i className="fa-solid fa-phone" style={{color: "#1F71CE;"}}></i> (204) 999-9999</a>
          <a href="#bookRepairModal" data-bs-toggle="modal" className = "head_btn">Book Repair</a>
        </div>
      </div>
    </section>
  )
}
export default App;