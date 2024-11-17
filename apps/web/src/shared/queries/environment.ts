import {useQuery} from "@tanstack/react-query";
import {getEnvironmentalData} from "../api";

export const useEnvironment = () => {
    const {data, ...query} = useQuery({
        queryFn: getEnvironmentalData,
        queryKey: ["environment"],
    });

    return {
        environment: data,
        ...query,
    };
};
