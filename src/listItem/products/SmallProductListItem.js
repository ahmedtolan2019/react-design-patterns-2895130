export const SmallProductListItem = ({ product }) => {
  console.log(product);
  const { name, price } = product;
  return (
    <>
      <h3>{name}</h3>
      <p> price: {price}</p>
    </>
  );
};
