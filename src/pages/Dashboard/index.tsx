import { useMemo, useState } from "react";

import PageWrapper from "components/PageWrapper";
import { useHistory } from "react-router";
import { useProducts } from "hooks/products";
import { FaPlus } from "react-icons/fa";

import { Product } from "models/Product";
import { ProductList } from "models/ProductList";

import ProductsView from "components/ProductsView";

import { Container, InputContainer, OptionsContainer } from "./styles";

const SEARCH_PLACEHOLDER = "Procurar produto...";
const ADD_PRODUCT = "Produto";

function Dashboard() {
    const { products, removeProduct } = useProducts();
    const history = useHistory();

    const [search, setSearch] = useState("");

    function goToNewProductForm() {
        history.push("/product-form");
    }

    function onProductRemove(product: Product) {
        removeProduct(product);
    }

    function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
        setSearch(e.target.value);
    }

    const list: ProductList = useMemo(() => {
        if (!search.length) {
            return products;
        }

        const array = products.toArray();
        return new ProductList(
            array.filter((prod) => prod.name.indexOf(search) !== -1)
        );
    }, [products, search]);

    return (
        <PageWrapper>
            <Container>
                <OptionsContainer>
                    <InputContainer>
                        <input
                            type="text"
                            placeholder={SEARCH_PLACEHOLDER}
                            value={search}
                            onChange={handleSearchChange}
                        />
                    </InputContainer>
                    <button onClick={goToNewProductForm} className="primary">
                        <FaPlus size={16} />
                        <span>{ADD_PRODUCT}</span>
                    </button>
                </OptionsContainer>
                <ProductsView products={list} onRemove={onProductRemove} />
            </Container>
        </PageWrapper>
    );
}

export default Dashboard;
