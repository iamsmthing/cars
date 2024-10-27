import { useSelector,useDispatch } from "react-redux";
import { removeCar } from "../store";
import { useEffect } from "react";

const CarList = () => {
   const dispatch=useDispatch();
  const {cars,form}=useSelector(({form,cars:{data,searchTerm}})=>{
    const filteredCars= data.filter((car)=>car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return {
      cars:filteredCars,
      form:form
    }
    
    
  });
  console.log(cars,form.name);
  const handleCarDelete=(car)=>{
    dispatch(removeCar(car.id));
  }

 
  const renderedCars=cars.map((car)=>{

    const bold=form.name && car.name.toLowerCase().includes(form.name.toLowerCase());
    console.log(bold)
    return (
      <div key={car.id} className={`panel ${bold && 'bold'} `}>
          <p>
            {car.name} - ${car.cost}
          </p>
          <button onClick={()=>handleCarDelete(car)} className="button is-danger">
              Delete
          </button>
      </div>
    );
  })

  return (
    <div className="car-list">
      {renderedCars}
      <hr/>

    </div>
  )
};
export default CarList;
