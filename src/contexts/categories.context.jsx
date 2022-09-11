import { createContext, useState, useEffect } from "react";
import {
  addCollectionsAndDocuments,
  getCollectionsAndDocuments,
} from "../utils/firebase/firebase.utils.js";
// import SHOP_DATA from "../shop-data.js";

//as the actual value you want to access
export const CategoriesContext = createContext({
  categoriesMap: {},
  setCategoriesMap: () => null,
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  // useEffect(() => {
  //   addCollectionsAndDocuments("categories", SHOP_DATA);
  // }, []);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCollectionsAndDocuments();
      // console.log(categoryMap);
      setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);
  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
