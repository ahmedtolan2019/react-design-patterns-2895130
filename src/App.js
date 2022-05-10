import { CurrentUserLoader } from "./CurrentUserLoader";
import { ResourceLoader } from "./ResourceLoader";
import { UserInfo } from "./UserInfo";
import { ProductInfo } from "./ProductInfo";
import { UserLoader } from "./UserLoader";
import { DataSource } from "./DataSource";
import axios from "axios";

const getServerData = (url) => async () => {
  const response = await axios.get(url);
  return response.data;
};
const getLocalStorageData = (key) => async () => {
  const productTest = {
    id: "3456",
    name: "LocalStorage",
    price: "$120",
    description: "State-of-the-art technology for optimum running",
    rating: 4.2,
  };
  localStorage.setItem("test", JSON.stringify(productTest));
  const result = localStorage.getItem(key);
  console.log(JSON.parse(result));
  return await JSON.parse(result);
};

function App() {
  return (
    <>
      <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>
      <UserLoader userId={"234"}>
        <UserInfo />
      </UserLoader>
      <ResourceLoader
        resourceName={"user"}
        resourceUrl={"http://localhost:8080/users/345"}
      >
        <UserInfo />
      </ResourceLoader>
      {/* <ResourceLoader
        resourceName={"product"}
        resourceUrl={"http://localhost:8080/products/1234"}
      >
        <ProductInfo />
      </ResourceLoader> */}

      <DataSource
        resourceName={"user"}
        getResource={getServerData(`http://localhost:8080/users/123`)}
      >
        <UserInfo />
      </DataSource>
      <DataSource
        resourceName={"product"}
        getResource={getLocalStorageData("test")}
      >
        <ProductInfo />
      </DataSource>
    </>
  );
}

export default App;
