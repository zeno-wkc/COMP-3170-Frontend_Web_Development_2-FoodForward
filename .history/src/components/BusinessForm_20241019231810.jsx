import './BusinessForm.css';

export default function BusinessForm ({}){
    return(
        <form className="form__container">
            <h2>Business / Restaurant Information</h2>
            <div className="Name__input-container">
                <label>Business/Restaurant Name:</label>
                    <input style={width="100"}
                        type="text"
                        name="businessName"
                        placeholder="Enter Your Business Name"
                    />
                
            </div>
        </form>

    );
}