import React from 'react';


import updates from '../utils/updates.json';

const Updates = () => {
    return (
        <div className="col">
            <h1>Updates</h1>

            {/* <Timeline mode="left" style={{ margin: 100 }}> */}
                {/* {updates.map((update: any) => <Timeline.Item label={update.date}>{update.data}</Timeline.Item>)} */}
            {/* </Timeline> */}
        </div>
    )
}

export default Updates;