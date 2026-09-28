import { use } from "react";
import BooksCard from "../../components/UI/BooksCard";


const booksPromise = fetch("/public/booksData.json").then((res) => res.json());
const AllBooks = () => {
  const allBooks = use(booksPromise);
//   console.log(allBooks);
  return (
     <div className="justify-center text-center container mx-auto">
      <h1 className="font-bold text-4xl">Books</h1>
       <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-5">
        {allBooks.map((books,index) => {
          return <BooksCard key={index} books={books}></BooksCard>
          
        })}
      </div>
      <div>
      
     
    </div>
      </div>
    
   
  );
};

export default AllBooks;
