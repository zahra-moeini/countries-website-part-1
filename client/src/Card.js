const card = ({ name, capital, image, region, population }) => {
    return (
      <div className="continer">
        <div className="card">
          <img  src={image} alt={name} />
          <h3>{name}</h3>
          <p>
            Population :<span>{population}</span>
          </p>
          <p>
            Region:<span>{region}</span>
          </p>
          <p>
            Capital:<span>{capital}</span>
          </p>
        </div>
      </div>
    );
  };
  
  export default card;