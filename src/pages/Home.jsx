import Footer from "../components/Footer";
import bestseller_1 from "../assets/images/bestseller_1.jpg";
import bestseller_2 from "../assets/images/bestseller_2.jpg";
import bestseller_3 from "../assets/images/bestseller_3.png";
import bestseller_4 from "../assets/images/bestseller_4.png";
import Topnav from "../components/Topnav";

function Home() {
  return (
    <div>
      <section className="bg-green-100 p-4 md:p-10 flex justify-center">
        <div>
          <p className="mb-4">
            We offer you a wide range of Artificial snd Natural Flowers
          </p>
          <h2 className="font-bold text-3xl md:text-5xl mb-5">
            Plants for your Interior
          </h2>
          <div>
            <button className="bg-black rounded p-2 text-white mr-3">
              Shop Now
            </button>
            <button className="border border-black rounded p-2">
              Watch Video
            </button>
          </div>

          <p className="mt-5">160+ Plant Species | 100+ Clients</p>
        </div>

        <div className="hidden md:block p-5"></div>
      </section>

      {/* about */}

      <section className="text-center">
        <h1 className="text-3xl font-bold mt-5">About Us</h1>
        <p>This site for those who admire the beauty and harmony of nature</p>

        <div>
          <div className="md:flex gap-5">
            <div className="border border-black p-2 mt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
                />
              </svg>

              <h2 className="text-2xl font-medium">Large Assortment</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempora nostrum eveniet ipsam, labore a libero non hic, suscipit
                culpa aspernatur omnis. Porro necessitatibus quo vitae quae
                cupiditate officiis odio ratione.
              </p>
            </div>
            <div className="border border-black p-2 mt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"
                />
              </svg>

              <h2 className="text-2xl font-medium">Free and Fast shipping</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempora nostrum eveniet ipsam, labore a libero non hic, suscipit
                culpa aspernatur omnis. Porro necessitatibus quo vitae quae
                cupiditate officiis odio ratione.
              </p>
            </div>
            <div className="border border-black p-2 mt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
                />
              </svg>

              <h2 className="text-2xl font-medium"> 24/7 Support</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempora nostrum eveniet ipsam, labore a libero non hic, suscipit
                culpa aspernatur omnis. Porro necessitatibus quo vitae quae
                cupiditate officiis odio ratione.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bestseller */}

      <section className="p-4 text-center">
        <h1 className="font-bold mt-5 text-3xl">Best Seller</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 mt-5 gap-5">
          <div>
            <img
              src={bestseller_1}
              className="inline hover:shadow-xl transform hover:-translate-y-2"
            />

            <h1>Rose Plant</h1>
            <p>$20</p>
          </div>

          <div>
            <img
              src={bestseller_2}
              className="inline hover:shadow-xl transform hover:-translate-y-2"
            />

            <h1>Rose Plant</h1>
            <p>$20</p>
          </div>

          <div>
            <img
              src={bestseller_3}
              className="inline hover:shadow-xl transform hover:-translate-y-2"
            ></img>

            <h1>Rose Plant</h1>
            <p>$20</p>
          </div>

          <div>
            <img
              src={bestseller_4}
              className="inline hover:shadow-xl transform hover:-translate-y-2"
            ></img>

            <h1>Rose Plant</h1>
            <p>$20</p>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}

      <section>
        <h1 className="text-3xl font-bold mt-5 text-center">
          Customer Reviews
        </h1>
        <div className="flex flex-col gap-5 justify-center text-white m-5">
          <div className="bg-green-900 p-5 container">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut earum
              placeat fugit quaerat sunt adipisci illum eum aspernatur quisquam,
              laboriosam doloremque sapiente velit. Quasi consequatur atque
              excepturi dolor provident? Ut!
            </p>
            <p className="font-bold text-yellow-300">Genny Mathew</p>
          </div>

          <div className="bg-green-900 p-5 container">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut earum
              placeat fugit quaerat sunt adipisci illum eum aspernatur quisquam,
              laboriosam doloremque sapiente velit. Quasi consequatur atque
              excepturi dolor provident? Ut!
            </p>
            <p className="font-bold text-yellow-300">Jim</p>
          </div>

          <div className="bg-green-900 p-5 container">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut earum
              placeat fugit quaerat sunt adipisci illum eum aspernatur quisquam,
              laboriosam doloremque sapiente velit. Quasi consequatur atque
              excepturi dolor provident? Ut!
            </p>
            <p className="font-bold text-yellow-300">Parker</p>
          </div>
        </div>
      </section>

     
     
 

    </div>
  );
}

export default Home;
