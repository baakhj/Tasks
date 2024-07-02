import "./Third.css";
function Third(){
    return(
        <div className="last">
            <p className="emailText">Or with email and password</p>
            <label className="label" htmlFor="emailAddress">Email Address:</label><br />
            <input className="input" type="email" id="emailAddress" name="emailAddres" /><br />
            <button className="next">
                next
            </button>
        </div>
    );
}
export default Third