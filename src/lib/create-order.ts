import type { SnipcartWebhookContent } from "../types";

const createOrder = async ({
  invoiceNumber,
  email,
  shippingAddress,
  items,
  shippingRateUserDefinedId,
}: SnipcartWebhookContent) => {
  console.log("Mock Order Created:", invoiceNumber, "for", email);
  console.log("Shipping to:", shippingAddress);
  console.log("Items:", items);
  console.log("Shipping Method ID:", shippingRateUserDefinedId);

  return {
    success: true,
    invoiceNumber,
    message: "Order bypass Printful completed successfully.",
  };
};

export default createOrder;
