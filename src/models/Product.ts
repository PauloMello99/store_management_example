import { MyObject } from "./MyObject";

export class Product implements MyObject<Product> {
    constructor(
        readonly name: string,
        readonly quantity: number,
        readonly value: number,
        readonly dateOfAcquisition: Date
    ) {}

    get total() {
        return this.quantity * this.value;
    }

    toString() {
        return JSON.stringify({
            name: this.name,
            quantity: this.quantity,
            value: this.value,
            dateOfAcquisition: this.dateOfAcquisition.toDateString(),
        });
    }

    equals(obj: Product): boolean {
        return this.toString() === obj.toString();
    }
}
