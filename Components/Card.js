import "./Card.css"

const Card = (props) => {
    const { name, age, img } = props.name;
    return (
      <div className="card">
        <img src={img} />
        <div className="card-data">
        <div className="nameage"> 
        <h3>{name}</h3>
          <p>{age}</p>

        </div>
         
        </div>
      </div>
    );
  };
  export default Card