const Navbar = ({ setPage }) => {
  return (
    <nav className="navbar navbar-light bg-white w-100 mb-3">
      <div className="container">

      <a className="navbar-brand ms-3" onClick={(e) => { e.preventDefault(); setPage("app"); }} href="#">
        <img
          src="/videobelajar-logo.svg"
          width="237"
          height="56"
          className="d-inline-block align-top"
          alt="Videobelajar Logo Logo"
        />
      </a>
      </div>
    </nav>
  );
};

export default Navbar;
