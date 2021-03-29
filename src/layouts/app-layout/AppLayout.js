import React from "react";
import SearchBar from "../../components/search-bar/SearchBar";
import "./app-layout.scss"

function AppLayout({ children }) {
  return (
    <div>
      <SearchBar />
      {children}
    </div>
  );
}

export default AppLayout;
