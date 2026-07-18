import type { NextApiRequest, NextApiResponse } from "next";

import { mockProducts } from "../../../lib/mock-products";

type Data = {
  id: string;
  price: number;
  url: string;
};

type Error = {
  errors: { key: string; message: string }[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {
  const { id } = req.query;

  try {
    // Find the variant within mockProducts
    const variant = mockProducts
      .flatMap((product) => product.variants)
      .find((v) => v.external_id === id);

    if (!variant) {
      throw new Error(`Variant not found for ID: ${id}`);
    }

    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");

    res.status(200).json({
      id: id as string,
      price: variant.retail_price,
      url: `/api/products/${id}`,
    });
  } catch (err: any) {
    console.log(err);
    res.status(404).json({
      errors: [
        {
          key: err?.message || "not_found",
          message: err?.message || "Variant not found",
        },
      ],
    });
  }
}
