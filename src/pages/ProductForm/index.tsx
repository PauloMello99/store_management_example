import PageWrapper from "components/PageWrapper";
import { Field, Form, Formik } from "formik";
import { useProducts } from "hooks/products";
import { Product } from "models/Product";
import { useHistory } from "react-router";
import * as Yup from "yup";

import { Container } from "./styles";

interface ProductValues {
    name: string;
    quantity: number;
    value: number;
    dateOfAcquisition: Date | string;
}

const REQUIRED_FIELD = "Campo obrigatório";
const NAME_TOO_SMALL = "Nome pequeno demais!";
const NAME_TOO_BIG = "Nome grande demais!";
const INVALID_NUMBER = "Número inválido!";
const INVALID_INTEGER = "Quantidade deve ser um número inteiro!";
const QUANTITY_LIMIT = "É muita coisa! O limite é 50.";

const PRODUCT_NAME = "Nome";
const PRODUCT_QUANTITY = "Quantidade";
const PRODUCT_VALUE = "Valor";
const PRODUCT_ACQUISITION_DATE = "Data de aquisição";
const FORM_CANCEL = "Cancelar";
const FORM_SUBMIT = "Criar produto";

const productSchema: Yup.SchemaOf<ProductValues> = Yup.object().shape({
    name: Yup.string()
        .min(2, NAME_TOO_SMALL)
        .max(20, NAME_TOO_BIG)
        .required(REQUIRED_FIELD),
    quantity: Yup.number()
        .positive(INVALID_NUMBER)
        .integer(INVALID_INTEGER)
        .max(100, QUANTITY_LIMIT)
        .required(REQUIRED_FIELD),
    value: Yup.number().positive(INVALID_NUMBER).required(REQUIRED_FIELD),
    dateOfAcquisition: Yup.date().required(REQUIRED_FIELD),
});

function ProductForm() {
    const history = useHistory();
    const { addProduct } = useProducts();

    const initialValues: ProductValues = {
        name: "",
        quantity: 0,
        value: 0,
        dateOfAcquisition: "",
    };

    function goBack() {
        history.goBack();
    }

    function onSubmit(values: ProductValues) {
        const { name, quantity, value, dateOfAcquisition } = values;
        const product = new Product(
            name,
            quantity,
            value,
            new Date(dateOfAcquisition)
        );
        addProduct(product);
        goBack();
    }

    return (
        <PageWrapper>
            <Container>
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={productSchema}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <label htmlFor="name">{PRODUCT_NAME}</label>
                            <Field id="name" name="name" type="text" required />
                            {errors.name && touched.name && (
                                <div className="form-error">{errors.name}</div>
                            )}
                            <div className="form-row">
                                <div className="form-row-cell">
                                    <label htmlFor="quantity">
                                        {PRODUCT_QUANTITY}
                                    </label>
                                    <Field
                                        id="quantity"
                                        name="quantity"
                                        type="number"
                                        required
                                    />
                                    {errors.quantity && touched.quantity && (
                                        <div className="form-error">
                                            {errors.quantity}
                                        </div>
                                    )}
                                </div>
                                <div className="form-row-divider" />
                                <div className="form-row-cell">
                                    <label htmlFor="value">
                                        {PRODUCT_VALUE}
                                    </label>
                                    <Field
                                        id="value"
                                        name="value"
                                        type="number"
                                        required
                                    />
                                    {errors.value && touched.value && (
                                        <div className="form-error">
                                            {errors.value}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <label htmlFor="dateOfAcquisition">
                                {PRODUCT_ACQUISITION_DATE}
                            </label>
                            <Field
                                id="dateOfAcquisition"
                                name="dateOfAcquisition"
                                type="date"
                                required
                            />
                            {errors.dateOfAcquisition &&
                                touched.dateOfAcquisition && (
                                    <div className="form-error">
                                        {errors.dateOfAcquisition}
                                    </div>
                                )}
                            <div className="form-row form-actions">
                                <div className="form-row-cell">
                                    <button onClick={goBack} className="accent">
                                        {FORM_CANCEL}
                                    </button>
                                </div>
                                <div className="form-row-divider" />
                                <div className="form-row-cell">
                                    <button type="submit" className="primary">
                                        {FORM_SUBMIT}
                                    </button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </Container>
        </PageWrapper>
    );
}

export default ProductForm;
