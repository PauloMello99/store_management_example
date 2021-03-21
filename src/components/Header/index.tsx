import { Container, HeaderWrapper, Logo } from "./styles";

const TITLE = "Store Management";

function Header() {
    return (
        <Container>
            <HeaderWrapper>
                <Logo />
                {TITLE}
            </HeaderWrapper>
        </Container>
    );
}

export default Header;
