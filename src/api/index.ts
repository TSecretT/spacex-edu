import axios from 'axios';
import config from '../config';

import utils from '../utils';

const getUpcomingLaunches = async () => {
    return await axios.get('https://api.spacexdata.com/v5/launches/upcoming')
    .then((res: any) => utils.sort(res.data.filter((launch: any) => launch.date_unix * 1000 >= new Date().getTime()), "date_unix"))
}

const getShips = async () => {
    return await axios.get('https://api.spacexdata.com/v4/ships')
    .then((res: any) => res.data)
}

const getRockets = async () => {
    return await axios.get('https://api.spacexdata.com/v4/rockets')
    .then((res: any) => res.data)
}

const getPayloads = async () => {
    return await axios.get('https://api.spacexdata.com/v4/payloads')
    .then((res: any) => res.data)
}

const getLaunchpads = async () => {
    return await axios.get('https://api.spacexdata.com/v4/launchpads')
    .then((res: any) => res.data)
}

export default{
    getUpcomingLaunches,
    getShips,
    getRockets,
    getPayloads,
    getLaunchpads
}