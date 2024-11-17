import {BC_API_KEY} from "../config";

import {request} from "../lib/request";
import {Dto} from "./types";

type GetEnvironmentalDataDto = Dto<
    void,
    {
        entities: Array<{
            entityId: {
                entityType: string;
                id: string;
            };
            ENTITY_FIELD: {
                name: string;
                type: string;
            };
            TIME_SERIES: {
                ppmSO2: {
                    ts: number;
                    value: string;
                };
                temperatureSO2: {
                    ts: number;
                    value: string;
                };
                temperature: {
                    ts: number;
                    value: string;
                };
                relativeHumidity: {
                    ts: number;
                    value: string;
                };
                temperatureNO2: {
                    ts: number;
                    value: string;
                };
                pressure: {
                    ts: number;
                    value: string;
                };
                ppmNO2: {
                    ts: number;
                    value: string;
                };
            };
        }>;
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }
>;

export const getEnvironmentalData = () =>
    request<GetEnvironmentalDataDto["res"]>({
        method: "GET",
        url: `https://corsproxy.io/?https://apis.smartcity.hn/bildungscampus/iotplatform/thm/v1/authGroup/thm_devices_lopy4_airquality/entityId?x-apikey=${BC_API_KEY}&page=0`,
    }).then((res) => {
        const data = res.data.entities[0].TIME_SERIES;

        return {
            temperature: +data.temperature.value,
            humidity: +data.relativeHumidity.value,
            pressure: +data.pressure.value,
        };
    });

type GetWeatherDataDto = Dto<
    void,
    {
        entities: Array<{
            entityId: {
                entityType: string;
                id: string;
            };
            ENTITY_FIELD: {
                name: string;
                type: string;
            };
            TIME_SERIES: {
                outdoorhumidity: {
                    ts: number;
                    value: string;
                };
                sun_brightness_east: {
                    ts: number;
                    value: string;
                };
                wind_sensor_comm_error: {
                    ts: number;
                    value: string;
                };
                sun_brightness_south: {
                    ts: number;
                    value: string;
                };
                outdoortemperature: {
                    ts: number;
                    value: string;
                };
                dewpointtemperature: {
                    ts: number;
                    value: string;
                };
                enthalpy: {
                    ts: number;
                    value: string;
                };
                sun_brightness_global: {
                    ts: number;
                    value: string;
                };
                weatherstation_comm_error: {
                    ts: number;
                    value: string;
                };
                outdoortemperature_roof: {
                    ts: number;
                    value: string;
                };
                sun_brightness_west: {
                    ts: number;
                    value: string;
                };
                absolutehumidity: {
                    ts: number;
                    value: string;
                };
                wetbulbtemperature: {
                    ts: number;
                    value: string;
                };
                wind_speed: {
                    ts: number;
                    value: string;
                };
            };
        }>;
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }
>;

export const getWeatherData = () =>
    request<GetWeatherDataDto["res"]>({
        method: "GET",
        url: `https://corsproxy.io/?https://34.49.200.80.nip.io/bildungscampus/iotplatform/weatherstation/v1/authGroup/weatherstation_devices/entityId?x-apikey=${BC_API_KEY}&page=0`,
    }).then((res) => {
        const data = res.data.entities[0].TIME_SERIES;

        return {
            windSpeed: +data.wind_speed.value,
            sunBrightness: {
                average:
                    (+data.sun_brightness_east.value +
                        +data.sun_brightness_south.value +
                        +data.sun_brightness_west.value) /
                    3,
                east: +data.sun_brightness_east.value,
                south: +data.sun_brightness_south.value,
                west: +data.sun_brightness_west.value,
            },
        };
    });

type GetMensaMenuDto = Dto<
    void,
    {
        ort: string;
        tagesplan: Array<{
            tag: string;
            datum: string;
            text: string;
            linie?: Array<{
                ausgabe: string;
                gericht: string;
            }>;
        }>;
    }
>;

export const getMensaMenu = () =>
    request<GetMensaMenuDto["res"]>({
        method: "GET",
        url: `https://corsproxy.io/?https://apis.smartcity.hn/bildungscampus/smartcampus/mensamenu/v1/menu?x-apikey=${BC_API_KEY}&page=0`,
    });

type GetMensaOccupancyDto = Dto<
    void,
    {
        entities: Array<{
            entityId: {
                entityType: string;
                id: string;
            };
            ENTITY_FIELD: {
                name: string;
                type: string;
            };
            SERVER_ATTRIBUTE: {
                locationName: {
                    ts: number;
                    value: string;
                };
            };
            TIME_SERIES: {
                outCount: {
                    ts: number;
                    value: string;
                };
                occupancy: {
                    ts: number;
                    value: string;
                };
                occupancyRelative: {
                    ts: number;
                    value: string;
                };
                inCount: {
                    ts: number;
                    value: string;
                };
                capacity: {
                    ts: number;
                    value: string;
                };
            };
        }>;
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }
>;

export const getMensaOccupancy = () =>
    request<GetMensaOccupancyDto["res"]>({
        method: "GET",
        url: `https://corsproxy.io/?https://apis.smartcity.hn/bildungscampus/iotplatform/mensaoccupancy/v1/authGroup/mensa_occupancy_devices/entityId?x-apikey=${BC_API_KEY}&page=0`,
    }).then((res) => {
        const data = res.data.entities[0].TIME_SERIES;

        return {
            occupancy: +data.occupancy.value,
            capacity: +data.capacity.value,
        };
    });

type GetMensaForecastDto = Dto<
    void,
    {
        forecast_time: string;
        forecast_data: Array<{
            ds: string;
            prediction: number;
        }>;
    }
