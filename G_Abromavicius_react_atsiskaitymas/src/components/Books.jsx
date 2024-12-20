import { useEffect, useState } from "react";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:3000/books");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchBooks();
  }, []);
  const toggleBookReserved = async (books) => {
    const updatedBooks = { ...books, reserved: !books.reserved };
    try {
      const response = await fetch(`http://localhost:3000/tasks/${books.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedBooks),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      setBooks(books.map((t) => (t.id === books.id ? updatedBooks : t)));
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };
  return (
    <div>
      <h2>Turimos knygos</h2>

      {books.map((books) => (
        <div key={books.id} className={books.reserved ? "reserved" : ""}>
          <div className="card">
            <img src={books.cover} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{books.title}</h5>
              <p className="card-text">{books.author} </p>
              <p className="card-text">{books.category} </p>
              <p className="card-text">{books.price} Eur </p>
              <a
                href="#"
                className="btn btn-primary"
                // onClick={books.completed}
                onClick={() => toggleBookReserved(books)}
              >
                Išduoti saitytojui
              </a>
              <a href="#" className="btn btn-primary">
                Edit
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Books;
