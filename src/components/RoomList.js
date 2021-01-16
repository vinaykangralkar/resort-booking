import React from 'react';
import Room from './Room';

export default function RoomList({rooms}) {
    console.log({rooms});
    if(rooms.length === 0){
        return (
            <div className='empty-search'>
                <h3>unfortunately no rooms matched</h3>
            </div>
        )
    }

    return <section className='roomsList'>
        <div className='roomsList-center'>
            {
                rooms.map(item => {
                    return <Room key={item.id} room={item} />
                })
            }
        </div>
    </section>
}
