import type { NextApiRequest, NextApiResponse } from "next";

import type { SnipcartShippingRate } from "../../../types";

interface SnipcartRequest extends NextApiRequest {
  body: {
    eventName: string;
    mode: string;
    createdOn: string;
    content: { [key: string]: any };
  };
}

type Data = {
  /** An array of shipping rates. */
  rates: SnipcartShippingRate[];
};

type Error = {
  errors: { key: string; message: string }[];
};

export default async function handler(
  req: SnipcartRequest,
  res: NextApiResponse<Data | Error>
) {
  const { eventName, content } = req.body;

  if (eventName !== "shippingrates.fetch") return res.status(200).end();
  if (content.items.length === 0) return res.status(200).end();

  res.status(200).json({
    rates: [
      {
        cost: 5.00,
        description: "Standard Shipping",
        userDefinedId: "standard-shipping",
        guaranteedDaysToDelivery: 5,
      },
      {
        cost: 15.00,
        description: "Express Shipping",
        userDefinedId: "express-shipping",
        guaranteedDaysToDelivery: 2,
      },
    ],
  });
}
