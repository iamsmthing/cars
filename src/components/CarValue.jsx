import { useSelector } from "react-redux";


const CarValue = () => {

  const totalValue=useSelector((state)=>{
    console.log(state.cars.data)
    const totalCost = state.cars.data.reduce((sum, car) => sum + car.cost, 0);
    return totalCost;
  });
  return <div>
    <h1>Total Value: ${totalValue}</h1>
  </div>;
};

export default CarValue;
