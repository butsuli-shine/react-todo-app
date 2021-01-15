const Home = () => {
  const progress = {
    25: {
      width: 700 / 4,
    },
    50: {
      width: 700 / 2,
    },
    75: {
      width: 700 / 2 + 700 / 4,
    },
    100: {
      width: 700,
    },
  };

  return (
    <div className="Home">
      <h3>
        {" "}
        <i data-vi="doc"></i>Introduction{" "}
      </h3>
      <blockquote className="blockquote">
        <h4>
          <i data-vi="user"></i> Name
        </h4>
        <p>
          <i data-vi="arrow-right"></i>Sakamoto Keisuke
        </p>
      </blockquote>
      <blockquote className="blockquote">
        <h4>
          <i data-vi="heart"></i>Age
        </h4>
        <p>
          <i data-vi="arrow-right"></i>18
        </p>
      </blockquote>
      <blockquote>
        <h4>
          {" "}
          <i data-vi="graduation-cap"></i>School
        </h4>
        <p>
          <i data-vi="arrow-right"></i>National Institute of Technology, Gunma
          College
        </p>
      </blockquote>
      <blockquote>
        <h4>
          <i data-vi="graph-poly"></i>skills
        </h4>
        <img src="./img/html5.svg" alt="" width="20" />
        html5
        <div class="progress">
          <div
            class="progress-bar bg-success"
            role="progressbar"
            style={progress[50]}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <img src="./img/css3.svg" alt="" width="20" />
        css3/scss
        <div class="progress">
          <div
            class="progress-bar bg-success"
            role="progressbar"
            style={progress[75]}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <img src="./img/javascript.svg" alt="" width="20" />
        JavaScript/ <img src="./img/typescript.svg" alt="" width="20" />{" "}
        Typescript
        <div class="progress">
          <div
            class="progress-bar bg-success"
            role="progressbar"
            style={progress[50]}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </blockquote>
    </div>
  );
};

export default Home;
