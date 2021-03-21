import { ReactNode } from "react";
import { Container, Wrapper } from "./styles";

interface PageWrapperProps {
    children: ReactNode;
}

function PageWrapper({ children }: PageWrapperProps) {
    return (
        <Container>
            <Wrapper>{children}</Wrapper>
        </Container>
    );
}

export default PageWrapper;
