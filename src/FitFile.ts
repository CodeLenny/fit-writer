import FitRecord from "./FitRecord";

/**
 * An entire Fit file to write.
 */
export default class FitFile {

    private readonly records: FitRecord[];

    constructor() {
        this.records = [];
    }

    add(record: FitRecord) {
        this.records.push(record);
    }

}
