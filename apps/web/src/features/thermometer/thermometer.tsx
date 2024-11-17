interface ThemometerProps {
    temperature: number;
    min?: number;
    max?: number;
}

export const Thermometer: React.FC<ThemometerProps> = ({
    temperature,
    min = -30,
    max = 50,
}) => {
    const clampedTemperature = Math.max(min, Math.min(temperature, max));

    const percentage = ((clampedTemperature - min) / (max - min)) * 100;

    const getColor = (temperature: number) => {
        if (temperature < 0) return "bg-blue-400";
        if (temperature < 20) return "bg-green-400";

        return "bg-red-400";
    };

    const barColor = getColor(clampedTemperature);

    return (
        <div className="flex flex-col items-center">
            <div className="w-12 h-64 bg-gray-300 rounded-full relative overflow-hidden">
                <div
                    className={`${barColor} absolute bottom-0 w-full rounded-b-full`}
                    style={{height: `${percentage}%`}}
                ></div>
            </div>
            <div className="mt-4 text-xl font-bold">{temperature}°C</div>
        </div>
    );
};
