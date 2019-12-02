const bodilyInjuryReferenceCovArray = [{ monthlyPremium: 29, coverageValue: "Please enter monthly premium over 30 USD" ,coveragePremium:0},
{ monthlyPremium: 30, coverageValue: "15,000/$30,000",coveragePremium: 5 },
{ monthlyPremium: 35, coverageValue: "15,000/$30,000",coveragePremium: 5 }, { monthlyPremium: 40, coverageValue: "15,000/$30,000", coveragePremium: 5 },
{ monthlyPremium: 45, coverageValue: "15,000/$30,000",coveragePremium: 5   }, { monthlyPremium: 50, coverageValue: "15,000/$30,000",coveragePremium: 5   },
{ monthlyPremium: 55, coverageValue: "50,000/$100,000",coveragePremium: 10 }, { monthlyPremium: 60, coverageValue: "50,000/$100,000",coveragePremium: 10  },
{ monthlyPremium: 65, coverageValue: "50,000/$100,000",coveragePremium: 10  }, { monthlyPremium: 70, coverageValue: "50,000/$100,000",coveragePremium: 10  },
{ monthlyPremium: 75, coverageValue: "100,000/$250,000",coveragePremium: 15  }, { monthlyPremium: 80, coverageValue: "100,000/$250,000",coveragePremium: 15 },
{ monthlyPremium: 85, coverageValue: "100,000/$250,000",coveragePremium: 15 }, { monthlyPremium: 90, coverageValue: "100,000/$250,000",coveragePremium: 15 },
{ monthlyPremium: 95, coverageValue: "100,000/$250,000",coveragePremium: 15 }, { monthlyPremium: 100, coverageValue: "100,000/$250,000",coveragePremium: 15 },
{ monthlyPremium: 110, coverageValue: "500,000/$1,000,000" ,coveragePremium: 20}, { monthlyPremium: 120, coverageValue: "500,000/$1,000,000",coveragePremium: 20},
{ monthlyPremium: 130, coverageValue: "500,000/$1,000,000" ,coveragePremium: 20 }, { monthlyPremium: 140, coverageValue: "500,000/$1,000,000",coveragePremium: 20  },
{ monthlyPremium: 150, coverageValue: "500,000/$1,000,000" ,coveragePremium: 20 }, { monthlyPremium: 160, coverageValue: "500,000/$1,000,000" ,coveragePremium: 20 },
{ monthlyPremium: 200, coverageValue: "500,000/$1,000,000",coveragePremium: 20  }, { monthlyPremium: 201, coverageValue: "Please contact help desk for larger coverage needs",coveragePremium: 0}];


const propertyDamageReferenceCovArray = [{ monthlyPremium: 29, coverageValue: "Please enter monthly premium over 30 USD",coveragePremium:0 },
{ monthlyPremium: 30, coverageValue: "10,000",coveragePremium: 5  },
{ monthlyPremium: 35, coverageValue: "10,000",coveragePremium: 5  }, { monthlyPremium: 40, coverageValue: "10,000",coveragePremium: 5 },
{ monthlyPremium: 45, coverageValue: "10,000",coveragePremium: 5  }, { monthlyPremium: 50, coverageValue: "10,000",coveragePremium: 5  },
{ monthlyPremium: 55, coverageValue: "10,000" ,coveragePremium: 5 }, { monthlyPremium: 60, coverageValue: "25,000",coveragePremium: 10 },
{ monthlyPremium: 65, coverageValue: "25,000",coveragePremium: 10 }, { monthlyPremium: 70, coverageValue: "25,000",coveragePremium: 10  },
{ monthlyPremium: 75, coverageValue: "25,000" ,coveragePremium: 10 }, { monthlyPremium: 80, coverageValue: "25,000",coveragePremium: 10 },
{ monthlyPremium: 85, coverageValue: "50,000",coveragePremium: 15 }, { monthlyPremium: 90, coverageValue: "50,000",coveragePremium: 15 },
{ monthlyPremium: 95, coverageValue: "50,000",coveragePremium: 15 }, { monthlyPremium: 100, coverageValue: "50,000",coveragePremium: 15 },
{ monthlyPremium: 110, coverageValue: "50,000",coveragePremium: 15}, { monthlyPremium: 120, coverageValue: "50,000",coveragePremium: 15 },
{ monthlyPremium: 130, coverageValue: "100,000",coveragePremium: 20 }, { monthlyPremium: 140, coverageValue: "100,000",coveragePremium: 20 },
{ monthlyPremium: 150, coverageValue: "100,000",coveragePremium: 20 }, { monthlyPremium: 160, coverageValue: "100,000",coveragePremium: 20 },
{ monthlyPremium: 200, coverageValue: "100,000",coveragePremium: 20}, { monthlyPremium: 201, coverageValue: "Please contact help desk for larger coverage needs",coveragePremium: 0}];

