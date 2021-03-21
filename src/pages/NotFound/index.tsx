import { Player } from "@lottiefiles/react-lottie-player";
import { useHistory } from "react-router";

import PageWrapper from "components/PageWrapper";
import { Container, Card, CardFeedback } from "./styles";

const NotFoundJSON =
    "https://assets4.lottiefiles.com/datafiles/mVuaYzsV6mwoEwK/data.json";

const FEEDBACK_MESSAGE =
    " Procuramos por esta página em todo lugar e não encontramos, tem certeza que o endereço está correto?";

const FEEDBACK_BUTTON = "Voltar ao Dashboard";

function NotFound() {
    const history = useHistory();

    function onGoBack() {
        history.replace("/");
    }

    return (
        <PageWrapper>
            <Container>
                <Card>
                    <Player
                        src={NotFoundJSON}
                        style={{ height: 200, width: 200 }}
                        autoplay
                        loop
                    />
                    <CardFeedback>
                        <span>{FEEDBACK_MESSAGE}</span>
                        <button onClick={onGoBack} className="primary">
                            {FEEDBACK_BUTTON}
                        </button>
                    </CardFeedback>
                </Card>
            </Container>
        </PageWrapper>
    );
}

export default NotFound;
