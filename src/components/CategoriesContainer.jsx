import React from 'react';
import { Category } from '.';

import { categoryData } from '../data';

import '../styles/CategoriesContainer.css';

const generateCategories = () =>
  categoryData.map(item =>
    <Category
      key={item.name}
      name={item.name}
      picture={item.picture}
      />
  )
;

export default () =>
  <section className="CategoriesContainer">
    {generateCategories()}
  </section>
;
