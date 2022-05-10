import { CurrentUserLoader } from "./CurrentUserLoader";
import { ResourceLoader } from "./ResourceLoader";
import { UserInfo } from "./UserInfo";
import { ProductInfo } from "./ProductInfo";
import { UserLoader } from "./UserLoader";

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
      <ResourceLoader
        resourceName={"product"}
        resourceUrl={"http://localhost:8080/products/1234"}
      >
        <ProductInfo />
      </ResourceLoader>
    </>
  );
}

export default App;
