function ProductsList(props) {
  return (
    <div className="product">
      <p>{props.name}</p>
      <p>{props.price}</p>
      <p>{props.stock}</p>
    </div>
  );
}

export default ProductsList;