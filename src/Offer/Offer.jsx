import PropTypes from 'prop-types';
import { FaRegCheckCircle } from "react-icons/fa";


const Offer = ({ offer }) => {
    return (
        <div>

            <li className='flex items-center gap-2'><FaRegCheckCircle className='text-green-300'></FaRegCheckCircle>
                {offer}</li>

        </div>
    );
};

Offer.propTypes = {
    offer: PropTypes.array
}

export default Offer;