import "./Headers.css";

export default function Header(props) {
  console.log(props);

  return (
    <header>
      <h1 className="header-title">{props.title}</h1>
      <img
        src={props.link}
        alt="Bla bla"
        className="header-img w-100 object-fit-cover"
      />
    </header>
  );
}
