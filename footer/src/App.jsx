export function Navbar(){
  return (
    <nav className="navbar">
     <ul>
      <li className="nav-item">
        <a href="#">Dashboard</a>
      </li>
      <li className="nav-item">
        <a href="#">Widget</a></li>
      <li className="nav-item">
        <button aria-expanded="false">Apps</button>
        <ul className="sub-menu" aria-label="Apps">
          <li className="sub-item"><a href="#">Calendar</a></li>
          <li className="sub-item"><a href="#">Chat</a></li>
          <li className="sub-item"><a href="#">Email</a></li>
        </ul>
      </li>
     </ul>
    </nav>
  );
}
export function Footer(){
  return (
    <footer>
      <div className="about">
        <ul>
          <li><a href="#">Fitness Dashboard Services</a></li>
          <li><a href="#">Watch Videos Discord</a></li>
          <li><a href="#">Privacy Policy Terms and Conditions</a></li>
        </ul>
      </div>
      <p>&copy; 2024 Fitness Dashboard. All Rightd Reserved</p>
      <div className="icons">
        
        <a href="#"><i className="fas fa-gamepad"></i></a>
        <a href="#"><i className="fas fa-dove"></i></a> {/* bird */}
        <a href="#"><i className="fas fa-laptop"></i></a>
        <a href="#"><i className="fas fa-futbol"></i></a>
      </div>
    </footer>
  ) 
}
export function Body(){
  return (
  <p className="body-el">
    this is a new way of new life react is built on componen
    this is a new way of new life react is built on componen
    this is a new way of new life react is built on componen
    this is a new way of new life react is built on componen
    this is a new way of new life react is built on componen
    this is a new way of new life react is built on componen
    this is a new way of new life react is built on componen
    this is a new way of new life react is built on componen
    this is a new way of new life react is built on componen
    this is a new way of new life react is built on componen
    this is a new way of new life react is built on componen
    this is a new way of new life react is built on componen
    this is a new way of new life react is built on componen
    this is a new way of new life react is built on componen
    this is a new way of new life react is built on componen
    this is a new way of new life react is built on componen
    this is a new way of new life react is built on componen
    this is a new way of new life react is built on componen
    this is a new way of new life react is built on componen
    this is a new way of new life react is built on componen
  </p>)
}
export default function App() {
  return (
    <div>
      <Navbar />
      <Body/>
      <Footer/>

      
    </div>
  );
}