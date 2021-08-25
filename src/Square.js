import "./index.css";

const Square = (props) => (
  <div className="square" onClick={() => props.onClick()}>
    {props.value}
  </div>
);

export default Square;
