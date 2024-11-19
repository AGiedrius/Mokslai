import "./Postimage.css";

export default function Postimage(props) {
  return (
    <div>
      <img
        src={props.psImage}
        alt="Bla bla"
        className="Post-img w-100 object-fit-cover"
      />
    </div>
  );
}
