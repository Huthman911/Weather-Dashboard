import React from "react";
import { FiMapPin,FiCalendar,FiClock } from "react-icons/fi";


const CityTimeDisplay =({ cityName }) =>{
    const currentTime = new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
    });

    const currentDate = new Date().toLocaleDateString([], {
        weekday: 'long',
        month: 'short',
        day: 'numeric'
    });

    return (
        <div className="p-10 mb-8   bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl">
          <div className="flex items-center justify-between">
            {/* City Name Section */}
            <div className="flex items-center">
              <FiMapPin className="mr-2 text-xl" />
              <h2 className="text-2xl font-bold">{cityName}</h2>
            </div>
            
            {/* Time and Date Section */}
            <div className="text-right">
              <div className="flex items-center justify-end">
                <FiClock className="mr-1" />
                <span>{currentTime}</span>
              </div>
              <div className="flex items-center justify-end">
                <FiCalendar className="mr-1" />
                <span>{currentDate}</span>
              </div>
            </div>
          </div>
        </div>
      );
    };
    
    export default CityTimeDisplay;
    