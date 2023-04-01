function HomePage(props: any) {
  return (
    <>
      <div className="row align-items-center py-3">
        <div className="col-2 ps-3">
          <img
            src="./JoelHilton.jpg"
            alt="JoelHilton"
            className="img-fluid rounded-circle"
          />
        </div>
        <div className="col-10">
          <h1 className="fw-bold">Welcome to Joel's Movie Collection</h1>
        </div>
      </div>
    </>
  );
}

export default HomePage;

// the two angled brackets signify a React.Fragment (basically like a blank div)
