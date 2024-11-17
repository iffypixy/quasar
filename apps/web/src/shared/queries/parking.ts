import {useQuery} from "@tanstack/react-query";
import {getParkingSlotsData, getParkingSlotsForecast} from "../api";

export const useParkingOccupancy = () => {
    const {data, ...query} = useQuery({
        queryFn: getParkingSlotsData,
        queryKey: ["parking-occupancy"],
    });

    return {
        parkingOccupancy: data,
        ...query,
    };
};

export const useParkingOccupancyForecast = () => {
    const {data, ...query} = useQuery({
        queryFn: getParkingSlotsForecast,
        queryKey: ["parking-occupancy-forecast"],
    });

    return {
        parkingOccupancyForecast: data,
        ...query,
    };
};
