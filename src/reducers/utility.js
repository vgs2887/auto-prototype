const bodilyInjuryReferenceCovArray = [{ monthlyPremium: 29, coverageValue: "Please enter monthly premium over 30 USD" },
{ monthlyPremium: 30, coverageValue: "15,000/$30,000" },
{ monthlyPremium: 35, coverageValue: "15,000/$30,000"  }, { monthlyPremium: 40, coverageValue: "15,000/$30,000" },
{ monthlyPremium: 45, coverageValue: "15,000/$30,000"  }, { monthlyPremium: 50, coverageValue: "15,000/$30,000"  },
{ monthlyPremium: 55, coverageValue: "50,000/$100,000" }, { monthlyPremium: 60, coverageValue: "50,000/$100,000" },
{ monthlyPremium: 65, coverageValue: "50,000/$100,000" }, { monthlyPremium: 70, coverageValue: "50,000/$100,000" },
{ monthlyPremium: 75, coverageValue: "100,000/$250,000", }, { monthlyPremium: 80, coverageValue: "100,000/$250,000", },
{ monthlyPremium: 85, coverageValue: "100,000/$250,000", }, { monthlyPremium: 90, coverageValue: "100,000/$250,000", },
{ monthlyPremium: 95, coverageValue: "100,000/$250,000", }, { monthlyPremium: 100, coverageValue: "100,000/$250,000", },
{ monthlyPremium: 110, coverageValue: "500,000/$1,000,000" }, { monthlyPremium: 120, coverageValue: "500,000/$1,000,000"  },
{ monthlyPremium: 130, coverageValue: "500,000/$1,000,000"  }, { monthlyPremium: 140, coverageValue: "500,000/$1,000,000"  },
{ monthlyPremium: 150, coverageValue: "500,000/$1,000,000"  }, { monthlyPremium: 160, coverageValue: "500,000/$1,000,000"  },
{ monthlyPremium: 200, coverageValue: "500,000/$1,000,000"  }, { monthlyPremium: 201, coverageValue: "Please contact help desk for larger coverage needs" }];


const propertyDamageReferenceCovArray = [{ monthlyPremium: 29, coverageValue: "Please enter monthly premium over 30 USD" },
{ monthlyPremium: 30, coverageValue: "10,000" },
{ monthlyPremium: 35, coverageValue: "10,000" }, { monthlyPremium: 40, coverageValue: "10,000" },
{ monthlyPremium: 45, coverageValue: "10,000" }, { monthlyPremium: 50, coverageValue: "10,000" },
{ monthlyPremium: 55, coverageValue: "10,000" }, { monthlyPremium: 60, coverageValue: "25,000" },
{ monthlyPremium: 65, coverageValue: "25,000"}, { monthlyPremium: 70, coverageValue: "25,000" },
{ monthlyPremium: 75, coverageValue: "25,000" }, { monthlyPremium: 80, coverageValue: "25,000"},
{ monthlyPremium: 85, coverageValue: "50,000" }, { monthlyPremium: 90, coverageValue: "50,000" },
{ monthlyPremium: 95, coverageValue: "50,000" }, { monthlyPremium: 100, coverageValue: "50,000" },
{ monthlyPremium: 110, coverageValue: "50,000" }, { monthlyPremium: 120, coverageValue: "50,000" },
{ monthlyPremium: 130, coverageValue: "100,000" }, { monthlyPremium: 140, coverageValue: "100,000" },
{ monthlyPremium: 150, coverageValue: "100,000" }, { monthlyPremium: 160, coverageValue: "100,000" },
{ monthlyPremium: 200, coverageValue: "100,000" }, { monthlyPremium: 201, coverageValue: "Please contact help desk for larger coverage needs" }];

const compCovReferenceArray = [{ monthlyPremium: 29, coverageValue: "Please enter monthly premium over 30 USD" },
{ monthlyPremium: 30, coverageValue: "1000" },
{ monthlyPremium: 35, coverageValue: "1000" }, { monthlyPremium: 40, coverageValue: "1000" },
{ monthlyPremium: 45, coverageValue: "1000" }, { monthlyPremium: 50, coverageValue: "1000" },
{ monthlyPremium: 55, coverageValue: "500" }, { monthlyPremium: 60, coverageValue: "500" },
{ monthlyPremium: 65, coverageValue: "500"}, { monthlyPremium: 70, coverageValue: "500" },
{ monthlyPremium: 75, coverageValue: "500" }, { monthlyPremium: 80, coverageValue: "500"},
{ monthlyPremium: 85, coverageValue: "250" }, { monthlyPremium: 90, coverageValue: "250" },
{ monthlyPremium: 95, coverageValue: "250" }, { monthlyPremium: 100, coverageValue: "250" },
{ monthlyPremium: 110, coverageValue: "250" }, { monthlyPremium: 120, coverageValue: "250" },
{ monthlyPremium: 130, coverageValue: "0" }, { monthlyPremium: 140, coverageValue: "0" },
{ monthlyPremium: 150, coverageValue: "0" }, { monthlyPremium: 160, coverageValue: "0" },
{ monthlyPremium: 200, coverageValue: "0" }, { monthlyPremium: 201, coverageValue: "Please contact help desk for larger coverage needs" }];




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

