import PropTypes from 'prop-types';
import Offer from '../Offer/Offer';



const PriceOption = ({priceOption}) => {

    const {name, price, offers} = priceOption;

    return (
        <div className='bg-blue-500 text-white p-8 flex flex-col space-y-8'>

            <div className='my-10'>
                <h1 className='text-center'>
                    <span className='text-7xl font-bold'>{price}</span>
                    <span className='text-lg'>/mon</span>
                </h1>
            </div>

            <div>
                <h1 className='text-4xl text-center'>{name}</h1>
            </div>

            <div className='text-lg flex-grow'>

                <ul className='ml-8'>

                    {
                        offers.map((offer, idx) => <Offer
                        key={idx}
                        offer={offer}></Offer>)
                    }

                </ul>

            </div>

            <button className='bg-slate-600 w-full py-2 font-semibold'>Buy Now</button>
            
        </div>
    );
};

PriceOption.propTypes = {
    priceOption: PropTypes.object
}

export default PriceOption;