const compCovReferenceArray = [{ monthlyPremium: 29, coverageValue: "Please enter monthly premium over 30 USD",coveragePremium:0},
{ monthlyPremium: 30, coverageValue: "1000",coveragePremium: 10 },
{ monthlyPremium: 35, coverageValue: "1000",coveragePremium: 12}, { monthlyPremium: 40, coverageValue: "1000",coveragePremium: 15 },
{ monthlyPremium: 45, coverageValue: "1000",coveragePremium: 17 }, { monthlyPremium: 50, coverageValue: "1000",coveragePremium: 20 },
{ monthlyPremium: 55, coverageValue: "500",coveragePremium: 20}, { monthlyPremium: 60, coverageValue: "500",coveragePremium: 20 },
{ monthlyPremium: 65, coverageValue: "500",coveragePremium: 22}, { monthlyPremium: 70, coverageValue: "500",coveragePremium: 25},
{ monthlyPremium: 75, coverageValue: "500",coveragePremium: 25}, { monthlyPremium: 80, coverageValue: "500",coveragePremium: 25},
{ monthlyPremium: 85, coverageValue: "250",coveragePremium: 27}, { monthlyPremium: 90, coverageValue: "250",coveragePremium: 27},
{ monthlyPremium: 95, coverageValue: "250",coveragePremium: 30}, { monthlyPremium: 100, coverageValue: "250",coveragePremium: 35 },
{ monthlyPremium: 110, coverageValue: "250",coveragePremium: 37}, { monthlyPremium: 120, coverageValue: "250",coveragePremium: 40},
{ monthlyPremium: 130, coverageValue: "0", coveragePremium: 45}, { monthlyPremium: 140, coverageValue: "0",coveragePremium: 50 },
{ monthlyPremium: 150, coverageValue: "0",coveragePremium: 55 }, { monthlyPremium: 160, coverageValue: "0",coveragePremium: 60 },
{ monthlyPremium: 200, coverageValue: "0",coveragePremium: 80}, { monthlyPremium: 201, coverageValue: "Please contact help desk for larger coverage needs" }];


export const updateObject = (oldObject, updatedProperties) => {
	return {
		...oldObject,
		...updatedProperties
	};
};

export function calculateCoveragesbasedOnEnteredPremium(state, userEnteredPremium) {
	
	let bodilyInjuryCoverageValue = findCoverageValue(bodilyInjuryReferenceCovArray, userEnteredPremium);
	let propertyDamageCoverageValue  = findCoverageValue(propertyDamageReferenceCovArray, userEnteredPremium);
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
			},
			premiums: {
				"bodilyInjuryPremium": bodilyInjuryCoverageValue.coveragePremium,
				"propertyDamagePremium": propertyDamageCoverageValue.coveragePremium,
				"comprehensivePremium": comColCoverageValue.coveragePremium,
				"collisionPremium": comColCoverageValue.coveragePremium
			},
			closestMonthlyPremium: bodilyInjuryCoverageValue.monthlyPremium
		}
	};
}

function findCoverageValue(refArray = [], userEnteredPremium = 0 ) {
	
	let coverageValue= refArray.find(item => item.monthlyPremium >= userEnteredPremium);
	console.log("VIgnesh Prints Both Value and Premium"+JSON.stringify(coverageValue)+"Premium:");
	if (!coverageValue) { coverageValue = { monthlyPremium: 0, coverageValue: "Please contact help desk for your coverage needs",coveragePremium:0 } };
	return (coverageValue);
}