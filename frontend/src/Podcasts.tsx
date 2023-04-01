function Podcasts(props: any) {
  return (
    <>
      <div className="row">
        <div className="col-2">
          <img src="./logo192.png" alt="companyLogo" />
        </div>
      </div>

      <div className="col align-self-center text-start">
        <h1>Ty's React Site - {props.saying}</h1>
      </div>
    </>
  );
}

export default Podcasts;
