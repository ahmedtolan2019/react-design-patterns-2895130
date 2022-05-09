export const SmallPersonListItem = ({ person }) => {
  console.log(person);
  const { name, age } = person;
  return (
    <>
      <h3>{name}</h3>
      <p> Age: {age}</p>
    </>
  );
};
