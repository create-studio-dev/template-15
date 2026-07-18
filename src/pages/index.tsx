import * as React from "react";
import { GetStaticProps } from "next";
import shuffle from "lodash.shuffle";

import { mockProducts } from "../lib/mock-products";
import { PrintfulProduct } from "../types";

import ProductGrid from "../components/ProductGrid";

type IndexPageProps = {
  products: PrintfulProduct[];
};

const IndexPage: React.FC<IndexPageProps> = ({ products }) => (
  <>
    <div className="text-center pb-6 md:pb-12">
      <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">
        All Products
      </h1>
    </div>

    <ProductGrid products={products} />
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      products: shuffle(mockProducts),
    },
  };
};

export default IndexPage;
