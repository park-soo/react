import ExEffect, { ExEffect2 } from "./ExEffect";
import BRouter from "./ExRouter";

function Switch({ target }) {
    switch (target) {
        case "e1":
            return <ExEffect />;
        case "e2":
            return <ExEffect2 />;
        case "r1":
            return <BRouter />;
        default:
            break;
    }
}
Switch.defaultProps = {
    target: "r1",
};
export default Switch;
