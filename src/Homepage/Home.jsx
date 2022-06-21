import React from "react";
import "../Homepage/style/style.css"
const Home = () => {
  return (
    <>
    <div>
        <img src={require("../Homepage/image/")} alt="" />
    </div>
      <div className="container" style={{ height: "100%" }}>
        <div className="row" style={{ height: "30%" }}>
          <div className="col-12 col-sm-6 col-md-4">
            <img
              src="../Homepage/image/Books-Like-Daisy-Jones.jpg"
              alt=""
              style={{ width: "100%" }}
            />
            <div style={{ background:"rgb(255,239,213)",height:"90%" }} className="container">
            <p
              style={{
                textAlign: "center",
                fontSize: "20px",
                fontWeight: "bolder",
              }}
            >
              6 Books Like The Seven Husbands of Evelyn Hugo
            </p>
            <p style={{ fontWeight: "bold" }}>10th June 2022</p>
            <span style={{ fontSize: "20px" }}>
              If you love Taylor Jenkins Reid’s books, then you need to pick up
              these 6 books like The Seven Husbands of Evelyn Hugo!
            </span>
            <div  className="readmore"><a href="/">Read more</a></div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4">
            <img
              src="../Homepage/image/Books-Like-Daisy-Jones.jpg"
              alt=""
              style={{ width: "100%" }}
            />
            <div style={{ background:"rgb(255,239,213)",height:"90%" }} className="container">
              <div>
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "20px",
                    fontWeight: "bolder",
                  }}
                >
                  5 Gripping Books Like Malibu Rising...for reading
                </p>
              </div>
              <div>
                <p style={{ fontWeight: "bold" }}>10th June 2022</p>
              </div>
              <div>
                <p style={{ fontSize: "20px" }}>
                  Are you a fan of Taylor Jenkins Reid’s books? Then here are 5
                  amazing books like Malibu Rising to add to your reading list!
                  Malibu Rising …
                </p>
                <div  className="readmore"><a href="/">Read more</a></div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4">
            <img
              src="../Homepage/image/Books-Like-Daisy-Jones.jpg"
              alt=""
              style={{ width: "100%" }}
            />
            <div style={{ background:"rgb(255,239,213)", height:"90%"}} className="container">
            <p
              style={{
                textAlign: "center",
                fontSize: "20px",
                fontWeight: "bolder",
              }}
            >
              9 Amazing Books Like Daisy Jones and the Six
            </p>
            <p style={{ fontWeight: "bold" }}>8th June 2022</p>
            <span style={{ fontSize: "20px" }}>
              If you love Taylor Jenkins-Reid’s books then you need to add these
              9 amazing books like Daisy Jones and the Six to your reading list!
              Daisy …
            </span>
            <div  className="readmore"><a href="/">Read more</a></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
