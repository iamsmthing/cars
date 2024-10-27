import { useSelector } from "react-redux";


const CarValue = () => {

  const totalValue=useSelector(({cars:{data,searchTerm}})=>{
    console.log(data)
    // const totalCost = data.reduce((sum, car) => sum + car.cost, 0);
   const filteredCars=data.filter((car)=>{
    return car.name.toLowerCase().includes(searchTerm.toLowerCase());
   });
   return filteredCars.reduce((sum,car)=>sum+car.cost,0);
  });
  console.log(JSON.stringify(totalValue));
  return <div>
    <h1>Total Value: ${totalValue}</h1>
  </div>;
};

export default CarValue;
