import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import MealDetails from './MealDetails';
import 'react-accessible-accordion/dist/fancy-example.css';


const UserProfile = () => {
    const paramsData = useParams();
    const [userProfileData, setUserProfileData] = useState();

    useEffect(() => {
        if (paramsData.userProfileId) {
            fetch(
                "/get2daysmeal",
                {
                    method: "POST",
                    headers: {
                        "access-control-allow-origin": "*",
                        "Content-Type": "application/json",
                        "accepts": "application/json",
                    },
                    body: JSON.stringify({
                        data: {
                            profileId: paramsData.userProfileId,
                        },
                    })
                }
            )
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                    setUserProfileData(data);
                })
                .catch((err) => {
                    console.error(err);
                });


            console.log(paramsData.userProfileId);
        }
    }, [paramsData]);

    return (
        <div style={{ padding: '10px 20px' }}>
            <div style={{ textAlign: 'center' }}>
                <h2>User Diet Details</h2>
            </div>
            {userProfileData ? (
                <div>
                    <div style={{ marginBottom: '10px' }}>
                        Date: <strong>{userProfileData.date}</strong>
                    </div>
                    <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Today's Meal
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <MealDetails mealDetails={userProfileData.mealtoday} />
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Yesterday's Meal
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <MealDetails mealDetails={userProfileData.mealyesterday} />
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Day before Meal
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <MealDetails mealDetails={userProfileData.mealdaybefore} />
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                </div>
            ) : (
                <div>
                    No user diet data found !
                </div>
            )}
        </div>
    );
};

export default UserProfile;