>;

export const getMensaForecast = () =>
    request<GetMensaForecastDto["res"]>({
        method: "GET",
        url: `https://corsproxy.io/?https://apis.smartcity.hn//bildungscampus/smartcampus/mensaforecast/v1/forecast?x-apikey=${BC_API_KEY}&page=0`,
    }).then((res) => {
        const data = res.data;

        return {
            generatedAt: new Date(data.forecast_time),
            predictions: data.forecast_data.map((prediction) => ({
                time: new Date(prediction.ds),
                occupancy: prediction.prediction,
            })),
        };
    });

type GetParkingSlotsDataDto = Dto<
    void,
    {
        entities: Array<{
            entityId: {
                entityType: string;
                id: string;
            };
            ENTITY_FIELD: {
                name: string;
                type: string;
            };
            SERVER_ATTRIBUTE: {
                carpark_capacity_evc: {
                    ts: number;
                    value: string;
                };
                carpark_capacity_hc: {
                    ts: number;
                    value: string;
                };
                carpark_name: {
                    ts: number;
                    value: string;
                };
                hasHC: {
                    ts: number;
                    value: string;
                };
                carpark_evc_capacity: {
                    ts: number;
                    value: string;
                };
                vendor: {
                    ts: number;
                    value: string;
                };
                carpark_capacity_levels: {
                    ts: number;
                    value: string;
                };
                coordinates: {
                    ts: number;
                    value: string;
                };
                hasEVC: {
                    ts: number;
                    value: string;
                };
                carpark_capacity: {
                    ts: number;
                    value: string;
                };
                levels: {
                    ts: number;
                    value: string;
                };
                carpark_id: {
                    ts: number;
                    value: string;
                };
            };
            TIME_SERIES: {
                current_seasonParkerWithOutReservation: {
                    ts: number;
                    value: string;
                };
                current_debitCardWithReservation: {
                    ts: number;
                    value: string;
                };
                evc_current: {
                    ts: number;
                    value: string;
                };
                current_debitCardWithoutReservation: {
                    ts: number;
                    value: string;
                };
                current: {
                    ts: number;
                    value: string;
                };
                max_reservation: {
                    ts: number;
                    value: string;
                };
                current_hc: {
                    ts: number;
                    value: string;
                };
                current_congressTicketWithoutReservation: {
                    ts: number;
                    value: string;
                };
                current_evc: {
                    ts: number;
                    value: string;
                };
                current_shortTerm: {
                    ts: number;
                    value: string;
                };
                current_withoutReservation: {
                    ts: number;
                    value: string;
                };
                current_withReservation: {
                    ts: number;
                    value: string;
                };
                prediction_upper: {
                    ts: number;
                    value: string;
                };
                current_Ebene_8: {
                    ts: number;
                    value: string;
                };
                current_Ebene_9: {
                    ts: number;
                    value: string;
                };
                current_Ebene_6: {
                    ts: number;
                    value: string;
                };
                current_Ebene_7: {
                    ts: number;
                    value: string;
                };
                current_seasonParkerWithReservation: {
                    ts: number;
                    value: string;
                };
                current_Ebene_0: {
                    ts: number;
                    value: string;
                };
                prediction: {
                    ts: number;
                    value: string;
                };
                current_Ebene_1: {
                    ts: number;
                    value: string;
                };
                current_Ebene_4: {
                    ts: number;
                    value: string;
                };
                current_Ebene_5: {
                    ts: number;
                    value: string;
                };
                current_Ebene_2: {
                    ts: number;
                    value: string;
                };
                current_Ebene_3: {
                    ts: number;
                    value: string;
                };
                prediction_lower: {
                    ts: number;
                    value: string;
                };
            };
        }>;
        totalPages: number;
        totalElements: number;
        hasNext: boolean;
    }
>;

export const getParkingSlotsData = () =>
    request<GetParkingSlotsDataDto["res"]>({
        method: "GET",
        url: `https://corsproxy.io/?https://apis.smartcity.hn/bildungscampus/iotplatform/parkinglot/v1/authGroup/parkinglot_assets/entityId?x-apikey=${BC_API_KEY}&page=0`,
    }).then((res) => {
        const parkingLots = res.data.entities;

        return parkingLots.map((lot) => ({
            id: lot.SERVER_ATTRIBUTE.carpark_id.value,
            name: lot.SERVER_ATTRIBUTE.carpark_name.value,
            capacity: +lot.SERVER_ATTRIBUTE.carpark_capacity.value,
            occupancy: {
                total:
                    +lot.TIME_SERIES.current_withoutReservation.value +
                    +lot.TIME_SERIES.current_withReservation.value,
                withoutReservation:
                    +lot.TIME_SERIES.current_withoutReservation.value,
                withReservation: +lot.TIME_SERIES.current_withReservation.value,
            },
        }));
    });

type GetParkingSlotsForecastDto = Dto<
    void,
    {
        states: Array<{
            carpark_id: number;
            ds: string;
            prediction: number;
            prediction_lower: number;
            prediction_upper: number;
        }>;
    }
>;

export const getParkingSlotsForecast = () =>
    request<GetParkingSlotsForecastDto["res"]>({
        method: "GET",
        url: `https://corsproxy.io/?https://apis.smartcity.hn/bildungscampus/smartcampus/parkingforecast/v1/v3/forecast?x-apikey=${BC_API_KEY}&page=0`,
    }).then((res) => {
        const data = res.data.states;

        return data.map((forecast) => ({
            carParkId: forecast.carpark_id,
            generatedAt: new Date(forecast.ds),
            occupancy: forecast.prediction,
        }));
    });
