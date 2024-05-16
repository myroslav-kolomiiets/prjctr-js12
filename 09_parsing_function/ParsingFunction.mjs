import {stuffData} from "./stuffData.mjs";

/**
 * parsingStuff - main parsing function
 * @param workersData
 * @param property
 */
function parsingStuff(workersData, property) {
    const workersArray = [];
    flattStuff(workersData, workersArray);
    const uniqueWorker = filterUniqueWorkers(workersArray);
    const sortedWorkers = uniqueWorker.sort(byProperty(property));
    showDescriptionForEachWorker(sortedWorkers);
}

/**
 * flatStuff - flat all workers in one array
 * @param stuffStructure
 * @param accumulatingArray
 */
function flattStuff(stuffStructure, accumulatingArray) {
    accumulatingArray.push(stuffStructure);
    if (stuffStructure.subordinators === null) {
        return;
    }
    stuffStructure.subordinators.forEach((subordinator) => {
        flattStuff(subordinator, accumulatingArray);
    })
}

/**
 * filterUniqueWorkers
 * @param workers
 * @return {Array}
 */
function filterUniqueWorkers(workers) {
    const allWorkers = workers.map((worker) => {
        return [`${worker.firstName} ${worker.secondName}`, worker];
    })

    return Array.from(new Map(allWorkers).values());
}

/**
 * byProperty - sort function
 * @param property
 * @return {function(*, *): number}
 */
function byProperty(property = 'yearsOfExperience') {
    return (a, b) => a[property] < b[property] ? 1 : -1;
}

/**
 * showDescriptionForEachWorker - output final information
 * @param employees
 */
function showDescriptionForEachWorker(employees) {
    employees.forEach((employee) => {
        const { firstName, secondName, age } = employee;
        console.log(`${firstName} ${secondName} is ${age}`);
    })
}

parsingStuff(stuffData, 'age');
