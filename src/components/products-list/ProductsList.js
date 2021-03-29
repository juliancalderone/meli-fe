import React from "react";
import { useHistory } from "react-router-dom";
import "./products-list.scss";
import shippingIcon from "../../assets/ic_shipping.png";
import { useProducts } from "../../providers/products/Products";

function ProductsList() {
  const [{ items, categories }] = useProducts();
  let history = useHistory();

  const goToProduct = (item) => {
    history.push(`/items/${item.id}`);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("es-ES").format(price);
  };

  if (!items) return null;

  return (
    <div className="productsList">
      <div className="container">
        <ul className="breadcrums">
          {categories.map((category) => (
            <li key={category} className="categories">
              {category}
            </li>
          ))}
        </ul>
        <ul className="list">
          {items.map((item) => (
            <li
              key={item.id}
              className="item"
              onClick={() => goToProduct(item)}
            >
              <img
                className="thumbnail"
                src={item.picture}
                alt="Foto producto"
              ></img>
              <div className="itemDesc">
                <div className="header">
                  <div className="price">
                    $ {formatPrice(item.price.amount)}
                    <img
                      className="shippingIcon"
                      src={shippingIcon}
                      alt="Ícono camión entrega producto"
                    ></img>
                  </div>
                  <div className="location">{item.state}</div>
                </div>

                <div className="description">{item.title}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductsList;
