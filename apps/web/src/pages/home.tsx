import {
    WindIcon,
    DropletsIcon,
    SunIcon,
    RadioIcon,
    UtensilsCrossed,
} from "lucide-react";

import {Counter} from "../features/counter/counter";
import {formatDate} from "../shared/lib/date";
import {useEnvironment} from "../shared/queries/environment";
import {
    useMensaOccupancy,
    useMensaOccupancyForecast,
} from "../shared/queries/mensa";
import {
    useParkingOccupancy,
    useParkingOccupancyForecast,
} from "../shared/queries/parking";
import {useWeather} from "../shared/queries/weather";
import {Icon} from "../shared/ui/icons";
import campus from "../shared/assets/weather.jpg";
import mensa from "../shared/assets/mensa.jpeg";
import parkhaus from "../shared/assets/parkhaus.jpg";
import {calculateFeelsLikeTemperature} from "../shared/lib/temperature";

export const HomePage: React.FC = () => {
    const {weather} = useWeather();
    const {environment} = useEnvironment();
    const {mensaOccupancy} = useMensaOccupancy();
    const {mensaOccupancyForecast} = useMensaOccupancyForecast();
    const {parkingOccupancy} = useParkingOccupancy();
    const {parkingOccupancyForecast} = useParkingOccupancyForecast();

    console.log(
        weather,
        environment,
        mensaOccupancy,
        mensaOccupancyForecast,
        parkingOccupancy,
        parkingOccupancyForecast,
    );

    if (
        !weather ||
        !environment ||
        !mensaOccupancy ||
        !mensaOccupancyForecast ||
        !parkingOccupancy ||
        !parkingOccupancyForecast
    )
        return null;

    return (
        <div className="min-h-screen flex flex-col gap-24 2xl:justify-between p-4 md:p-8 lg:p-24">
            <header className="flex justify-between items-center">
                <Icon.Logo className="w-48" />

                <div className="flex flex-col min-w-56 items-end">
                    <p className="font-medium text-xl">
                        {formatDate(new Date())}
                    </p>

                    <p className="text-5xl font-medium">
                        <Counter />
                    </p>
                </div>
            </header>

            <main className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <h3 className="text-5xl font-black">
                        Welcome back to campus!
                    </h3>

                    <p className="text-xl opacity-80 inline-flex gap-2 items-center">
                        <RadioIcon className="text-[#10F20B]" />
                        Real-time information you need for a smooth campus
                        experience at your fingertips
                    </p>
                </div>

                <div className="flex flex-1 flex-wrap -m-4">
                    <div className="w-full 2xl:w-1/2 p-4">
                        <div className="w-full h-full flex flex-col justify-between rounded-md bg-[#57a9cc] relative p-12">
                            <div
                                className="left-0 top-0 absolute bg-cover z-10 w-full h-full opacity-10 bg-center"
                                style={{
                                    backgroundImage: `url(${campus})`,
                                }}
                            />

                            <div className="flex items-center gap-8">
                                <h4 className="text-8xl font-bold">
                                    {Math.round(environment.temperature)}°C
                                </h4>

                                <p className="text-3xl font-medium">
                                    (feels like{" "}
                                    {Math.floor(
                                        calculateFeelsLikeTemperature(
                                            environment.temperature,
                                            weather.windSpeed,
                                            environment.humidity,
                                        ),
                                    )}
                                    °C)
                                </p>
                            </div>

                            <div className="flex font-medium text-3xl justify-between">
                                <div className="flex items-center gap-4">
                                    <WindIcon className="w-16 h-auto" />

                                    <span>
                                        {weather.windSpeed.toFixed(1)} km/h
                                    </span>
                                </div>

                                <div className="flex items-center gap-4">
                                    <DropletsIcon className="w-16 h-auto" />

                                    <span>
                                        {environment.humidity.toFixed(0)}%
                                    </span>
                                </div>

                                <div className="flex items-center gap-4">
                                    <SunIcon className="w-16 h-auto" />

                                    <span>
                                        {weather.sunBrightness.average.toFixed(
                                            0,
                                        )}{" "}
                                        lux
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 2xl:w-1/4 p-4">
                        <div className="w-full h-full rounded-md bg-[#FFA500] relative p-8">
                            <div
                                className="left-0 top-0 absolute bg-cover z-10 w-full h-full opacity-10 bg-center"
                                style={{
                                    backgroundImage: `url(${mensa})`,
                                }}
                            />

                            <div className="flex flex-col gap-8">
                                <h3 className="text-4xl font-black">Mensa</h3>

                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-4">
                                        <Icon.Crowd className="w-12 h-auto" />

                                        <div className="flex items-center gap-4">
                                            <h4 className="text-4xl font-black">
                                                {Math.floor(
                                                    (mensaOccupancy.occupancy /
                                                        mensaOccupancy.capacity) *
                                                        100,
                                                )}
                                                %
                                            </h4>

                                            <span className="opacity-75 text-2xl font-medium">
                                                ({mensaOccupancy.occupancy} /{" "}
                                                {mensaOccupancy.capacity})
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex gap-9 items-start">
                                        <UtensilsCrossed className="w-12 h-auto" />

                                        <ul className="flex flex-col text-xl font-bold list-disc">
                                            <li>Goulash</li>
                                            <li>Sausages</li>
                                            <li>Meatballs</li>
                                            <li>Salad</li>
                                            <li>Fried salmon</li>
                                            <li>Rice</li>
                                            <li>Pasta</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 2xl:w-1/4 p-4">
                        <div className="w-full h-full rounded-md bg-[#7D8F9E] relative p-8">
                            <div
                                className="left-0 top-0 absolute bg-cover z-10 w-full h-full opacity-10 bg-center"
                                style={{
                                    backgroundImage: `url(${parkhaus})`,
                                }}
                            />

                            <div className="flex flex-col gap-8">
                                <h3 className="text-4xl font-black">
                                    Free parking slots
                                </h3>

                                <div className="flex flex-col h-full justify-between">
                                    {parkingOccupancy.map((park) => (
                                        <div
                                            key={park.id}
                                            className="flex flex-col"
                                        >
                                            <h6 className="text-2xl font-semibold">
                                                {park.name}
                                            </h6>

                                            <div className="flex items-center gap-2">
                                                <h4 className="text-3xl font-black">
                                                    {Math.floor(
                                                        (park.occupancy.total /
                                                            park.capacity) *
                                                            100,
                                                    )}
                                                    %
                                                </h4>

                                                <span className="text-lg font-semibold opacity-90">
                                                    ({park.occupancy.total} /{" "}
                                                    {park.capacity})
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};
