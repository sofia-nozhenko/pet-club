import {ComingSoon} from "../../../components/sections/coming-soon";
import {comingSoonData} from "../../../lib/data";

export default function Page() {
    return (
        <ComingSoon {...comingSoonData} />
    );
};