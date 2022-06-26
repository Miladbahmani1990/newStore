import React from "react";
import "../Homepage/style/style-home.css";

const Home = () => {
  return (
    <>
      <div className="logo">
        <img src="/image/pic-home/whats-hot-logo.jpg.webp" alt="" />
      </div>

      <div className="container-fluid mt-1">
        <div className="row" style={{ height: "auto" }}>
          <div className="col-12 col-sm-6 col-md-4">
            <img
              src="/image/pic-home/Books-Like-The-Seven.jpg.webp"
              alt=""
              style={{ width: "100%" }}
            />
          </div>

          <div className="col-12 col-sm-6 col-md-4 ">
            <img
              src="/image/pic-home/Books-Like-Malibu-Rising.jpg.webp"
              alt=""
              style={{ width: "100%" }}
            />
          </div>

          <div className="col-12 col-sm-6 col-md-4">
            <img
              src="/image/pic-home/Books-Like-Daisy-Jones.jpg.webp"
              alt=""
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="row h-auto">
          <div className="col-12 col-sm-6 col-md-4">
            <div style={{ background: "rgb(255,239,213)", height: "auto" }}>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "20px",
                  fontWeight: "bolder",
                }}
              >
                6 Books Like The Seven Husbands of Evelyn Hugo
              </p>
              <p style={{ fontWeight: "bold", marginLeft: "10px" }}>
                10th June 2022
              </p>
              <p style={{ fontSize: "20px", marginLeft: "10px" }}>
                If you love Taylor Jenkins Reid’s books, then you need to pick
                up these 6 books like The Seven Husbands of Evelyn Hugo!
              </p>
              <div className="readmore">
                <a href="/">Read more</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div style={{ background: "rgb(255,239,213)", height: "auto" }}>
              <div>
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "20px",
                    fontWeight: "bolder",
                  }}
                >
                  5 Gripping Books Like Malibu Rising And a better Books
                </p>
              </div>
              <div>
                <p style={{ fontWeight: "bold", marginLeft: "10px" }}>
                  10th June 2022
                </p>
              </div>
              <div>
                <p style={{ fontSize: "20px", marginLeft: "10px" }}>
                  Are you a fan of Taylor Jenkins Reid’s books? Then here are 5
                  amazing books like Malibu Rising to add to your reading list!
                  Malibu …
                </p>
                <div className="readmore">
                  <a href="/">Read more</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div style={{ background: "rgb(255,239,213)", height: "auto" }}>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "20px",
                  fontWeight: "bolder",
                }}
              >
                9 Amazing Books Like Daisy Jones and the Six
              </p>
              <p style={{ fontWeight: "bold", marginLeft: "10px" }}>
                8th June 2022
              </p>
              <p style={{ fontSize: "20px", marginLeft: "10px" }}>
                If you love Taylor Jenkins-Reid’s books then you need to add
                these 9 amazing books like Daisy Jones and the Six to your
                reading list! Daisy …
              </p>
              <div className="readmore">
                <a href="/">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-1">
        <h1 className="explorer text-center">Explore</h1>
        <div className="row" style={{ height: "auto" }}>
          <div className="col-12 col-sm-6">
            <img
              src="/image/pic-home/whats-hot-blog-home-e.jpg"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-12 col-sm-6">
            <h1 className=" mt-5 ">
              <strong>Oh, hello!</strong>
            </h1>
            <h2 className="w-75 mt-5 ">
              Welcome to my blog! I’m Laura and I don’t go anywhere without a
              book. I love to read and travel and over time What’s Hot? has
              become a hub for fellow literary travellers.
            </h2>
            <h2 className="w-75 mt-5">
              You’ll find recommendations for what to read next as well as
              inspiration for your next adventure. Whether you’re travelling
              across the world or through the pages of your book, I’ve got you
              covered.
            </h2>
          </div>
          <h1 className="explorer text-center ">Latest Book Posts</h1>
          <div className="row mt-5">
            <div className="col-12 col-sm-4">
              <img
                src="/image/pic-home/Books-Like-The-Seven.jpg.webp"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-12 col-sm-8">
              <strong>
                <a href="/" className="text-dark text-lg ">
                  6 Books Like The Seven Husbands of Evelyn Hugo
                </a>{" "}
              </strong>
              <p className="fs-5">Laura10th June 2022</p>
              <p className="fs-2">
                If you love Taylor Jenkins Reid’s books, then you need to pick
                up these 6 books like The Seven Husbands of Evelyn Hugo! The
                Seven Husbands of Evelyn Hugo is an absorbing read. It follows
                journalist Monique Grant as she interviews the glamorous and
                reclusive former movie star, Evelyn
              </p>
              <p className="fs-2">Hugo. It’s an addictive story, with…</p>
              <strong>
                <a href="/" className="Reading fs-2 text-dark">
                  Continue Reading
                </a>
              </strong>
            </div>
            <h1 className="explorer text-center">Featured Book Categories</h1>
          </div>
        </div>
        <div className="row  d-flex justify-content-around mt-5 ">
          <div className="col-1 col-sm-3 ">
            <img
              src="/image/pic-home/Bookshops.jpg.webp"
              className="w-100"
              alt=""
            />
          </div>
          <div className="col-1 col-sm-3 ">
            <img
              src="/image/pic-home/Book-Lists.jpg.webp"
              className="w-100"
              alt=""
            />
          </div>
          <div className="col-1 col-sm-3 ">
            <img
              src="/image/pic-home/Blogging.jpg.webp"
              className="w-100"
              alt=""
            />
          </div>
          
        </div>
        <div className="text-center">
          <span className=" h1 text-muted p-5">
            What’s Hot? was named UK Book Blog of the Year 2019
          </span>
        </div>
            <h1 className="explorer text-center">Latest Travel Posts</h1>
        <div className="row">
          <div className="col-1 col-sm-4 mt-5">
            <img
              src="/image/pic-home/Visiting-Borobodur-in-Indoensia.jpg"
              alt=""
              className="w-75 img-fluid"
            />
          </div>
          <div className="col-1 col-sm-8 mt-2">
            <h1 className="explorer text-center">
            </h1>
            <strong>
              <a href="/" className="text-secondary">
                16 Things to Know Before Visiting Borobudur in Indonesia
              </a>
            </strong>
            <p className="fs-5 text-secondary">Laura 7th April 2022</p>
            <p className="fs-2">
              Visiting Indonesia and thinking about adding a Borobudur trip to
              your itinerary? Here’s all you need to know about visiting
              Borobudur in Indonesia. Borobudur is an enormous Buddhist temple
              in Java, Indonesia. Its historical significance and beauty
              resulted in Borobudur being designated a UNESCO World Heritage
              site in 1991. It’s an impressive piece of Javanese Buddhist
              architecture, with multiple stacked…
            </p>
            <strong>
                <a href="/" className="Reading fs-2 text-dark">
                  Continue Reading
                </a>
              </strong>
          </div>
        </div>
        <h1 className="explorer text-center">Featured Travel Categories</h1>
        <div className="row  d-flex justify-content-around mt-5 ">
          <div className="col-1 col-sm-3 ">
            <img
              src="/image/pic-home/UK-travel.jpg.webp"
              className="w-100"
              alt=""
            />
          </div>
          <div className="col-1 col-sm-3 ">
            <img
              src="/image/pic-home/US-travel.jpg.webp"
              className="w-100"
              alt=""
            />
          </div>
          <div className="col-1 col-sm-3 ">
            <img
              src="/image/pic-home/Literary-travel.jpg.webp"
              className="w-100"
              alt=""
            />
          </div>
        </div>
          <div className="header3" >
            <img src="/image/pic-home/Marshs-Library-Dublin.jpg.webp" alt="" className="header3-img"/>
          <div>
            <p>“Literature is the most agreeable way of ignoring life”</p>
          </div>
          </div>
      </div>
    </>
  );
};
export default Home;
