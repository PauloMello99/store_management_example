export interface MyObject<T> {
    toString(): string;
    equals(obj: T): boolean;
}
