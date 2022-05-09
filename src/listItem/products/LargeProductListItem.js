export const LargeProductListItem = ({ product }) => {
  console.log(product);
  const { name, price, description, rating } = product;
  return (
    <>
      <h3>{name}</h3>
      <p> price: {price}</p>
      <p> description: {description}</p>
      <p> rating: {rating}</p>
    </>
  );
};
