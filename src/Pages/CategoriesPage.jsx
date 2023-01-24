import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const CategoriesPage = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center py-8">
      <button onClick={() => dispatch(checkStatus)} type="button" className="border-2 border-fuchsia-500 p-2 cursor-pointer rounded-lg">Check Status</button>
    </div>
  );
};

export default CategoriesPage;
