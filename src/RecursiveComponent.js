const isObject = (x) => typeof x === "object" && x !== null;

export const RecursiveComponent = ({ data }) => {
  if (!isObject(data)) {
    return <li>{data}</li>;
  }

  let pairs = Object.entries(data);
  return (
    <ul>
      {pairs.map(([key, value]) => {
        return (
          <>
            <li key={key}>{key}</li>
            <ul>
              <RecursiveComponent data={value} />
            </ul>
          </>
        );
      })}
    </ul>
  );
};
