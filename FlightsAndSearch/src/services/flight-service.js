const { create } = require("../controllers/city-contoller");
const { AirplaneRepository } = require("../repository");
const FlightRepository  = require("../repository/flight-repository");
const {compareTime}  =require('../utils/helper');

class FlightsService{
    constructor(){
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }
    async createFlight(data){
        try{
            if(!compareTime(data.arrivalTime, data.departureTime)){
                throw {error: 'Arrival Time cannot be less than departure Time'}
            }
          const airplane  = await  this.airplaneRepository.getAirplane(data.airplaneId);
          const flight = await this.flightRepository.createFlight({...data,totalSeats: airplane.capacity});  
          return flight;
        } catch(error){
            console.log("Something Went Wrong At Service Layer");
            throw {error};
        }
    }

    async getAllFlightData(data){
        const flights = await this.flightRepository.getAllFlights(data);
        return flights;
    } catch(error){
        console.log("Something Went Wrong At Service Layer");
        throw {error};
    }
}

module.exports = FlightsService;
/**
 * {
 *  flightNumber,
 *  airplaneId,
 *  departureAirportId,
 *  arrivalAirportId,
 *  arrivalTime,
 *  departureTime,
 *  price,
 *  totalSeats->airplane
 * }
*/