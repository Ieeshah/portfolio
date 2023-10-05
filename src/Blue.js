export default function Blue(props) {
    return (
        <>
          <div className="products">
            
            <h1>{props.title}</h1>
            <h5>${props.price}</h5>
            <p>{props.desc}</p>
            <button>Buy Now</button>
          </div>
        </>
      );
};