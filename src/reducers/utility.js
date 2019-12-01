const bodilyInjuryReferenceCovArray = [{ monthlyPremium: 29, coverageValue: "Please enter monthly premium over 30 USD" },
{ monthlyPremium: 30, coverageValue: 5000 },
{ monthlyPremium: 35, coverageValue: 7000 }, { monthlyPremium: 40, coverageValue: 10000 },
{ monthlyPremium: 45, coverageValue: 15000 }, { monthlyPremium: 50, coverageValue: 20000 },
{ monthlyPremium: 55, coverageValue: 30000 }, { monthlyPremium: 60, coverageValue: 40000 },
{ monthlyPremium: 65, coverageValue: 50000 }, { monthlyPremium: 70, coverageValue: 60000 },
{ monthlyPremium: 75, coverageValue: 75000 }, { monthlyPremium: 80, coverageValue: 90000 },
{ monthlyPremium: 85, coverageValue: 100000 }, { monthlyPremium: 90, coverageValue: 110000 },
{ monthlyPremium: 95, coverageValue: 120000 }, { monthlyPremium: 100, coverageValue: 200000 },
{ monthlyPremium: 110, coverageValue: 300000 }, { monthlyPremium: 120, coverageValue: 400000 },
{ monthlyPremium: 130, coverageValue: 500000 }, { monthlyPremium: 140, coverageValue: 600000 },
{ monthlyPremium: 150, coverageValue: 700000 }, { monthlyPremium: 160, coverageValue: 800000 },
{ monthlyPremium: 200, coverageValue: 1000000 }, { monthlyPremium: 201, coverageValue: "Please contact help desk for larger coverage needs" }];


const propertyDamageReferenceCovArray = [{ monthlyPremium: 29, coverageValue: "Please enter monthly premium over 30 USD" },
{ monthlyPremium: 30, coverageValue: 600 },
{ monthlyPremium: 35, coverageValue: 800 }, { monthlyPremium: 40, coverageValue: 1100 },
{ monthlyPremium: 45, coverageValue: 1400 }, { monthlyPremium: 50, coverageValue: 2250 },
{ monthlyPremium: 55, coverageValue: 3200 }, { monthlyPremium: 60, coverageValue: 3800 },
{ monthlyPremium: 65, coverageValue: 5400}, { monthlyPremium: 70, coverageValue: 6300 },
{ monthlyPremium: 75, coverageValue: 7700 }, { monthlyPremium: 80, coverageValue: 9175},
{ monthlyPremium: 85, coverageValue: 10000 }, { monthlyPremium: 90, coverageValue: 11250 },
{ monthlyPremium: 95, coverageValue: 12000 }, { monthlyPremium: 100, coverageValue: 20000 },
{ monthlyPremium: 110, coverageValue: 30000 }, { monthlyPremium: 120, coverageValue: 40000 },
{ monthlyPremium: 130, coverageValue: 60000 }, { monthlyPremium: 140, coverageValue: 70000 },
{ monthlyPremium: 150, coverageValue: 80000 }, { monthlyPremium: 160, coverageValue: 90000 },
{ monthlyPremium: 200, coverageValue: 100000 }, { monthlyPremium: 201, coverageValue: "Please contact help desk for larger coverage needs" }];

const compCovReferenceArray = [{ monthlyPremium: 29, coverageValue: "Please enter monthly premium over 30 USD" },
{ monthlyPremium: 30, coverageValue: 65 },
{ monthlyPremium: 35, coverageValue: 75 }, { monthlyPremium: 40, coverageValue: 100 },
{ monthlyPremium: 45, coverageValue: 150 }, { monthlyPremium: 50, coverageValue: 180 },
{ monthlyPremium: 55, coverageValue: 300 }, { monthlyPremium: 60, coverageValue: 350 },
{ monthlyPremium: 65, coverageValue: 400}, { monthlyPremium: 70, coverageValue: 500 },
{ monthlyPremium: 75, coverageValue: 550 }, { monthlyPremium: 80, coverageValue: 600},
{ monthlyPremium: 85, coverageValue: 650 }, { monthlyPremium: 90, coverageValue: 700 },
{ monthlyPremium: 95, coverageValue: 750 }, { monthlyPremium: 100, coverageValue: 800 },
{ monthlyPremium: 110, coverageValue: 850 }, { monthlyPremium: 120, coverageValue: 900 },
{ monthlyPremium: 130, coverageValue: 950 }, { monthlyPremium: 140, coverageValue: 1000 },
{ monthlyPremium: 150, coverageValue: 1100 }, { monthlyPremium: 160, coverageValue: 1200 },
{ monthlyPremium: 200, coverageValue: 1300 }, { monthlyPremium: 201, coverageValue: "Please contact help desk for larger coverage needs" }];




export const updateObject = (oldObject, updatedProperties) => {
	return {
		...oldObject,
		...updatedProperties
	};
};

export function calculateCoveragesbasedOnEnteredPremium(state, userEnteredPremium) {
	
	let bodilyInjuryCoverageValue = findCoverageValue(bodilyInjuryReferenceCovArray, userEnteredPremium);
	let propertyDamageCoverageValue = findCoverageValue(propertyDamageReferenceCovArray, userEnteredPremium);
	let comColCoverageValue = findCoverageValue(compCovReferenceArray, userEnteredPremium);
	
	return {
		...state,
		...{
			userEnteredPremium,
			coverages: {
				"bodilyInjurySuggested": (userEnteredPremium && bodilyInjuryCoverageValue.coverageValue),
				"propertyDamageSuggested": (userEnteredPremium && propertyDamageCoverageValue.coverageValue),
				"comprehensiveSuggested": (userEnteredPremium && comColCoverageValue.coverageValue),
				"collisionSuggested": (userEnteredPremium && comColCoverageValue.coverageValue)
			}
		}
	};
}

function findCoverageValue(refArray = [], userEnteredPremium = 0 ) {
	
	let coverageValue = refArray.find(item => item.monthlyPremium >= userEnteredPremium);
	if (!coverageValue) { coverageValue = { monthlyPremium: 0, coverageValue: "Please contact help desk for your coverage needs" } };

	return coverageValue;
}

