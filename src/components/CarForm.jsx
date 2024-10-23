import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeCost } from '../store';

const CarForm = () => {
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state) => {
    let name = state.form.name;
    let cost = state.form.cost;
    console.log(state);
    return { name, cost };
  });
  // const cost = useSelector((state) => {
  //   console.log(state);
  //   return state.form.cost;
  // });

  const handleCostChange = (event) => {
    event.preventDefault();
    let value = parseInt(event.target.value) || 0;
    dispatch(changeCost(value));
  };

  const handleNameChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    dispatch(changeName(value));
  };
  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input is-expanded"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="field">
            <label className="label">Cost</label>
            <input
              className="input is-expanded"
              value={cost || ''}
              type="number"
              onChange={handleCostChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
};
export default CarForm;
