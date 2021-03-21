import { Product } from "models/Product";
import { ProductList } from "models/ProductList";

import ProductCard from "./ProductCard";

import { Container } from "./styles";

const EMPTY_LIST_FEEDBACK = "Nenhum produto cadastrado até o momento!";

interface FeedbackProps {
    message: string;
}

function Feedback({ message }: FeedbackProps) {
    return (
        <div className="feedback-container">
            <span className="feedback">{message}</span>
        </div>
    );
}

interface ProductsViewProps {
    products: ProductList;
    onRemove: (p: Product) => void;
}

function ProductsView({ products, onRemove }: ProductsViewProps) {
    const list = products.toArray();

    function handleRemove(product: Product) {
        onRemove(product);
    }

    return (
        <Container>
            {list.length ? (
                list.map((prod, index) => (
                    <ProductCard
                        key={`product_${index}`}
                        product={prod}
                        onRemove={handleRemove}
                    />
                ))
            ) : (
                <Feedback message={EMPTY_LIST_FEEDBACK} />
            )}
        </Container>
    );
}

export default ProductsView;
