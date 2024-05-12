import { useState } from "react";
import { faker } from "@faker-js/faker";
import "./App.css";
import List from "./List";
import ProductItem from "./ProductItem";
import CompanyItem from "./CompanyItem";
import withToggles from "./HOC";
import ProductList from "./ProductList";

const products = Array.from({ length: 20 }, () => {
  return {
    productName: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
  };
});

const companies = Array.from({ length: 15 }, () => {
  return {
    companyName: faker.company.name(),
    phrase: faker.company.catchPhrase(),
  };
});

// HOC Pattern
// Assigning returned component to new variable
const ProductLictWithToggles = withToggles(ProductList);

export default function App() {
  return (
    <div>
      <h1>Render Props Demo</h1>

      {/* <div className="col-2"> */}
      {/* ** Render Props Pattern ** */}
      {/* Using the render prop to invert how List component should render to the user of the component(App) */}
      {/* With this we can easily resuse List component with company as well */}
      {/* <List
          title="Products"
          items={products}
          render={(product) => (
            <ProductItem key={product.productName} product={product} />
          )}
        />

        <List
          title="Companies"
          items={companies}
          render={(company) => (
            <CompanyItem
              key={company.companyName}
              company={company}
              defaultVisibility={false}
            />
          )}
        />
      </div> */}

      <div className="col-2">
        <ProductList title="Products HOC" items={products} />
        <ProductLictWithToggles title="Products HOC" items={products} />
      </div>
    </div>
  );
}
