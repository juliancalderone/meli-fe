import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import logo from "../../assets/logo-ml.png";
import icSearch from "../../assets/ic_Search.png";
import "./search-bar.scss";
import { useProducts } from "../../providers/products/Products";
import { getProducts } from "../../api/api";

function SearchBar() {
  const [_, setProductsData] = useProducts();
  const [query, setQuery] = useState("");
  let history = useHistory();
  let location = useLocation();

  const fetchProducts = async () => {
    try {
      const data = await getProducts(query);
      setProductsData(data);
      history.push("/items?search");
    } catch(error) {
      console.error(error)
    }
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchValue = searchParams.get("search");
    if (searchValue) {
      setQuery(searchValue);
      history.push(`/items${searchParams}`);
    }
  }, []);

  useEffect(() => {
    if (query) {
      const params = new URLSearchParams();
      params.append("search", query); 
      history.push({ search: params.toString() });
    }
  }, [query]);

  return (
    <div className="searchBar">
      <div className="container">
        <img className="logo" src={logo} alt="Logo de Mercado Libre"></img>
        <input
          className="mlInput"
          id="searchBox"
          type="text"
          placeholder="Nunca dejes de buscar"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>
        <button className="mlButton" onClick={fetchProducts}>
          <img className="searchIcon" src={icSearch} alt="Ícono de búsqueda" />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
