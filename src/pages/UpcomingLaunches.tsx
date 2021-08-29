import React from 'react';

import { Spin } from 'antd';
import api from '../api';
import {earth} from '../assets';
import { Launch, LaunchUpcoming } from '../components';

const UpcomingLaunches = () => {
    const [loaded, setLoaded] = React.useState<boolean>(false);
    const [upcomingLaunches, setUpcomingLaunches] = React.useState<any[]>();

    const init = async  () => {
        let upcomingLaunches: any[] = await api.getUpcomingLaunches();
        const rockets: any[] = await api.getRockets();
        const payloads: any[] = await api.getPayloads();
        const ships: any[] = await api.getShips();
        const launchpads: any[] = await api.getLaunchpads();


        upcomingLaunches = upcomingLaunches.map((launch: any) => {
            return {
                ...launch,
                rocket: rockets.find((rocket: any) => rocket.id === launch.rocket || undefined),
                launchpad: launchpads.find((launchpad: any) => launchpad.id === launch.launchpad || undefined),
                payloads: payloads.filter((payload: any) => launch.payloads.includes(payload.id)),
                ships: ships.filter((ship: any) => launch.ships.includes(ship.id)),
            }
        })

        console.log(upcomingLaunches);
        setUpcomingLaunches(upcomingLaunches)
        setLoaded(true);
    }


    React.useEffect(() => {
        init();
    }, [])

    if(!loaded) return <div className="col"><Spin size="large" /></div>

    return (
        <div className="page">
            <div className="col">
                {upcomingLaunches?.map((launch: any, i: number) => i===0? <LaunchUpcoming key={i} data={launch} /> : <Launch key={i} data={launch} />)}
            </div>

            <div className="col footer">
                <p>This site is not affiliated with SpaceX or others in any way. It is updated based on API provided by <a href="https://github.com/r-spacex/SpaceX-API">this Github repo</a></p>
            </div>
            <img src={earth} alt="earth" style={{ width: "100%" }} ></img>
        </div>
    )
}

export default UpcomingLaunches;