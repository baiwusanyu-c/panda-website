import type {NewsInfoIer} from "@/app/news/api/route";

interface InfoCardProps {
    info: NewsInfoIer
}
export function InfoCard(props: InfoCardProps) {
    const {
        info
    } = props;
    return <div>
        {JSON.stringify(info)}
    </div>
}
