import React from 'react';
import { NavButton, Navbar, Button, Category, CategoriesContainer } from '../components';

import '../styles/HomePage.css';


export default () =>
  <div>
    <Navbar />
    <h1 className="HomePage-title">Bon gros titre</h1>
    <p className="HomePage-description">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim non placeat nihil molestias nisi nesciunt similique facilis sapiente, veritatis numquam eius libero praesentium quaerat, provident nulla iusto earum quisquam distinctio ut repudiandae ipsam eum quidem reiciendis fugiat? Explicabo repudiandae error eos eligendi accusantium, totam fuga ab magni illo quaerat velit dolorem vero dolor maiores consequuntur veniam nisi, provident tempora? Nostrum minima laudantium incidunt laborum itaque natus reiciendis corporis sequi expedita iure molestiae necessitatibus, ipsa praesentium, libero totam facere deserunt vel dicta! Voluptatum, doloremque. Voluptate deleniti qui architecto fugit corporis odit alias officiis dolorum impedit perferendis deserunt, voluptatem debitis in! Recusandae.
    </p>
    <CategoriesContainer />
  </div>
;
