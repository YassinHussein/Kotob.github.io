import React from "react";
import { useFetch } from "../Components/http/http";
import SearchBox from "../Components/searchbox";
import SreachRusult from "../Components/searchruslut";

function HOME() {
  const res = useFetch(
    "https://www.googleapis.com/books/v1/volumes?q=كافكا+علي+الشاطئ&download=epub&key=AIzaSyDPEB6OF1CbUKLIsJqI-2deQJcBZJ1yuDE",
    {}
  );
  console.log("rspon ==== ", res);
  if (!res.response) {
    return <div>Loading...</div>;
  }
  const dogName = res.response.items;
  console.log("dog", dogName);
  const imageUrl = res.response.message;

  return (
    <>
      <section className="home__contener">
        <aside>
          <h2>
            Book<span>Map</span>
          </h2>
        </aside>
        <section className="home__content">
          <div className="home">
            <SearchBox />
            <section className="cards__contener">
              <h4 className="title">
                الاكثر مبعيا <a className="more_link">المذيد</a>
              </h4>
              <div className="cards">
                {dogName.map((book) => (
                  <div className="card">
                    <img
                      src={book.volumeInfo.imageLinks.smallThumbnail}
                      alt="avatar"
                    />
                    <h5>
                      {book.volumeInfo.title.length > 10
                        ? book.volumeInfo.title.substring(0, 10) + "..."
                        : book.volumeInfo.title}
                    </h5>

                    <div></div>
                  </div>
                ))}
              </div>
            </section>

            <section className="cards__contener">
              <h4 className="title">
                الاكثر مبعيا <a className="more_link">المذيد</a>
              </h4>
              <div className="cards">
                {dogName.map((book) => (
                  <div className="card">
                    <img
                      src={book.volumeInfo.imageLinks.smallThumbnail}
                      alt="avatar"
                    />
                    <h5>
                      {book.volumeInfo.title.length > 10
                        ? book.volumeInfo.title.substring(0, 10) + "..."
                        : book.volumeInfo.title}
                    </h5>

                    <div></div>
                  </div>
                ))}
              </div>
            </section>


            <section className="cards__contener">
              <h4 className="title">
                الاكثر مبعيا <a className="more_link">المذيد</a>
              </h4>
              <div className="cards">
                {dogName.map((book) => (
                  <div className="card">
                    <img
                      src={book.volumeInfo.imageLinks.smallThumbnail}
                      alt="avatar"
                    />
                    <h5>
                      {book.volumeInfo.title.length > 10
                        ? book.volumeInfo.title.substring(0, 10) + "..."
                        : book.volumeInfo.title}
                    </h5>

                    <div></div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>
      </section>




    </>
  );
}

export default HOME;