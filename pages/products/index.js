import React from "react";
import Layout from "../../components/layout";
import productData from "../../data/products.json";

export async function getStaticProps() {
  const products = productData.map((product) => {
    return product;
  });

  return {
    props: { products },
  };
}

export default function Products({ products }) {
  return (
    <Layout>
      <h1>Product page</h1>
    </Layout>
  );
}
