import React from "react";
import  "../src/Mainpage/css/style.css"

const MainPage = () => {
  return (
    <>
      <header className="header">
        <div className="header-1">
            <span className="logo">
            {" "}
              <i className="fas fa-book" style={{width:"10px" ,marginRight:"10px"}}></i> library{" "}
            </span>
          <form action="" className="search-form">
            <input
              type="search"
              name=""
              placeholder="search"
              id="search-box"
            />
            <label htmlFor="search-box" className="fas fa-search"></label>
          </form>

          <div className="icons">
            <div id="search-btn" className="fas fa-search"></div>
            <a href="/" className="fas fa-heart"> </a>
            <a href="/" className="fas fa-shopping-cart"> </a>
            <div id="login-btn" className="fas fa-user"></div>
          </div>
        </div>

        <div className="header-2" style={{marginRight:"15px"}}>
          <nav className="navbar" >
            <a href="#home">Home</a>
            <a href="#featured">Favorats</a>
            <a href="#arrivals">News</a>
            <a href="#reviews">Comments</a>
            <a href="#blogs" >Weblogs</a>
          </nav>
        </div>
      </header>

      <nav className="bottom-navbar">
        <a href="#home" className="fas fa-home"> </a>
        <a href="#featured" className="fas fa-list"> </a>
        <a href="#arrivals" className="fas fa-tags"> </a>
        <a href="#reviews" className="fas fa-comments"> </a>
        <a href="#blogs" className="fas fa-blog"> </a>
      </nav>

      <div className="login-form-container">
        <div id="close-login-btn" className="fas fa-times"></div>

        <form action="">
          <h3>Signin</h3>
          <span>Username</span>
          <input
            type="email"
            name=""
            className="box"
            placeholder="Enter your email"
            // id=""
          />
          <span>Password</span>
          <input
            type="password"
            name=""
            className="box"
            placeholder="Enter your password"
            // id=""
          />
          <div className="checkbox">
            <input type="checkbox" name="" id="remember-me" />
            <label htmlFor="remember-me"> remmeber</label>
          </div>
          <input type="submit" value="sign in" className="btn" />
          <p>
            have you forgotten your password? <a href="/">Click here</a>
          </p>
          <p>
            have you not signedUp? <a href="/">Create account</a>
          </p>
        </form>
      </div>

      <section className="home" id="home">
        <div className="row">
          <div className="content">
            <h3>Up to 75% discount </h3>
            <p>
              Write text{" "}
            </p>
            <a href="/" className="btn">
              Buy now
            </a>
          </div>

          <div className="swiper books-slider swiper-initialized swiper-horizontal swiper-pointer-events swiper-rtl">
            <div
              className="swiper-wrapper"
              id="swiper-wrapper-728f26bc6b4fc15d"
              aria-live="off"
              style={{transitionDuration: "0ms",transform:"translate3d(1344px, 0px, 0px)"}}
              
            >
              <a
                href="/"
                className="swiper-slide swiper-slide-duplicate"
                role="group"
                aria-label="6 / 6"
                data-swiper-slide-index="5"
                style={{width:" 662px"}}
              >
                <img src="../src/Mainpage/image/book-6" alt=""/>
              </a>
              <a
                href="/"
                className="swiper-slide swiper-slide-prev"
                role="group"
                aria-label="1 / 6"
                data-swiper-slide-index="0"
                style={{width:" 662px"}}
              >
                <img src={require("../src/Mainpage/image/book-1.png")} alt="" />
              </a>
              <a
                href="/"
                className="swiper-slide swiper-slide-active"
                role="group"
                aria-label="2 / 6"
                data-swiper-slide-index="1"
                style={{width:" 662px"}}
              >
                <img src={require("../src/Mainpage/image/book-2.png")}  alt="" />
                
              </a>
              <a
                href="/"
                className="swiper-slide swiper-slide-next"
                role="group"
                aria-label="3 / 6"
                data-swiper-slide-index="2"
                style={{width:" 662px"}}
              >
                <img src={require("../src/Mainpage/image/book-3.png")} alt="" />
              </a>
              <a
                href="/"
                className="swiper-slide"
                role="group"
                aria-label="4 / 6"
                data-swiper-slide-index="3"
                style={{width:" 662px"}}
              >
                <img src="../src/Mainpage/image/book-4.png" alt="" />
              </a>
              <a
                href="/"
                className="swiper-slide"
                role="group"
                aria-label="5 / 6"
                data-swiper-slide-index="4"
                style={{width:" 662px"}}
              >
                <img src="../src/Mainpage/image/book-5.png" alt="" />
              </a>
              <a
                href="/"
                className="swiper-slide"
                role="group"
                aria-label="6 / 6"
                data-swiper-slide-index="5"
                style={{width:" 662px"}}
              >
                <img src="../src/Mainpage/image/book-6.png" alt="" />
              </a>
              <a
                href="/"
                className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
                role="group"
                aria-label="1 / 6"
                data-swiper-slide-index="0"
                style={{width:" 662px"}}
              >
                <img src="../src/Mainpage/image/book-1.png" alt="" />
              </a>
            </div>
            <img src="../src/Mainpage/image/stand.png" className="stand" alt="" />
            <span
              className="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            ></span>
          </div>
        </div>
      </section>

      <section className="featured" id="featured">
        <h1 className="heading">
          {" "}
          <span>famous books</span>{" "}
        </h1>

        <div className="swiper featured-slider swiper-initialized swiper-horizontal swiper-pointer-events swiper-rtl">
          <div
            className="swiper-wrapper"
            id="swiper-wrapper-3e63e515b59c6eab"
            aria-live="off"
            style={{transitionDuration: "0ms" , transform: "translate3d(2856px, 0px, 0px)"}}
          >
            <div
              className="swiper-slide box swiper-slide-duplicate swiper-slide-duplicate-next"
              role="group"
              aria-label="9 / 10"
              data-swiper-slide-index="8"
              style={{width: "326px", marginLeft: "10px"}}
            >
              <div className="icons">
                <a href="/" className="fas fa-search"> </a>
                <a href="/" className="fas fa-heart"> </a>
                <a href="/" className="fas fa-eye"> </a>
              </div>
              <div className="image">
                <img src="../src/Mainpage/image/book-9.png" alt="" />
              </div>
              <div className="content">
                <h3>famous book</h3>
                {/* <div className="price">
                  5 هزار تومان <span>10 هزارتومان</span>
                </div>
                <a href="/" className="btn">
                  اضافه کردن به سبد خرید
                </a> */}
              </div>
            </div>
            <div
              className="swiper-slide box swiper-slide-duplicate"
              role="group"
              aria-label="10 / 10"
              data-swiper-slide-index="9"
              style={{width: "326px", marginLeft: "10px"}}
            >
              <div className="icons">
                <a href="/" className="fas fa-search"> </a>
                <a href="/" className="fas fa-heart"> </a>
                <a href="/" className="fas fa-eye"> </a>
              </div>
              <div className="image">
                <img src="../src/Mainpage/image/book-10.png" alt="" />
              </div>
              <div className="content">
                <h3>famous book</h3>
                {/* <div className="price">
                  5 هزار تومان <span>10 هزارتومان</span>
                </div>
                <a href="/" className="btn">
                  اضافه کردن به سبد خرید
                </a> */}
              </div>
            </div>

            <div
              className="swiper-slide box"
              role="group"
              aria-label="1 / 10"
              data-swiper-slide-index="0"
              style={{ width: "326px", marginLeft: "10px" }}
            >
              <div className="icons">
                <a href="/" className="fas fa-search"> </a>
                <a href="/" className="fas fa-heart"> </a>
                <a href="/" className="fas fa-eye"> </a>
              </div>
              <div className="image">
                <img src="../src/Mainpage/image/book-1.png" alt="" />
              </div>
              <div className="content">
                <h3>famous book</h3>
                {/* <div className="price">
                  5 هزار تومان <span>10 هزارتومان</span>
                </div>
                <a href="/" className="btn">
                  اضافه کردن به سبد خرید
                </a> */}
              </div>
            </div>

            <div
              className="swiper-slide box"
              role="group"
              aria-label="2 / 10"
              data-swiper-slide-index="1"
              style={{width: "326px", marginLeft: "10px"}}
            >
              <div className="icons">
                <a href="/" className="fas fa-search"> </a>
                <a href="/" className="fas fa-heart"> </a>
                <a href="/" className="fas fa-eye"> </a>
              </div>
              <div className="image">
                <img src="../src/Mainpage/image/book-2.png" alt="" />
              </div>
              <div className="content">
                <h3>famous book </h3>
                {/* <div className="price">
                  5 هزار تومان <span>10 هزارتومان</span>
                </div>
                <a href="/" className="btn">
                  اضافه کردن به سبد خرید
                </a> */}
              </div>
            </div>

            <div
              className="swiper-slide box"
              role="group"
              aria-label="3 / 10"
              data-swiper-slide-index="2"
              style={{width: "326px", marginLeft: "10px"}}
            >
              <div className="icons">
                <a href="/" className="fas fa-search"> </a>
                <a href="/" className="fas fa-heart"> </a>
                <a href="/" className="fas fa-eye"> </a>
              </div>
              <div className="image">
                <img src="../src/Mainpage/image/book-3.png" alt="" />
              </div>
              <div className="content">
                <h3>famous book</h3>
                {/* <div className="price">
                  5 هزار تومان <span>10 هزارتومان</span>
                </div>
                <a href="/" className="btn">
                  اضافه کردن به سبد خرید
                </a> */}
              </div>
            </div>

            <div
              className="swiper-slide box"
              role="group"
              aria-label="4 / 10"
              data-swiper-slide-index="3"
              style={{width: "326px", marginLeft: "10px"}}
            >
              <div className="icons">
                <a href="/" className="fas fa-search"> </a>
                <a href="/" className="fas fa-heart"> </a>
                <a href="/" className="fas fa-eye"> </a>
              </div>
              <div className="image">
                <img src="../src/Mainpage/image/book-4.png" alt="" />
              </div>
              <div className="content">
                <h3>famous book</h3>
                {/* <div className="price">
                  5 هزار تومان <span>10 هزارتومان</span>
                </div>
                <a href="/" className="btn">
                  اضافه کردن به سبد خرید
                </a> */}
              </div>
            </div>

            <div
              className="swiper-slide box"
              role="group"
              aria-label="5 / 10"
              data-swiper-slide-index="4"
              style={{width: "326px", marginLeft: "10px"}}
            >
              <div className="icons">
                <a href="/" className="fas fa-search"> </a>
                <a href="/" className="fas fa-heart"> </a>
                <a href="/" className="fas fa-eye"> </a>
              </div>
              <div className="image">
                <img src="../src/Mainpage/image/book-5.png" alt="" />
              </div>
              <div className="content">
                <h3>famous book</h3>
                {/* <div className="price">
                  5 هزار تومان <span>10 هزارتومان</span>
                </div>
                <a href="/" className="btn">
                  اضافه کردن به سبد خرید
                </a> */}
              </div>
            </div>

            <div
              className="swiper-slide box"
              role="group"
              aria-label="6 / 10"
              data-swiper-slide-index="5"
              style={{width: "326px", marginLeft: "10px"}}
            >
              <div className="icons">
                <a href="/" className="fas fa-search"> </a>
                <a href="/" className="fas fa-heart"> </a>
                <a href="/" className="fas fa-eye"> </a>
              </div>
              <div className="image">
                <img src="../src/Mainpage/image/book-6.png" alt="" />
              </div>
              <div className="content">
                <h3>famous book</h3>
                {/* <div className="price">
                  5 هزار تومان <span>10 هزارتومان</span>
                </div>
                <a href="/" className="btn">
                  اضافه کردن به سبد خرید
                </a> */}
              </div>
            </div>

            <div
              className="swiper-slide box swiper-slide-prev"
              role="group"
              aria-label="7 / 10"
              data-swiper-slide-index="6"
              style={{width: "326px", marginLeft: "10px"}}
            >
              <div className="icons">
                <a href="/" className="fas fa-search"> </a>
                <a href="/" className="fas fa-heart"> </a>
                <a href="/" className="fas fa-eye"> </a>
              </div>
              <div className="image">
                <img src="../src/Mainpage/image/book-7.png" alt="" />
              </div>
              <div className="content">
                <h3>famous book</h3>
                {/* <div className="price">
                  5 هزار تومان <span>10 هزارتومان</span>
                </div>
                <a href="/" className="btn">
                  اضافه کردن به سبد خرید
                </a> */}
              </div>
            </div>

            <div
              className="swiper-slide box swiper-slide-active"
              role="group"
              aria-label="8 / 10"
              data-swiper-slide-index="7"
              style={{width: "326px", marginLeft: "10px"}}
            >
              <div className="icons">
                <a href="/" className="fas fa-search"> </a>
                <a href="/" className="fas fa-heart"> </a>
                <a href="/" className="fas fa-eye"> </a>
              </div>
              <div className="image">
                <img src="../src/Mainpage/image/book-8.png" alt="" />
              </div>
              <div className="content">
                <h3>famous book</h3>
                {/* <div className="price">
                  5 هزار تومان <span>10 هزارتومان</span>
                </div>
                <a href="/" className="btn">
                  اضافه کردن به سبد خرید
                </a> */}
              </div>
            </div>

            <div
              className="swiper-slide box swiper-slide-next"
              role="group"
              aria-label="9 / 10"
              data-swiper-slide-index="8"
              style={{width: "326px", marginLeft: "10px"}}
            >
              <div className="icons">
                <a href="/" className="fas fa-search"> </a>
                <a href="/" className="fas fa-heart"> </a>
                <a href="/" className="fas fa-eye"> </a>
              </div>
              <div className="image">
                <img src="../src/Mainpage/image/book-9.png" alt="" />
              </div>
              <div className="content">
                <h3>famous book</h3>
                {/* <div className="price">
                  5 هزار تومان <span>10 هزارتومان</span>
                </div>
                <a href="/" className="btn">
                  اضافه کردن به سبد خرید
                </a> */}
              </div>
            </div>

            <div
              className="swiper-slide box"
              role="group"
              aria-label="10 / 10"
              data-swiper-slide-index="9"
              style={{width: "326px", marginLeft: "10px"}}
            >
              <div className="icons">
                <a href="/" className="fas fa-search"> </a>
                <a href="/" className="fas fa-heart"> </a>
                <a href="/" className="fas fa-eye"> </a>
              </div>
              <div className="image">
                <img src="../src/Mainpage/image/book-10.png" alt="" />
              </div>
              <div className="content">
                <h3>famous book</h3>
                {/* <div className="price">
                  5 هزار تومان <span>10 هزارتومان</span>
                </div>
                <a href="/" className="btn">
                  اضافه کردن به سبد خرید
                </a> */}
              </div>
            </div>

            <div
              className="swiper-slide box swiper-slide-duplicate"
              role="group"
              aria-label="1 / 10"
              data-swiper-slide-index="0"
              style={{width: "326px", marginLeft: "10px"}}
            >
              <div className="icons">
                <a href="/" className="fas fa-search"> </a>
                <a href="/" className="fas fa-heart"> </a>
                <a href="/" className="fas fa-eye"> </a>
              </div>
              <div className="image">
                <img src="../src/Mainpage/image/book-1.png" alt="" />
              </div>
              <div className="content">
                <h3>famous book</h3>
                {/* <div className="price">
                  5 هزار تومان <span>10 هزارتومان</span>
                </div>
                <a href="/" className="btn">
                  اضافه کردن به سبد خرید
                </a> */}
              </div>
            </div>
            <div
              className="swiper-slide box swiper-slide-duplicate"
              role="group"
              aria-label="2 / 10"
              data-swiper-slide-index="1"
              style={{width: "326px", marginLeft: "10px"}}
            >
              <div className="icons">
                <a href="/" className="fas fa-search"> </a>
                <a href="/" className="fas fa-heart"> </a>
                <a href="/" className="fas fa-eye"> </a>
              </div>
              <div className="image">
                <img src="../src/Mainpage/image/book-2.png" alt="" />
              </div>
              <div className="content">
                <h3>famous book</h3>
                {/* <div className="price">
                  5 هزار تومان <span>10 هزارتومان</span>
                </div>
                <a href="/" className="btn">
                  اضافه کردن به سبد خرید
                </a> */}
              </div>
            </div>
          </div>

          <div
            className="swiper-button-next"
            tabIndex={0}
            role="button"
            aria-label="Next slide"
            aria-controls="swiper-wrapper-3e63e515b59c6eab"
          ></div>
          <div
            className="swiper-button-prev"
            tabIndex={0}
            role="button"
            aria-label="Previous slide"
            aria-controls="swiper-wrapper-3e63e515b59c6eab"
          ></div>

          <span
            className="swiper-notification"
            aria-live="assertive"
            aria-atomic="true"
          ></span>
        </div>
      </section>

      <section className="newsletter">
        <form action="">
          <h3>common Update for lastTime</h3>
          <input
            type="email"
            name=""
            placeholder="ایمیل خود را وارد کنید"
            id=""
            className="box"
          />
          <input type="submit" value="عضویت" className="btn" />
        </form>
      </section>

      <section className="arrivals" id="arrivals">
        <h1 className="heading">
          {" "}
          <span>New books</span>{" "}
        </h1>

        <div className="swiper arrivals-slider swiper-initialized swiper-horizontal swiper-pointer-events swiper-rtl">
          <div
            className="swiper-wrapper"
            id="swiper-wrapper-9049a27ffacc2d5b"
            aria-live="off"
            style={{transitionDuration: "0ms", transform: "translate3d(2016px, 0px, 0px)"}}
          >
            <a
              href="/"
              className="swiper-slide box swiper-slide-duplicate"
              role="group"
              aria-label="5 / 5"
              data-swiper-slide-index="4"
              style={{width: "326px", marginLeft: "10px"}}
            >
              <div className="image">
                <img src="../src/Mainpage/image/book-5.png" alt="" />
              </div>
              <div className="content">
                <h3>News</h3>
                {/* <div className="price">
                  5 هزارتومان <span>10 هزارتومان</span>
                </div> */}
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </a>

            <a
              href="/"
              className="swiper-slide box"
              role="group"
              aria-label="1 / 5"
              data-swiper-slide-index="0"
              style={{width: "326px", marginLeft: "10px"}}
            >
              <div className="image">
                <img src="../src/Mainpage/image/book-1.png" alt="" />
              </div>
              <div className="content">
                <h3>News</h3>
                {/* <div className="price">
                  5 هزارتومان <span>10 هزارتومان</span>
                </div> */}
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </a>

            <a
              href="/"
              className="swiper-slide box swiper-slide-prev"
              role="group"
              aria-label="2 / 5"
              data-swiper-slide-index="1"
              style={{width: "326px", marginLeft: "10px"}}
            >
              <div className="image">
                <img src="../src/Mainpage/image/book-2.png" alt="" />
              </div>
              <div className="content">
                <h3>News</h3>
                {/* <div className="price">
                  5 هزارتومان <span>10 هزارتومان</span>
                </div> */}
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </a>

            <a
              href="/"
              className="swiper-slide box swiper-slide-active"
              role="group"
              aria-label="3 / 5"
              data-swiper-slide-index="2"
              style={{width: "326px", marginLeft: "10px"}}
            >
              <div className="image">
                <img src="../src/Mainpage/image/book-3.png" alt="" />
              </div>
              <div className="content">
                <h3>News</h3>
                {/* <div className="price">
                  5 هزارتومان <span>10 هزارتومان</span>
                </div> */}
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </a>

            <a
              href="/"
              className="swiper-slide box swiper-slide-next"
              role="group"
              aria-label="4 / 5"
              data-swiper-slide-index="3"
              style={{width: "326px", marginLeft: "10px"}}
            >
              <div className="image">
                <img src="../src/Mainpage/image/book-4.png" alt="" />
              </div>
              <div className="content">
                <h3>News</h3>
                {/* <div className="price">
                  5 هزارتومان <span>10 هزارتومان</span>
                </div> */}
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </a>

            <a
              href="/"
              className="swiper-slide box"
              role="group"
              aria-label="5 / 5"
              data-swiper-slide-index="4"
              style={{width: "326px", marginLeft: "10px"}}
            >
              <div className="image">
                <img src="../src/Mainpage/image/book-5.png" alt="" />
              </div>
              <div className="content">
                <h3>News</h3>
                {/* <div className="price">
                  5 هزارتومان <span>10 هزارتومان</span>
                </div> */}
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </a>

            <a
              href="/"
              className="swiper-slide box swiper-slide-duplicate"
              role="group"
              aria-label="1 / 5"
              data-swiper-slide-index="0"
              style={{width: "326px", marginLeft: "10px"}}
            >
              <div className="image">
                <img src="../src/Mainpage/image/book-1.png" alt="" />
              </div>
              <div className="content">
                <h3>News</h3>
                {/* <div className="price">
                  5 هزارتومان <span>10 هزارتومان</span>
                </div> */}
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </a>
          </div>

          <span
            className="swiper-notification"
            aria-live="assertive"
            aria-atomic="true"
          ></span>
        </div>

        <div className="swiper arrivals-slider swiper-initialized swiper-horizontal swiper-pointer-events swiper-rtl">
          <div
            className="swiper-wrapper"
            id="swiper-wrapper-3e1b04482656c559"
            aria-live="off"
            style={{transitionDuration: "0ms", transform: "translate3d(2016px, 0px, 0px)"}}
          >
            <a
              href="/"
              className="swiper-slide box swiper-slide-duplicate"
              role="group"
              aria-label="5 / 5"
              data-swiper-slide-index="4"
              style={{width: "326px", marginLeft: "10px"}}
            >
              <div className="image">
                <img src="../src/Mainpage/image/book-10.png" alt="" />
              </div>
              <div className="content">
                <h3>News</h3>
                {/* <div className="price">
                  5 هزارتومان <span>10 هزارتومان</span>
                </div> */}
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </a>

            <a
              href="/"
              className="swiper-slide box"
              role="group"
              aria-label="1 / 5"
              data-swiper-slide-index="0"
              style={{width: "326px", marginLeft: "10px"}}
            >
              <div className="image">
                <img src="../src/Mainpage/image/book-6.png" alt="" />
              </div>
              <div className="content">
                <h3>News</h3>
                {/* <div className="price">
                  5 هزارتومان <span>10 هزارتومان</span>
                </div> */}
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </a>

            <a
              href="/"
              className="swiper-slide box swiper-slide-prev"
              role="group"
              aria-label="2 / 5"
              data-swiper-slide-index="1"
              style={{width: "326px", marginLeft: "10px"}}
            >
              <div className="image">
                <img src="../src/Mainpage/image/book-7.png" alt="" />
              </div>
              <div className="content">
                <h3>News</h3>
                {/* <div className="price">
                  5 هزارتومان <span>10 هزارتومان</span>
                </div> */}
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </a>

            <a
              href="/"
              className="swiper-slide box swiper-slide-active"
              role="group"
              aria-label="3 / 5"
              data-swiper-slide-index="2"
              style={{width: "326px", marginLeft: "10px"}}
            >
              <div className="image">
                <img src="../src/Mainpage/image/book-8.png" alt="" />
              </div>
              <div className="content">
                <h3>News</h3>
                {/* <div className="price">
                  5 هزارتومان <span>10 هزارتومان</span>
                </div> */}
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </a>

            <a
              href="/"
              className="swiper-slide box swiper-slide-next"
              role="group"
              aria-label="4 / 5"
              data-swiper-slide-index="3"
              style={{width: "326px", marginLeft: "10px"}}
            >
              <div className="image">
                <img src="../src/Mainpage/image/book-9.png" alt="" />
              </div>
              <div className="content">
                <h3>News</h3>
                {/* <div className="price">
                  5 هزارتومان <span>10 هزارتومان</span>
                </div> */}
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </a>

            <a
              href="/"
              className="swiper-slide box"
              role="group"
              aria-label="5 / 5"
              data-swiper-slide-index="4"
              style={{width: "326px", marginLeft: "10px"}}
            >
              <div className="image">
                <img src="../src/Mainpage/image/book-10.png" alt="" />
              </div>
              <div className="content">
                <h3>News</h3>
                {/* <div className="price">
                  5 هزارتومان <span>10 هزارتومان</span>
                </div> */}
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </a>

            <a
              href="/"
              className="swiper-slide box swiper-slide-duplicate"
              role="group"
              aria-label="1 / 5"
              data-swiper-slide-index="0"
              style={{width: "326px", marginLeft: "10px"}}
            >
              <div className="image">
                <img src="../src/Mainpage/image/book-6.png" alt="" />
              </div>
              <div className="content">
                <h3>News</h3>
                {/* <div className="price">
                  5 هزارتومان <span>10 هزارتومان</span>
                </div> */}
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </a>
          </div>

          <span
            className="swiper-notification"
            aria-live="assertive"
            aria-atomic="true"
          ></span>
        </div>
      </section>

      <section className="deal">
        <div className="content">
          <h3>معامله روز</h3>
          <h1>تا 50٪ تخفیف</h1>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است{" "}
          </p>
          <a href="/" className="btn">
            اکنون خرید کنید
          </a>
        </div>

        <div className="image">
          <img src="../src/Mainpage/image/deal-img.jpg" alt="" />
        </div>
      </section>

      <section className="reviews" id="reviews">
        <h1 className="heading">
          {" "}
          <span> Comments</span>{" "}
        </h1>

        <div className="swiper reviews-slider swiper-initialized swiper-horizontal swiper-pointer-events swiper-rtl">
          <div
            className="swiper-wrapper"
            id="swiper-wrapper-af9b8c9d33d35270"
            aria-live="off"
            style={{cursor: "grab", transitionDuration: "0ms", transform: "translate3d(1344px, 0px, 0px)"}}
          >
            <div
              className="swiper-slide box swiper-slide-duplicate"
              role="group"
              aria-label="6 / 6"
              data-swiper-slide-index="5"
              style={{width: "326px", marginLeft: "10px"}}
            >
              <img src="../src/Mainpage/image/pic-6.png" alt="" />
              <h3>book reader's Name</h3>
              <p>
                ttttttttttttttttttttttttttext{" "}
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>

            <div
              className="swiper-slide box swiper-slide-prev"
              role="group"
              aria-label="1 / 6"
              data-swiper-slide-index="0"
              style={{width: "326px", marginLeft: "10px"}}
            >
              <img src="../src/Mainpage/image/pic-1.png" alt="" />
              <h3>book reader's Name</h3>
              <p>
               texttttttttttttttttttttttt{" "}
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>

            <div
              className="swiper-slide box swiper-slide-active"
              role="group"
              aria-label="2 / 6"
              data-swiper-slide-index="1"
              style={{width: "326px", marginLeft: "10px"}}
            >
              <img src="../src/Mainpage/image/pic-2.png" alt="" />
              <h3>book reader's Name</h3>
              <p>
              textttttttttttttttttttttttttttt{" "}
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>

            <div
              className="swiper-slide box swiper-slide-next"
              role="group"
              aria-label="3 / 6"
              data-swiper-slide-index="2"
              style={{width: "326px", marginLeft: "10px"}}
            >
              <img src="../src/Mainpage/image/pic-3.png" alt="" />
              <h3>book reader's Name</h3>
              <p>
                tettttttttttttttttttttttttttttt{" "}
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
            <div
              className="swiper-slide box"
              role="group"
              aria-label="4 / 6"
              data-swiper-slide-index="3"
              style={{width: "326px", marginLeft: "10px"}}
            >
              <img src="../src/Mainpage/image/pic-4.png" alt="" />
              <h3>book reader's Name</h3>
              <p>
              textttttttttttttttttttttttttttt{" "}
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>

            <div
              className="swiper-slide box"
              role="group"
              aria-label="5 / 6"
              data-swiper-slide-index="4"
              style={{width: "326px", marginLeft: "10px"}}
            >
              <img src="../src/Mainpage/image/pic-5.png" alt="" />
              <h3>book reader's Name</h3>
              <p>
                testtttttttttttttttttttttttttttt{" "}
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>

            <div
              className="swiper-slide box"
              role="group"
              aria-label="6 / 6"
              data-swiper-slide-index="5"
              style={{width: "326px", marginLeft: "10px"}}
            >
              <img src="../src/Mainpage/image/pic-6.png" alt="" />
              <h3>book reader's Name</h3>
              <p>
               texttttttttttttttttttttttttttttt{" "}
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>

            <div
              className="swiper-slide box swiper-slide-duplicate swiper-slide-duplicate-prev"
              role="group"
              aria-label="1 / 6"
              data-swiper-slide-index="0"
              style={{width: "326px", marginLeft: "10px"}}
            >
              <img src="../src/Mainpage/image/pic-1.png" alt="" />
              <h3>book reader's Name</h3>
              <p>
                testtttttttttttttttttttttttt{" "}
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
          </div>

          <span
            className="swiper-notification"
            aria-live="assertive"
            aria-atomic="true"
          ></span>
        </div>
      </section>

      <section className="blogs" id="blogs">
        <h1 className="heading">
          {" "}
          <span>Weblogs</span>{" "}
        </h1>

        <div className="swiper blogs-slider swiper-initialized swiper-horizontal swiper-pointer-events swiper-rtl">
          <div
            className="swiper-wrapper"
            id="swiper-wrapper-0dd5e9a10e66cc3fc"
            aria-live="off"
            style={{cursor: "grab", transitionDuration: "0ms", transform: "translate3d(2016px, 0px, 0px)"}}
          >
            <div
              className="swiper-slide box swiper-slide-duplicate"
              role="group"
              aria-label="5 / 5"
              data-swiper-slide-index="4"
              style={{width: "326px", marginLeft: "10px"}}
            >
              <div className="image">
                <img src="../src/Mainpage/image/blog-5.jpg" alt="" />
              </div>
              <div className="content">
                <h3>subject</h3>
                <p>
                  texttttttttttttttttttttttttt{" "}
                </p>
                <a href="/" className="btn">
                 more study
                </a>
              </div>
            </div>

            <div
              className="swiper-slide box"
              role="group"
              aria-label="1 / 5"
              data-swiper-slide-index="0"
              style={{width: "326px", marginLeft: "10px"}}
            >
              <div className="image">
                <img src="../src/Mainpage/image/blog-1.jpg" alt="" />
              </div>
              <div className="content">
                <h3>subject</h3>
                <p>
                 textttttttttttttttttttttttttttt{" "}
                </p>
                <a href="/" className="btn">
                more study
                </a>
              </div>
            </div>

            <div
              className="swiper-slide box swiper-slide-prev"
              role="group"
              aria-label="2 / 5"
              data-swiper-slide-index="1"
              style={{width: "326px", marginLeft: "10px"}}
            >
              <div className="image">
                <img src="../src/Mainpage/image/blog-2.jpg" alt="" />
              </div>
              <div className="content">
                <h3>subject</h3>
                <p>
                  textttttttttttttttttttttttt{" "}
                </p>
                <a href="/" className="btn">
                more study
                </a>
              </div>
            </div>

            <div
              className="swiper-slide box swiper-slide-active"
              role="group"
              aria-label="3 / 5"
              data-swiper-slide-index="2"
              style={{width: "326px", marginLeft: "10px"}}
            >
              <div className="image">
                <img src="../src/Mainpage/image/blog-3.jpg" alt="" />
              </div>
              <div className="content">
                <h3>subject</h3>
                <p>
                 texttttttttttttttttttttttttttttt{" "}
                </p>
                <a href="/" className="btn">
                more study
                </a>
              </div>
            </div>

            <div
              className="swiper-slide box swiper-slide-next"
              role="group"
              aria-label="4 / 5"
              data-swiper-slide-index="3"
              style={{width: "326px", marginLeft: "10px"}}
            >
              <div className="image">
                <img src={require("../src/Mainpage/image/blog-4.jpg")} alt="" />
              </div>
              <div className="content">
                <h3>subject</h3>
                <p>
                 texttttttttttttttttttttttttt{" "}
                </p>
                <a href="/" className="btn">
                more study
                </a>
              </div>
            </div>

            <div
              className="swiper-slide box"
              role="group"
              aria-label="5 / 5"
              data-swiper-slide-index="4"
              style={{width: "326px", marginLeft: "10px"}}
            >
              <div className="image">
                <img src="../src/Mainpage/image/blog-5.jpg" alt="" />
              </div>
              <div className="content">
                <h3>subject</h3>
                <p>
                 textttttttttttttttttttttttt{" "}
                </p>
                <a href="/" className="btn">
                more study
                </a>
              </div>
            </div>

            <div
              className="swiper-slide box swiper-slide-duplicate"
              role="group"
              aria-label="1 / 5"
              data-swiper-slide-index="0"
              style={{width: "326px", marginLeft: "10px"}}
            >
              <div className="image">
                <img src="../src/Mainpage/image/blog-1.jpg" alt="" />
              </div>
              <div className="content">
                <h3>subject</h3>
                <p>
                  texttttttttttttttttttttttttttttttttttttttt{" "}
                </p>
                <a href="/" className="btn">
                more study
                </a>
              </div>
            </div>
          </div>

          <span
            className="swiper-notification"
            aria-live="assertive"
            aria-atomic="true"
          ></span>
        </div>
      </section>

     

      <div className="loader-container active">
        <img src="../src/Mainpage/image/loader-img.gif" alt="" />
      </div>
    </>
  )
}
export default MainPage;
