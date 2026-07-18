import type { NextApiRequest, NextApiResponse } from "next";

import type { SnipcartTaxItem } from "../types";

interface SnipcartRequest extends NextApiRequest {
  body: {
    eventName: string;
    mode: string;
    createdOn: string;
    content: { [key: string]: any };
  };
}

type Data = {
  /** An array of tax rates. */
  taxes: SnipcartTaxItem[];
};

type Error = {
  errors: { key: string; message: string }[];
};

const calculateTaxes = async (
  req: SnipcartRequest,
  res: NextApiResponse<Data | Error>
) => {
  const { content } = req.body;

  if (content.items.length === 0)
    return res.status(200).json({
      errors: [
        {
          key: "no_items",
          message: "No items in cart to calculate taxes.",
        },
      ],
    });

  res.status(200).json({
    taxes: [
      {
        name: "Tax",
        amount: 0.00,
        rate: 0,
      },
    ],
  });
};

export default calculateTaxes;
