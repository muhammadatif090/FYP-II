import "./Main.css";
import hello from "../../assets/hello.svg";

const Main = () => {
  return (
    <main>
      <div className="main__container">
        {/* <!-- MAIN TITLE STARTS HERE --> */}

        <div className="main__title">
          <img src={hello} alt="hello" />
          <div className="main__greeting">
            <h1>Hello MedTech</h1>
            <p>Welcome to your Patient Dashboard</p>
          </div>
        </div>

        {/* <!-- MAIN TITLE ENDS HERE --> */}
       
      </div>
    </main>
  );
};

export default Main;
