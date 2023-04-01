function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Joel's Movie Collection
      </a>
      <ul>
        <li>
          <a href="/HomePage">Home</a>
          <a href="/Podcasts">Podcasts</a>
          <a href="/Movies">Movies</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
