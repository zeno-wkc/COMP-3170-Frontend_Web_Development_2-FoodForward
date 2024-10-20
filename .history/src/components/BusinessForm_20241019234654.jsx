import './BusinessForm.css';
import MapIcon from './MapIcon';

export default function BusinessForm ({}){
    return(
        <form>
            <h3 className="form__title">Business / Restaurant Information</h3>
            <div className="form_input-container">
                <label>Business/Restaurant Name:</label>
                    <input className="form__input"
                        type="text"
                        name="businessName"
                        placeholder="Enter Your Business Name"
                    />
            </div>

            <div className="form_input-container">
                <label>Contact Number:</label>
                    <input className="form__input"
                        type="tel"
                        name="contactNumber"
                        placeholder="Enter Your Contact Number"
                    />
            </div>

            <div className="form_input-container">
                <div className="address__container">
                    <label>Address:</label>
                    <button className="location__btn" type="button"> Add Location  <MapIcon size="12" color="black"/> </button>
                </div>
               
                    <input className="form__input"
                        type="text"
                        name="address"
                        placeholder="Enter Pick Up Address" 
                    />
                    
                
            </div>

            <div className="form_input-container">
                <label>Postal Code:</label>
                    <input className="form__input"
                        type="text"
                        name="postal"
                        placeholder="Enter Postal Code"
                    />
            </div>
        </form>
    );
}