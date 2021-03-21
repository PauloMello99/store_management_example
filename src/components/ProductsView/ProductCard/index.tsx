import { Product } from "models/Product";

import { Container } from "./styles";

interface ProductCardProps {
    product: Product;
    onRemove: (prod: Product) => void;
}

function ProductCard({ product, onRemove }: ProductCardProps) {
    function handleRemove() {
        onRemove(product);
    }

    return (
        <Container>
            <span>Produto: {product.name}</span>
            <span>Valor: R$ {product.value.toFixed(2)}</span>
            <span>Quantidade: {product.quantity}</span>
            <span>Total: R$ {product.total.toFixed(2)}</span>
            <span>
                Aquisição: {product.dateOfAcquisition.toLocaleDateString()}
            </span>
            <button className="accent" onClick={handleRemove}>
                Remover
            </button>
        </Container>
    );
}

export default ProductCard;
