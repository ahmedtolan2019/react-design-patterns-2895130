import React, { useState, useEffect } from "react";
import axios from "axios";

export const DataSource = ({
  getResource = () => {},
  resourceName,
  children,
}) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getResource();
      setResource(data);
    })();
  }, [getResource]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: resource });
        }

        return child;
      })}
    </>
  );
};
