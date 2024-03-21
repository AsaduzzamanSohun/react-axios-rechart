import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": 29.99,
            "offers": [
                "Access to gym facilities",
                "Unlimited cardio equipment usage",
                "Access to group fitness classes"
            ]
        },
        {
            "id": 2,
            "name": "Premium Membership",
            "price": 49.99,
            "offers": [
                "Access to gym facilities",
                "Unlimited cardio equipment usage",
                "Access to group fitness classes",
                "Personal training session once a week",
                "Access to sauna and steam room"
            ]
        },
        {
            "id": 3,
            "name": "Student Membership",
            "price": 19.99,
            "offers": [
                "Access to gym facilities",
                "Unlimited cardio equipment usage",
                "Access to group fitness classes",
                "Valid student ID required"
            ]
        },
        {
            "id": 4,
            "name": "Platinum Membership",
            "price": 99.99,
            "offers": [
                "Access to gym facilities",
                "Unlimited cardio equipment usage",
                "Access to group fitness classes",
                "Personal training session twice a week",
                "Access to sauna, steam room, and swimming pool",
                "Towel service included",
                "Nutritional counseling session once a month",
                "Free guest pass every month",
                "Discounts on gym merchandise"
            ]
        }
    ]


    return (
        <div className="grid md:grid-cols-4 gap-8">

            {
                priceOptions.map(priceOption => <PriceOption 
                key={priceOption.id}
                priceOption={priceOption}
                ></PriceOption>)
            }

        </div>
    );
};

export default PriceOptions;