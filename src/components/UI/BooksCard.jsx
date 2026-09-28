import { IoIosStarOutline } from "react-icons/io";

const BooksCard = ({books}) => {
    return (
        <div className="card bg-base-100  rounded-2xl shadow-sm">
              <figure className="p-6">
                <img
                className="rounded-xl h-[250px]"
                 src={books.image} alt="Books" />
              </figure>
              <div className="card-body">
                <div className="flex items-center gap-2">{books.tags.map((tags,index) => (
                    <div key={index} className="badge bg-green-100 text-green-500">{tags}</div>
                  ))}</div>
                <h2 className="card-title">
                  {books.bookName}
                </h2>
                <p className="justify-start text-start">
                  By : {books.author}
                </p>
                <div className="card-actions justify-between  border-t border-dashed border-gray-300 pt-2">
                  <div className="badge badge-outline font-bold">{books.category}</div>
                  <div className="badge badge-outline font-bold">{books.rating} <IoIosStarOutline /></div>
                </div>
              </div>
            </div>
    );
};

export default BooksCard;