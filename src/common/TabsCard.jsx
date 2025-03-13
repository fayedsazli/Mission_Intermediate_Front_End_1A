const TabsCard = () => {
  return (
    <ul className="nav nav-underline mx-5">
      <li className="nav-item">
        <a className="nav-link active text-danger" aria-current="page" href="#">
          Semua Kelas
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-black" href="#">
          Pemasaran
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-black" href="#">
          Desain
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-black" href="#">
          Pengembangan Diri
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-black" href="#">
          Bisnis
        </a>
      </li>
    </ul>
  );
};

export default TabsCard;
