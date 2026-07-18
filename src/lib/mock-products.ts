export interface MockVariantFile {
  type: string;
  preview_url: string;
}

export interface MockVariant {
  external_id: string;
  retail_price: number;
  currency: string;
  name: string;
  files: MockVariantFile[];
}

export interface MockProduct {
  id: string;
  name: string;
  variants: MockVariant[];
}

export const mockProducts: MockProduct[] = [
  {
    id: "prod_sweatshirt",
    name: "Classic Crewneck Sweatshirt",
    variants: [
      {
        external_id: "var_sweatshirt_s",
        retail_price: 39.00,
        currency: "USD",
        name: "Small",
        files: [
          {
            type: "preview",
            preview_url: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&q=80",
          }
        ]
      },
      {
        external_id: "var_sweatshirt_m",
        retail_price: 39.00,
        currency: "USD",
        name: "Medium",
        files: [
          {
            type: "preview",
            preview_url: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&q=80",
          }
        ]
      },
      {
        external_id: "var_sweatshirt_l",
        retail_price: 39.00,
        currency: "USD",
        name: "Large",
        files: [
          {
            type: "preview",
            preview_url: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&q=80",
          }
        ]
      }
    ]
  },
  {
    id: "prod_socks",
    name: "Premium Cotton Socks",
    variants: [
      {
        external_id: "var_socks_white",
        retail_price: 12.00,
        currency: "USD",
        name: "White",
        files: [
          {
            type: "preview",
            preview_url: "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=600&q=80",
          }
        ]
      }
    ]
  },
  {
    id: "prod_cap",
    name: "Retro Snapback Cap",
    variants: [
      {
        external_id: "var_cap_navy",
        retail_price: 24.50,
        currency: "USD",
        name: "Navy",
        files: [
          {
            type: "preview",
            preview_url: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=600&q=80",
          }
        ]
      }
    ]
  },
  {
    id: "prod_beanie",
    name: "Cozy Knit Beanie",
    variants: [
      {
        external_id: "var_beanie_mustard",
        retail_price: 18.00,
        currency: "USD",
        name: "Mustard",
        files: [
          {
            type: "preview",
            preview_url: "https://images.unsplash.com/photo-1576871337622-98d48d4aa53e?auto=format&fit=crop&w=600&q=80",
          }
        ]
      }
    ]
  },
  {
    id: "prod_hoodie",
    name: "Streetwear Oversized Hoodie",
    variants: [
      {
        external_id: "var_hoodie_grey_s",
        retail_price: 49.99,
        currency: "USD",
        name: "Small / Grey",
        files: [
          {
            type: "preview",
            preview_url: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=80",
          }
        ]
      },
      {
        external_id: "var_hoodie_grey_m",
        retail_price: 49.99,
        currency: "USD",
        name: "Medium / Grey",
        files: [
          {
            type: "preview",
            preview_url: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=80",
          }
        ]
      }
    ]
  },
  {
    id: "prod_totebag",
    name: "Eco-Friendly Canvas Tote Bag",
    variants: [
      {
        external_id: "var_tote_natural",
        retail_price: 15.00,
        currency: "USD",
        name: "Natural",
        files: [
          {
            type: "preview",
            preview_url: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80",
          }
        ]
      }
    ]
  }
];
