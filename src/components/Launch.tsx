import React from 'react';

import { falconNine, falconHeavy } from '../assets';
import { Payload, UpcomingLaunches } from '../types';
import utils from '../utils';
import { useCountdown } from '../utils/countdown';

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

export const Launch = ({ data }: { data: UpcomingLaunches }) => {
    const [days, hours, minutes, seconds] = useCountdown(new Date(data.date_utc));

    const countdownStyleDays: Record<string, number> = { '--value': days }
    const countdownStyleHours: Record<string, number> = { '--value': hours }
    const countdownStyleMinutes: Record<string, number> = { '--value': minutes }
    const countdownStyleSeconds: Record<string, number> = { '--value': seconds }
    return (
        <div className="launch-container flex flex-row">
            <span className="countdown font-mono text-xl">
                T-
                <span style={countdownStyleDays}></span>:
                <span style={countdownStyleHours}></span>:
                <span style={countdownStyleMinutes}></span>:
                <span style={countdownStyleSeconds}></span>
            </span>
            <p className="mx-4">Mission: {data.name}</p>
        </div>
    )
}
 
const Statistic = ({ title, value, description }: { title: string, value: string|number, description?: string }) => {
    return <div className="stats shadow">
        <div className="stat">
            <div className="stat-title">{title}</div>
            <div className="stat-value">{value}</div>
            <div className="stat-desc">{description}</div>
        </div>
    </div>
}

export const LaunchUpcoming = ({ data }: { data: UpcomingLaunches }) => {
    const [compareTo, setCompareTo] = React.useState<string>("human");
    const [days, hours, minutes, seconds] = useCountdown(new Date(data.date_utc));

    
    const countdownStyleDays: Record<string, number> = { '--value': days }
    const countdownStyleHours: Record<string, number> = { '--value': hours }
    const countdownStyleMinutes: Record<string, number> = { '--value': minutes }
    const countdownStyleSeconds: Record<string, number> = { '--value': seconds }

    return (
        <div className="launch-container">
            <h2>{data.name}</h2>
            <span className="countdown font-mono text-2xl my-4">
                T-
                <span style={countdownStyleDays}></span>d:
                <span style={countdownStyleHours}></span>h:
                <span style={countdownStyleMinutes}></span>m:
                <span style={countdownStyleSeconds}></span>s
            </span>

            <p className="alert w-fit">{data.details? data.details : "No description provided by SpaceX"}</p>

            {data.rocket && <>
                <div className="divider"/>
                <h2>Rocket</h2>

                <div className="flex flex-row w-3/4">
                    <img className="mx-0 md:mx-8" src={getRocketImage(data.rocket.name)} alt="rocket" />
                    <div className="flex flex-row flex-wrap h-fit">
                        <Statistic title="Name" value={data.rocket.name} />
                        <Statistic title="Stages" value={data.rocket.stages} />
                        <Statistic title="Boosters" value={data.rocket.boosters} />
                        <Statistic title="Height" value={data.rocket.height.meters + "m"} description={utils.calculateComparison("height", compareTo, data.rocket.height.meters)} />
                        <Statistic title="Diameter" value={data.rocket.diameter.meters + "m"} description={utils.calculateComparison("diameter", compareTo, data.rocket.diameter.meters)} />
                        <Statistic title="Mass" value={data.rocket.mass.kg + "kg"} description={utils.calculateComparison("mass", compareTo, data.rocket.mass.kg)} />
                    </div>
                </div>
            </>}

            {data.payloads.length > 0 && <>
                <div className="divider"/>
                <h2>Payloads</h2>

                {data.payloads.map((payload: Payload) =>(
                    <div className="row" key={payload.id}>
                        <div className="launch-info">
                            <div className="flex flex-row flex-wrap h-fit">
                                <Statistic title="Name" value={payload.name} />
                                <Statistic title="Type" value={payload.type} />
                                <Statistic title="Orbit" value={payload.orbit} />
                                <Statistic title="Mass" value={payload.mass_kg + "kg"} description={utils.calculateComparison("mass", compareTo, payload.mass_kg)} />
                                {payload.lifespan_years && <div className="row launch-info-row">
                                    <Statistic title="Lifespan" value={payload.lifespan_years} description="years" />
                                </div>}
                            </div>
                        </div>
                    </div>
                ))}
            </>}

            {data.ships.length > 0 && <>
                <div className="divider"/>
                <h2>Ships</h2>                
                {data.ships.map((ship: any) =>(
                    <div className="row" key={ship.id}>
                        <div className="launch-info">
                            <div className="row launch-info-wrap">
                                <Statistic title="Name" value={ship.name} />
                                <Statistic title="Type" value={ship.type} />
                                <Statistic title="Roles" value={ship.roles.join(', ')} />
                                <Statistic title="Launches" value={ship.launches.length} />
                                <Statistic title="Year built" value={ship.year_built} />
                                <Statistic title="Home port" value={ship.home_port} />
                            </div>
                            {ship.mass_kg && <div className="row launch-info-row">
                                <Statistic title="Mass" value={ship.mass_kg + "kg"} description={utils.calculateComparison("mass", compareTo, ship.mass_kg)} />
                            </div>}
                        </div>
                    </div>
                ))}
            </>}

            {data.launchpad && <>
                <div className="divider"/>
                <h2>Launchpad</h2>
                <p className="px-4 text-center alert">{data.launchpad.details? data.launchpad.details : "No description provided"}</p>
                <div className="row">
                    <div className="launch-info">
                        <div className="row launch-info-row">
                            <Statistic title="Name" value={data.launchpad.name} />
                            <Statistic title="Region" value={data.launchpad.region} />
                            <Statistic title="Launches" value={data.launchpad.launch_attempts} />
                            <Statistic title="Status" value={data.launchpad.status} />
                        </div>
                    </div>
                </div>
            </>}

        </div>
    )
}