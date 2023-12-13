import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import io from 'socket.io-client';
const socket = io('http://localhost:8080');

function SecUser() {
    const [bedroomLights, setBedroomLights] = useState({
        light1: false,
        light2: false,
      });
    
      const [kitchenLights, setKitchenLights] = useState({
        light1: false,
        light2: false,
      });
    
      useEffect(() => {
        socket.on('updateLights', (roomData) => {
            console.log("cjecl");
          if (roomData && roomData.bedroom) {
            
            setBedroomLights({
              light1: roomData.bedroom.light1,
              light2: roomData.bedroom.light2,
            });
          }
          if (roomData && roomData.kitchen) {
            setKitchenLights({
              light1: roomData.kitchen.light1,
              light2: roomData.kitchen.light2,
            });
          }
        });
    
        return () => {
          socket.disconnect();
        };
      
      }, [bedroomLights]);

    
      const handleBedroomToggle = () => {
        const newBedroomLights = {
          light1: !bedroomLights.light1,
          light2: !bedroomLights.light2,
        };
        setBedroomLights(newBedroomLights);
        console.log("bedroomLights", bedroomLights);
        socket.emit('toggleBothLights', { roomId: 'roomId1', roomType: 'bedroom', light: newBedroomLights });
        console.log("test");
      };
    
      const handleKitchenToggle = () => {
        const newKitchenLights = {
          light1: !kitchenLights.light1,
          light2: !kitchenLights.light2,
        };
        console.log("newKitchenLights", kitchenLights);
        setKitchenLights(newKitchenLights);
        socket.emit('toggleBothLights', { roomId: 'roomId1', roomType: 'kitchen', light: newKitchenLights });
      };
    
    
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">User 2</h1>
            <div className='flex flex-row items-center justify-evenly w-full'>
                <div>
                    <div className="border w-full border-gray-300 shadow-lg rounded-lg p-4">
                        <h2 className="text-xl font-semibold mb-2">Bedroom</h2>
                        <div className="flex flex-col items-center mb-4">
                            <div className=' mb-4'>
                                <div className="flex">
                                    <label htmlFor="bedroom-light1" className="mr-4">
                                        Light 1:
                                    </label>
                                    <label class="inline-flex relative items-center mr-5 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            checked={bedroomLights.light1}
                                            readOnly
                                        />
                                        <div
                                            onClick={() => setBedroomLights({ ...bedroomLights, light1: !bedroomLights.light1 })}
                                            className="w-11 h-6 bg-gray-400 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
                                        ></div>
                                        <span className="ml-2 text-sm font-medium text-gray-900">
                                            ON
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <div>

                                <div className="flex">
                                    <label htmlFor="bedroom-light2" className="mr-4">
                                        Light 2:
                                    </label>
                                    <label class="inline-flex relative items-center mr-5 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            checked={bedroomLights.light2}
                                            readOnly
                                        />
                                        <div
                                            onClick={() => setBedroomLights({ ...bedroomLights, light2: !bedroomLights.light2 })}
                                            className="w-11 h-6 bg-gray-400 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
                                        ></div>
                                        <span className="ml-2 text-sm font-medium text-gray-900">
                                            ON
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label>Toggle Both Lights:</label>
                            <input
                                type="checkbox"
                                onChange={handleBedroomToggle}
                                className="mr-2"
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="border w-full border-gray-300 shadow-lg rounded-lg p-4">
                        <h2 className="text-xl font-semibold mb-2">Kitchen</h2>
                        <div className="flex flex-col items-center mb-4">
                            <div className=' mb-4'>
                                <div className="flex">
                                    <label htmlFor="bedroom-light1" className="mr-4">
                                        Light 1:
                                    </label>
                                    <label class="inline-flex relative items-center mr-5 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            checked={kitchenLights.light1}
                                            readOnly
                                        />
                                        <div
                                            onClick={() => setKitchenLights({ ...kitchenLights, light1: !kitchenLights.light1 })}
                                            className="w-11 h-6 bg-gray-400 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
                                        ></div>
                                        <span className="ml-2 text-sm font-medium text-gray-900">
                                            ON
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <div>

                                <div className="flex">
                                    <label htmlFor="bedroom-light2" className="mr-4">
                                        Light 2:
                                    </label>
                                    <label class="inline-flex relative items-center mr-5 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            checked={kitchenLights.light2}
                                            readOnly
                                        />
                                        <div
                                            onClick={() => setKitchenLights({ ...kitchenLights, light2: !kitchenLights.light2 })}
                                            className="w-11 h-6 bg-gray-400 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
                                        ></div>
                                        <span className="ml-2 text-sm font-medium text-gray-900">
                                            ON
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label>Toggle Both Lights:</label>
                            <input
                                type="checkbox"
                                onChange={handleKitchenToggle}
                                className="mr-2"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default SecUser;