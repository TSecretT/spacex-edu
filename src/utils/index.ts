import stats from './stats.json';

const sort = (arr: any[], key: string) => {
    return arr.sort((a: any, b: any) => (a[key] > b[key]) ? 1 : ((b[key] > a[key]) ? -1 : 0))
}

const calculateComparison = (type: string, compareWith: string, value: number) => {

    const stats_: any = stats;

    switch(type){
        case "height":
            return `x${Math.round(value / stats_[compareWith][type])} taller than ${compareWith}`;
        case "diameter":
            return `x${Math.round(value / stats_[compareWith][type])} wider than ${compareWith}`;
        case "mass":
            return `x${Math.round(value / stats_[compareWith][type])} heavier than ${compareWith}`;
        case "thrust":
            return `x${Math.round(value / stats_[compareWith][type])} stronger than ${compareWith}`;
        default:

    }
}

export default {
    sort,
    calculateComparison
}