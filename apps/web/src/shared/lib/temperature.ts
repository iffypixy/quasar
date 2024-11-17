export function calculateFeelsLikeTemperature(
    temperature: number,
    windSpeed: number,
    humidity: number,
): number {
    const windSpeedMph = windSpeed * 0.621371;

    if (temperature <= 10 && windSpeed >= 4.8) {
        const windFactor = Math.pow(windSpeedMph, 0.16);
        const windChill =
            13.12 +
            0.6215 * temperature -
            11.37 * windFactor +
            0.3965 * temperature * windFactor;
        return windChill;
    } else if (temperature > 10) {
        throw new Error(
            "This function is currently for cold conditions only (≤10°C).",
        );
    } else {
        let feelsLike = temperature;

        if (humidity > 80) {
            feelsLike -= 1;
        }

        return feelsLike;
    }
}
