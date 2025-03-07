import ClientOnly from "../components/ClientOnly";
import TIR_Client from "./TIR_Client";

const TIR_Page = () => {
    return (
        <ClientOnly>
            <TIR_Client />
        </ClientOnly>
    );
}

export default TIR_Page;