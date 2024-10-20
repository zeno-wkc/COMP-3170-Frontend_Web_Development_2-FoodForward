import './BusinessForm.css';

export default function BusinessForm ({}){
    return(
        <form className="form__container">
            <h3>Business / Restaurant Information</h3>
            <div className="form_input-container">
                <label>Business/Restaurant Name:</label>
                    <input className="Name__input"
                        type="text"
                        name="businessName"
                        placeholder="Enter Your Business Name"
                    />

            </div>
        </form>

    );
}