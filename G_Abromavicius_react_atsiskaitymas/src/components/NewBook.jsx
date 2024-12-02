import { useForm } from "react-hook-form";
//import { useNavigate } from "react-dom";

export default function NewBook() {
  const { register, handleSubmit } = useForm();
  //const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:3000/books", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error("Response status: $(response. status)");
      //  navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="col-8 mx-auto">
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          id="Title"
          className="form-control"
          {...register("title")}
        />
        <div className="mb-3">
          <label htmlFor="author" className="form-label">
            Author
          </label>
          <input
            type="text"
            id="author"
            className="form-control"
            {...register("author")}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <input
            type="text"
            id="category"
            className="form-control"
            {...register("category")}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            id="price"
            className="form-control"
            {...register("price")}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="cover" className="form-label">
            Cover
          </label>
          <input
            type="text"
            id="cover"
            className="form-control"
            {...register("cover")}
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        submit
      </button>
    </form>
  );
}
