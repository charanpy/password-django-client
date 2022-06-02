import React, { useEffect, useState, useRef } from 'react';
import request from '../lib/request';
import Header from './Header.component';
import ImageAuthComponent from './ImageAuth.component';
import Loader from './Loader.component';

const CategoryComponent = ({ user, page }) => {
  const [categories, setCategories] = useState([]);
  // const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);
  const categoryRef = useRef();

  console.log('render');

  const getCategory = async () => {
    try {
      const data = await request('category/', 'GET', null, false);
      setCategories(data);
    } catch (error) {
    } finally {
      setLoading((load) => !load);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  const handleChange = async () => {
    try {
      const selectedCategory = categoryRef?.current?.value;
      console.log(selectedCategory);
      if (!selectedCategory) return;

      const data = await request(`image/?category=${selectedCategory}`, 'GET');
      setImages(data);
    } catch (error) {}
  };

  if (loading) return <Loader />;

  return (
    <section className='flex flex-col space-y-6 items-center'>
      <Header>Level 2 Authentication</Header>
      <select
        className='authInput'
        defaultValue=''
        ref={categoryRef}
        onChange={handleChange}
      >
        <option value=''>Select Category</option>
        {categories?.map((cate) => (
          <option key={cate?.id} value={cate?.id}>
            {cate?.name}
          </option>
        ))}
      </select>
      <ImageAuthComponent images={images} user={user} page={page} />
    </section>
  );
};

export default CategoryComponent;
