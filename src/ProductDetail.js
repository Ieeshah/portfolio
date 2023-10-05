
import Product from "./Product";
// import logo from "./logo192.png

const orderProducts = prompt("Order your Car");

const ProductDetails = () => {
  const myProduct = [
    { title: "Porsche", price: "2550", desc: "i am a sdikfv d dx xX CAR" },
    { title: "Porsche", price: "2550", desc: "i am a sdikfv d dx xX CAR" },
    { title: "Porsche", price: "2550", desc: "i am a sdikfv d dx xX CAR" },
  ];

  return (
    <>
      <div className="section">
        <Product
          title={orderProducts}
          price={myProduct[0].price}
          desc={myProduct[0].desc}
        />
        <Product
          title={myProduct[0].title}
          price="2000"
          desc="i dkd dkdifjhuygs hbvdu fbhdbuoa"
        />
        <Product
          title="Car"
          price="2000"
          desc="i dkd dkdifjhuygs hbvdu fbhdbuoa"
        />
        <Product
          title="Car"
          price="2000"
          desc="i dkd dkdifjhuygs hbvdu fbhdbuoa"
        />
        <Product
          title="Bus"
          price="2000"
          desc="i dkd dkdifjhuygs hbvdu fbhdbuoa"
        />
        <Product
          title="Bus"
          price="2000"
          desc="i dkd dkdifjhuygs hbvdu fbhdbuoa"
        />
        <Product
          title="Bus"
          price="2000"
          desc="i dkd dkdifjhuygs hbvdu fbhdbuoa"
        />
        <Product
          title="Bus"
          price="2000"
          desc="i dkd dkdifjhuygs hbvdu fbhdbuoa"
        />
      </div>
    </>
  );
};

export default ProductDetails;
