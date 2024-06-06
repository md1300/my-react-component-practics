import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

    const gymPrices = [
        { id: 1, name: "Basic Membership", features: ["Access to gym equipment", "Locker room access", "Basic fitness assessment"], price: "$30/month" },
        { id: 2, name: "Standard Membership", features: ["Access to gym equipment", "Group fitness classes", "Locker room access", "Personalized workout plan"], price: "$50/month" },
        { id: 3, name: "Premium Membership", features: ["Access to gym equipment", "Group fitness classes", "Personal trainer sessions (2x/month)", "Locker room access", "Nutritional counseling"], price: "$100/month" },
        { id: 4, name: "Student Membership", features: ["Access to gym equipment", "Group fitness classes", "Student discount", "Locker room access"], price: "$25/month" },
        { id: 5, name: "Family Membership", features: ["Access to gym equipment", "Group fitness classes for the whole family", "Child care services", "Locker room access", "Family discount"], price: "$120/month" }
      ];
      

    return (
        <div>
            <h1 className="text-5xl text-center">best price in the town</h1>
            <div className="grid grid-cols-3  ">
            {
              gymPrices.map(option=><PriceOption key={option.id} option={option}></PriceOption> )
            }
            </div>
        </div>
    );
};

export default PriceOptions;