import PropTypes from 'prop-types';

const PriceOption = ({option}) => {
    const {price,name,features}=option;
    
    return (
        <div className='bg-blue-200 m-6'>
            <h2>
                <span className='text-5xl'>{price}</span>
                <span className='text-3xl'>/month</span>
            </h2>
            <h2 className='text-3xl'>{name}</h2>
            {
                features.map((feature,index)=><ul key={index}>
                    {feature}
                </ul>)
            }

            <button className='bg-green-400 w-full hover:bg-green-500'>buy now</button>
        </div>
    );
}; 

PriceOption.propTypes={
    option:PropTypes.object
}
export default PriceOption;