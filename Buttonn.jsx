import PropTypes from 'prop-types';
function Buttonn(props){
    return(
        <div>
            <button className="google">
                {props.text}
                <img src={props.src} alt="" />
            </button>
        </div>
    );
}
export default Buttonn