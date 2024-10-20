import './PickupForm.css';

export default function PickupForm ({}){
    return(
        <form>
            <h3 className="form__title">Pickup Information</h3>
            <div  className="form__container">
                <div className="form__radio-container">
                    <input 
                        type="radio"
                        name="pickup"
                        value="single-donation"/>
                    <label>
                        Single Donation
                    </label> 
                </div>

                <div className="form_radio-container">
                    <input 
                        type="radio"
                        name="pickup"
                        value="recurring-donation"/>
                    <label>
                        Recurring Donation
                    </label> 
                </div>
            </div>

            <div className="form_input-container">
                <label>Pickup Date:</label>
                    <input className="form__input"
                        type="date"
                        name="pickupDate"
                    />
            </div>

            <div className="form_input-container">
                <label>Start time</label>
                    <input className="form__input"
                        type="time"
                        name="startTime"
                    />
            </div>

        </form>
    );
}