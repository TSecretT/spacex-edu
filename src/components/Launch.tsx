import React from 'react';
import { Statistic, Divider } from 'antd';

import { falconNine, falconHeavy } from '../assets';
import utils from '../utils';

const getRocketImage = (rocketName: string) => {
    switch (rocketName){
        case "Starship":
            return undefined;
        case "Falcon Heavy":
            return falconHeavy;
        case "Falcon 9":
            return falconNine;
        case "Falcon 1":
            return undefined;
        default:
            return undefined;
    }
}

export const Launch = ({ data }: any) => {

    return (
        <div className="row launch-container">
            <div className="col" style={{ width: "auto", alignItems: "flex-start" }}>
                <Statistic.Countdown value={data.date_unix * 1000} format="DD:HH:mm "/>
                {data.name}
            </div>
        </div>
    )
}
 
export const LaunchUpcoming = ({ data }: any) => {
    const [compareTo, setCompareTo] = React.useState<string>("human");


    return (
        <div className="col launch-container">
            <span className="launch-upcoming-name">{data.name}</span>
            <Statistic.Countdown value={data.date_unix * 1000} format="T-DD:HH:mm:ss"/>
            <span className="launch-details">{data.details? data.details : "No description provided"}</span>
            <Divider />
            <span className="launch-header">Info</span>
            <div className="launch-info-wrap">
                <img src={data.links.patch.small} alt="patch" className="launch-patch-big" />
                <Statistic style={{ margin: 16 }} title="Flight number" value={data.flight_number} />
            </div>

            {data.rocket && <>
                <Divider />
                <span className="launch-header">Rocket</span>

                <div className="row">
                    <img src={getRocketImage(data.rocket.name)} alt="rocket" />
                    <div className="launch-info">
                        <div className="row launch-info-row">
                            <Statistic style={{ margin: 16 }} title="Name" value={data.rocket.name} />
                            <Statistic style={{ margin: 16 }} title="Stages" value={data.rocket.stages} />
                            <Statistic style={{ margin: 16 }} title="Boosters" value={data.rocket.boosters} />
                        </div>
                        <div className="row launch-info-row">
                            <Statistic style={{ margin: 16 }} title="Height" suffix="m" value={data.rocket.height.meters} />
                            <span className="launch-info-comparison">{utils.calculateComparison("height", compareTo, data.rocket.height.meters)}</span>
                        </div>
                        <div className="row launch-info-row">
                            <Statistic style={{ margin: 16 }} title="Diameter" suffix="m" value={data.rocket.diameter.meters} />
                            <span className="launch-info-comparison">{utils.calculateComparison("diameter", compareTo, data.rocket.diameter.meters)}</span>
                        </div>
                        <div className="row launch-info-row">
                            <Statistic style={{ margin: 16 }} title="Mass" suffix="kg" value={data.rocket.mass.kg} />
                            <span className="launch-info-comparison">{utils.calculateComparison("mass", compareTo, data.rocket.mass.kg)}</span>
                        </div>
                    </div>
                </div>
            </>}

            {data.payloads.length > 0 && <>
                <Divider />
                <span className="launch-header">Payloads</span>

                {data.payloads.map((payload: any) =>(
                    <div className="row" key={payload.id}>
                        <div className="launch-info">
                            <div className="row launch-info-row launch-info-wrap">
                                <Statistic style={{ margin: 16 }} title="Name" value={payload.name} />
                                <Statistic style={{ margin: 16 }} title="Type" value={payload.type} />
                                <Statistic style={{ margin: 16 }} title="Orbit" value={payload.orbit} />
                            </div>
                            <div className="row launch-info-row launch-info-wrap">
                                <Statistic style={{ margin: 16 }} title="Customer" value={payload.customers.join(', ')} />
                                <Statistic style={{ margin: 16 }} title="Nationality" value={payload.nationalities.join(', ')} />
                                <Statistic style={{ margin: 16 }} title="Manufacturer" value={payload.manufacturers.join(', ')} />
                            </div>
                            <div className="row launch-info-row launch-info-wrap">
                                <Statistic style={{ margin: 16 }} title="Mass" suffix="kg" value={payload.mass_kg} />
                                <span className="launch-info-comparison">{utils.calculateComparison("mass", compareTo, payload.mass_kg)}</span>
                            </div>
                            {payload.lifespan_years && <div className="row launch-info-row">
                                <Statistic style={{ margin: 16 }} title="Lifespan years" value={payload.lifespan_years} />
                            </div>}
                        </div>
                    </div>
                ))}
            </>}

            {data.ships.length > 0 && <>
                <Divider />
                <span className="launch-header">Ships</span>                
                {data.ships.map((ship: any) =>(
                    <div className="row" key={ship.id}>
                        <div className="launch-info">
                            <div className="row launch-info-wrap">
                                <Statistic style={{ margin: 16 }} title="Name" value={ship.name} />
                                <Statistic style={{ margin: 16 }} title="Type" value={ship.type} />
                                <Statistic style={{ margin: 16 }} title="Roles" value={ship.roles.join(', ')} />
                                <Statistic style={{ margin: 16 }} title="Launches" value={ship.launches.length} />
                                <Statistic style={{ margin: 16 }} title="Year built" value={ship.year_built}  groupSeparator="" />
                                <Statistic style={{ margin: 16 }} title="Home port" value={ship.home_port} />
                            </div>
                            {ship.mass_kg && <div className="row launch-info-row">
                                <Statistic style={{ margin: 16 }} title="Mass" suffix="kg" value={ship.mass_kg} />
                                <span className="launch-info-comparison">{utils.calculateComparison("mass", compareTo, ship.mass_kg)}</span>
                            </div>}
                        </div>
                    </div>
                ))}
            </>}

            {data.launchpad && <>
                <Divider />
                <span className="launch-header">Launchpad</span>
                <span className="launch-details">{data.launchpad.details? data.launchpad.details : "No description provided"}</span>
                <div className="row">
                    <div className="launch-info">
                        <div className="row launch-info-row">
                            <Statistic style={{ margin: 16 }} title="Name" value={data.launchpad.name} />
                            <Statistic style={{ margin: 16 }} title="Region" value={data.launchpad.region} />
                            <Statistic style={{ margin: 16 }} title="Launches" value={data.launchpad.launch_attempts} />
                            <Statistic style={{ margin: 16 }} title="Status" value={data.launchpad.status} />
                        </div>
                    </div>
                </div>
            </>}

        </div>
    )
}