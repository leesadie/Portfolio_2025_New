import ClientOnly from "../components/ClientOnly";
import MCP_Client from "./MCP_Client";

const MCP_Page = () => {
    return (
        <ClientOnly>
            <MCP_Client />
        </ClientOnly>
    );
}

export default MCP_Page;