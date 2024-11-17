import {useQuery} from "@tanstack/react-query";
import {getMensaForecast, getMensaOccupancy} from "../api";

export const useMensaOccupancy = () => {
    const {data, ...query} = useQuery({
        queryFn: getMensaOccupancy,
        queryKey: ["mensa-occupancy"],
    });

    return {
        mensaOccupancy: data,
        ...query,
    };
};

export const useMensaOccupancyForecast = () => {
    const {data, ...query} = useQuery({
        queryFn: getMensaForecast,
        queryKey: ["mensa-occupancy-forecast"],
    });

    return {
        mensaOccupancyForecast: data,
        ...query,
    };
};
