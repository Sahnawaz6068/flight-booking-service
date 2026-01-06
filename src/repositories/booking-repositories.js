//Airplane repository (Create a plane, get a plane, Update a plane, Delete a plane)
import CrudRepository from "./crudrepositories.js";

class BookingRepository extends CrudRepository{
     constructor (){
        super("booking")
     }
}

export default BookingRepository;