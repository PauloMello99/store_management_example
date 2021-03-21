import React, { useCallback, useContext, useState } from "react";
import PropTypes from "prop-types";

import { ProductList } from "models/ProductList";
import { Product } from "models/Product";

interface ProductsProviderProps {
    children: React.ReactNode;
}

interface ProductsContextProps {
    products: ProductList;
    addProduct: (product: Product) => void;
    removeProduct: (product: Product) => void;
}

const NOOP = () => {};

const ProductsContext = React.createContext<ProductsContextProps>({
    products: new ProductList(),
    addProduct: NOOP,
    removeProduct: NOOP,
});

function ProductsProvider({ children }: ProductsProviderProps) {
    const [products, setProducts] = useState(new ProductList());

    const addProduct = useCallback(
        (prod: Product) => {
            products.add(prod);
            // Pass new instance to trigger render
            setProducts(new ProductList(products.toArray()));
        },
        [products]
    );

    const removeProduct = useCallback(
        (prod: Product) => {
            products.remove(prod);
            // Pass new instance to trigger render
            setProducts(new ProductList(products.toArray()));
        },
        [products]
    );

    return (
        <ProductsContext.Provider
            value={{ products, addProduct, removeProduct }}
        >
            {children}
        </ProductsContext.Provider>
    );
}

function useProducts() {
    const context = useContext(ProductsContext);

    if (!context) {
        throw new Error("useProducts must be used within an ProductsProvider.");
    }

    return context;
}

ProductsProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { ProductsProvider, ProductsContext, useProducts };
