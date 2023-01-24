import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const CategoriesPage = () => {
  const dispatch = useDispatch();
  const statuss = useSelector((state) => state.categoriesRed);
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <button onClick={() => dispatch(checkStatus())} type="button" className="border-2 border-fuchsia-500 p-2 cursor-pointer rounded-lg">Check Status</button>
      <p>{statuss}</p>
    </div>
  );
};

export default CategoriesPage;
