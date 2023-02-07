import React from "react";

const MealDetails = (props) => {
    const { mealDetails } = props;

    return (
        <div>
            {mealDetails.date ? (
                <div>
                    <div>
                        <h3>
                            Meal Details
                        </h3>
                    </div>
                    <div>
                        {mealDetails.dietTracking.map((meal, i) => (
                            <div key={i} style={{ marginBottom: '20px' }}>
                                <div style={{ marginBottom: '5px' }}>
                                    <div style={{ display: 'flex', gap: '10px' }}>
                                        <div style={{ width: '20px', minWidth: '20px', textAlign: 'right' }}>
                                            {i + 1}.
                                        </div>
                                        <div>
                                            {meal.mealName}
                                        </div>
                                    </div>

                                </div>
                                <div style={{ paddingLeft: '30px' }}>
                                    <div>
                                        MealType: {meal.mealType}
                                    </div>
                                    <div>
                                        Time: {meal.time}
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            ) : (
                <h5>No details found</h5>
            )}
        </div>
    )

}

export default MealDetails;