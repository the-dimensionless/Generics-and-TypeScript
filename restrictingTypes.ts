export interface IBuilding {
    buildingName: string;
    numberOfFloors: number;
};

let buildingApple: IBuilding = {
    buildingName: "Apple Co.",
    numberOfFloors: 13
};

let IFunctionType: (arrayOfBuildings: Array<IBuilding>) => void;

const demoFunction = IFunctionType ;

let neighborhood: Array<IBuilding> = [];

neighborhood.push(
    {buildingName: "Apple", numberOfFloors: 13},
    {buildingName: "Google", numberOfFloors: 23},
    {buildingName: "Microsoft", numberOfFloors: 9},
);

neighborhood.forEach((i) => {
    console.log(`Building name is ${i.buildingName} and number of floors are ${i.numberOfFloors}`);
});

demoFunction(neighborhood);

