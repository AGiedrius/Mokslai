import "./Headers.css";

export default function Header() {
  return (
    <header>
      <h1 className="header-title">Page title</h1>
      <img
        src="./public/kofee.jpg"
        alt="Bla bla"
        className="header-img w-100 object-fit-cover"
      />
    </header>
  );
}
