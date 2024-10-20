import '';

export default function BusinessForm ({}){
    return(
        <form className="form__container">
            <h2>Business / Restaurant Information</h2>
            <div className="Name__input-container">
                <label>
                    Business/Restaurant Name:
                    <input
                        type="text"
                        name="businessName"
                        placeholder="Enter Your Business Name"
                    />
                </label>
            </div>
        </form>

    );
}