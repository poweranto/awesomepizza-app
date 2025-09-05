export type Pizza = {
  id: number
  name: string,
  description: string,
};
export type OrderStatus = "PENDING" | "IN_PROGRESS" | "COMPLETED"  | "CANCELLED";

export type Order = {
  id: number
  code: string,
  pizza: Pizza,
  status: OrderStatus,
  createdAt: string,
};

/*export interface Product {
  sku: string,
  pic: string | undefined,
  des: string,
  qty: number,
  val: string,
}*/