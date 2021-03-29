import React from "react";
import SearchBar from "../../components/search-bar/SearchBar";

function AppLayout({ children }) {
  return (
    <div>
      <SearchBar />
      {children}
    </div>
  );
}

export default AppLayout;
