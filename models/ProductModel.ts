export class ProductModel {
  sku: string;
  quantity: Number;
  name: string;
  images: File[];
  price: Number;
  description: string;
  isFavourite: boolean;

  constructor(
    sku: string,
    quantity: Number,
    name: string,
    images: File[],
    price: Number,
    description: string,
    isFavourite: boolean
  ) {
    this.sku = sku;
    this.quantity = quantity;
    this.name = name;
    this.images = images;
    this.price = price;
    this.description = description;
    this.isFavourite = isFavourite;
  }
}
