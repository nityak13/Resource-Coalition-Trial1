
/* Interface for Vehicle Status */
export interface IVehicle {
    amps: string;
    car_name: string;
    credit: string;
    energy_charge: string;
    energy_empty: string;
    evse_id: string;
    evse_name: string;
    iso_id: string;
    miles: string;
    peer_connected: string;
    pop: string;
    power_capacity_down: string;
    power_capacity_up: string;
    power_flow: string;
    power_provided: string;
    power_requested: string;
    primary_status: string;
    secondary_status: string;
    soc: string;
    soc_kwh: string;
    status: string;
    timestamp: string;
    vin: string;
    volts: string;
}