import './PickupForm.css';

export default function PickupForm ({}){
    return(
        <form>
            <h3 className="form__title">Pickup Information</h3>
            <div className="form_input-container">
                <input 
                    type="radio"
                    name="pickup"
                    value="single-donation"/>
                <label>
                    Single Donation
                </label> 
            </div>

        </form>
    );
}