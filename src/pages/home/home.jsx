import ImageBook from "../../assets/hero_img.jpg";

const Home = () => {
  return (
    <div className="hero bg-base-200 min-h-[70vh] rounded-2xl my-8 container mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between">
        <img
          alt="Tailwind CSS hero component"
          src={ImageBook}
          className="max-w-sm bg-base-200  rounded-xl shadow-xl"
        />
        <div>
          <h1 className="text-5xl font-bold">
            Books to freshen up <br />
            your bookshelf
          </h1>
          <button className="btn btn-success mt-7">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
