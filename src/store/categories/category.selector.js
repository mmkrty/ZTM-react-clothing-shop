import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;

      // console.log(title, items);
      acc[title.toLowerCase()] = items;
      // console.log(acc);
      return acc;
    }, {})
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);

// export const selectCategoriesMap = (state) =>
// state.categories.categories.reduce((acc, category) => {
//   const { title, items } = category;

//   // console.log(title, items);
//   acc[title.toLowerCase()] = items;
//   // console.log(acc);
//   return acc;
// }, {});
