import * as React from "react"

const ProductsContext = React.createContext()

function useProducts() {
  const context = React.useContext(ProductsContext)
  if (!context) {
    throw new Error(`useProducts must be used within a ProductsProvider`)
  }
  return context
}

function ProductsProvider(props) {
  const [productsData, setProductsData] = React.useState([]);
  const value = React.useMemo(() => [productsData, setProductsData], [productsData]);

  return <ProductsContext.Provider value={value} {...props}>
    {props.children}
  </ProductsContext.Provider>
}

export { ProductsProvider, useProducts };