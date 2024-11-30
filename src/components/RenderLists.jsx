//* Here we use the .map() and the to render a list of elements to the user.

const products = [
  { title: "cabbage", id: 1, price: "$8.00", available: true },
  { title: "Garlic", id: 2, price: "$3.00", available: true },
  { title: "Apple", id: 3, price: "$5.00", available: false },
];

function RenderLists() {
  const productItem = products.map((product) => (
    <li style={{ color: product.available ? "green" : "red" }} key={product.id}>
      {product.title} {product.price}
    </li>
  ));
  return (
    <div>
      <h4>Rendering Lists:</h4>
      <ul>{productItem}</ul>;
    </div>
  );
}
export default RenderLists;
