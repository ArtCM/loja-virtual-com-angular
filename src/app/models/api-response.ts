import { ProductModel } from "./product";

export interface ApiResponseModel {

    total: number;
    skip: number;
    limit: number;
    products: ProductModel[];

}