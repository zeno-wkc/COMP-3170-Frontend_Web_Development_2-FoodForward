import './BusinessForm.css';
import PlusIcon from './PlusIcon';
import MapIcon from './MapIcon';

export default function BusinessForm ({}){
  return(
    <>
      <form className='business-form'>
        <label>Business/Restaurant Name:</label>
        <input className="form-input" type="text" name="businessName" placeholder="Enter Your Business Name" />
        <label>Contact Number:</label>
        <input className="form-input" type="tel" name="contactNumber" placeholder="Enter Your Contact Number" />
        <div className='address__container'>
          <label>Address:</label>
          <button className="location-btn" type="button">
            <span>Add Location</span>
            <PlusIcon size="14" color="#2E2217"/>
          </button>
        </div>
        <div className='address-input__container'>
          <MapIcon size="24" color="#2E2217"/>
          <input className="form-input" type="text" name="address" placeholder="Enter Pick Up Address" />
        </div>
        <label>Postal Code:</label>
        <input className="form-input" type="text" name="postal" placeholder="Enter Postal Code" />
      </form>
    </>
  );
}