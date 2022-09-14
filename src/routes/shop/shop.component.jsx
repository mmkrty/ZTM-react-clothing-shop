import { Route, Routes } from "react-router-dom";

import { useEffect } from "react";
import { getCollectionsAndDocuments } from "../../utils/firebase/firebase.utils";
import { useDispatch } from "react-redux";
import { setCategoriesMap } from "../../store/categories/category.action";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import "./shop.styles.scss";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCollectionsAndDocuments();
      // console.log(categoryMap);
      dispatch(setCategoriesMap(categoryMap));
    };

    getCategoriesMap();
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
