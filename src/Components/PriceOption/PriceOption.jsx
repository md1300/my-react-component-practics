import PropTypes from 'prop-types';

const PriceOption = ({option}) => {
    const {price,name,features}=option;
    
    return (
        <div className='flex flex-col bg-blue-200 m-6 px-4 pr-4 pt-4'>
            <h2>
                <span className='text-5xl'>{price}</span>
                
            </h2>
            <h2 className='text-3xl'>{name}</h2>
            <div className='pl-7 flex-grow'>
                {
                  features.map((feature,index)=><ul key={index}>
                      {feature}
                   </ul>)
                }
            </div>

            <button className='bg-green-400 w-full hover:bg-green-500 rounded-lg '>buy now</button>
        </div>
    );
}; 

PriceOption.propTypes={
    option:PropTypes.object
}
export default PriceOption;