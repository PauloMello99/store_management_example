import { MyObject } from "./MyObject";
import { Product } from "./Product";

export class ProductList implements MyObject<ProductList> {
    private _products: Array<Product> = [];

    constructor(products?: Product[]) {
        if (products) this._products = products;
    }

    add(product: Product) {
        this._products.push(product);
    }

    remove(product: Product) {
        const prodCopy = [...this._products];
        const index = prodCopy.findIndex((prod) => prod.equals(product));
        if (index >= 0) prodCopy.splice(index, 1);
        this._products = prodCopy;
    }

    toArray() {
        return ([] as Array<Product>).concat(this._products);
    }

    toString() {
        return JSON.stringify(this._products);
    }

    equals(obj: ProductList): boolean {
        return JSON.stringify(this._products) === JSON.stringify(obj);
    }
}
