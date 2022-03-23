export interface UpcomingLaunches {
    fairings:              Fairings;
    links:                 Links;
    static_fire_date_utc:  null;
    static_fire_date_unix: null;
    net:                   boolean;
    window:                null;
    rocket:                Rocket;
    success:               null;
    failures:              any[];
    details:               null;
    crew:                  any[];
    ships:                 any[];
    capsules:              any[];
    payloads:              Payload[];
    launchpad:             Launchpad;
    flight_number:         number;
    name:                  string;
    date_utc:              Date;
    date_unix:             number;
    date_local:            Date;
    date_precision:        string;
    upcoming:              boolean;
    cores:                 Core[];
    auto_update:           boolean;
    tbd:                   boolean;
    launch_library_id:     null;
    id:                    string;
}

export interface Core {
    core:            null;
    flight:          null;
    gridfins:        null;
    legs:            null;
    reused:          null;
    landing_attempt: null;
    landing_success: null;
    landing_type:    null;
    landpad:         null;
}

export interface Fairings {
    reused:           null;
    recovery_attempt: null;
    recovered:        null;
    ships:            any[];
}

export interface Launchpad {
    images:           Images;
    name:             string;
    full_name:        string;
    locality:         string;
    region:           string;
    latitude:         number;
    longitude:        number;
    launch_attempts:  number;
    launch_successes: number;
    rockets:          string[];
    timezone:         string;
    launches:         string[];
    status:           string;
    details:          string;
    id:               string;
}

export interface Images {
    large: string[];
}

export interface Links {
    patch:      Patch;
    reddit:     Reddit;
    flickr:     Flickr;
    presskit:   null;
    webcast:    null;
    youtube_id: null;
    article:    null;
    wikipedia:  null;
}

export interface Flickr {
    small:    any[];
    original: any[];
}

export interface Patch {
    small: string;
    large: string;
}

export interface Reddit {
    campaign: null;
    launch:   null;
    media:    null;
    recovery: string;
}

export interface Payload {
    dragon:             Dragon;
    name:               string;
    type:               string;
    reused:             boolean;
    launch:             string;
    customers:          string[];
    norad_ids:          any[];
    nationalities:      string[];
    manufacturers:      string[];
    mass_kg:            number;
    mass_lbs:           number;
    orbit:              string;
    reference_system:   string;
    regime:             string;
    longitude:          number;
    semi_major_axis_km: number;
    eccentricity:       number;
    periapsis_km:       number;
    apoapsis_km:        number;
    inclination_deg:    number;
    period_min:         number;
    lifespan_years:     number;
    epoch:              number;
    mean_motion:        number;
    raan:               number;
    arg_of_pericenter:  number;
    mean_anomaly:       number;
    id:                 string;
}

export interface Dragon {
    capsule:           null;
    mass_returned_kg:  null;
    mass_returned_lbs: null;
    flight_time_sec:   null;
    manifest:          null;
    water_landing:     null;
    land_landing:      null;
}

export interface Rocket {
    height:           Diameter;
    diameter:         Diameter;
    mass:             Mass;
    first_stage:      FirstStage;
    second_stage:     SecondStage;
    engines:          Engines;
    landing_legs:     LandingLegs;
    payload_weights:  PayloadWeight[];
    flickr_images:    string[];
    name:             string;
    type:             string;
    active:           boolean;
    stages:           number;
    boosters:         number;
    cost_per_launch:  number;
    success_rate_pct: number;
    first_flight:     Date;
    country:          string;
    company:          string;
    wikipedia:        string;
    description:      string;
    id:               string;
}

export interface Diameter {
    meters: number;
    feet:   number;
}

export interface Engines {
    isp:              ISP;
    thrust_sea_level: Thrust;
    thrust_vacuum:    Thrust;
    number:           number;
    type:             string;
    version:          string;
    layout:           string;
    engine_loss_max:  number;
    propellant_1:     string;
    propellant_2:     string;
    thrust_to_weight: number;
}

export interface ISP {
    sea_level: number;
    vacuum:    number;
}

export interface Thrust {
    kN:  number;
    lbf: number;
}

export interface FirstStage {
    thrust_sea_level: Thrust;
    thrust_vacuum:    Thrust;
    reusable:         boolean;
    engines:          number;
    fuel_amount_tons: number;
    burn_time_sec:    number;
}

export interface LandingLegs {
    number:   number;
    material: string;
}

export interface Mass {
    kg: number;
    lb: number;
}

export interface PayloadWeight {
    id:   string;
    name: string;
    kg:   number;
    lb:   number;
}

export interface SecondStage {
    thrust:           Thrust;
    payloads:         Payloads;
    reusable:         boolean;
    engines:          number;
    fuel_amount_tons: number;
    burn_time_sec:    number;
}

export interface Payloads {
    composite_fairing: CompositeFairing;
    option_1:          string;
}

export interface CompositeFairing {
    height:   Diameter;
    diameter: Diameter;
}
