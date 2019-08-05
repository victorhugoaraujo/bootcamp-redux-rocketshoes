import React from 'react';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_detalhe2.jpg?resize=326:*"
          alt="Tênis"
        />
        <strong>Tênis nike</strong>
        <span>R$79,90</span>

        <button type="button">
          <div />
        </button>
      </li>
    </ProductList>
  );
}
