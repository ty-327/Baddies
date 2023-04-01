function HomePage(props: any) {
  return (
    <>
      <div className="row">
        <div className="col-2">
          <img src="./JoelHilton.jpg" alt="JoelHilton" />
        </div>
      </div>

      <div className="col align-self-center text-start">
        <h1>Welcome to Joel's Movie Collection </h1>
      </div>
    </>
  );
}

export default HomePage;

// the two angled brackets signify a React.Fragment (basically like a blank div)
