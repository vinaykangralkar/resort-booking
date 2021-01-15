import React from 'react';
import RoomsList from './RoomList';
import RoomsFliter from './RoomFilter';
import {RoomConsumer} from '../Context';
import Loading from './Loading';

export default function RoomContainer() {
    
    return (
        <RoomConsumer>
            {
                (value) => {
                    const {loading, sortedRooms, rooms} = value

                    if(loading){
                        return <Loading />
                    }
                    return (
                        <div>
                        Rooms container
                        <RoomsFliter room={rooms}/>
                        <RoomsList room={sortedRooms}/>
                    </div>
                    )
                }
            }
        </RoomConsumer>
    );
    
}
