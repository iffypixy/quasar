import {useQuery} from "@tanstack/react-query";
import {getWeatherData} from "../api";

export const useWeather = () => {
    const {data, ...query} = useQuery({
        queryFn: getWeatherData,
        queryKey: ["weather"],
    });

    return {
        weather: data,
        ...query,
    };
};
