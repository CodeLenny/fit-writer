import FitData from "../FitData";
import FitFileIdTimeCreatedField from "../file_id/FitFileIdTimeCreatedField";
import { RangeError } from "common-errors";

type fields = FitFileIdTimeCreatedField;

export default class FitDateTime extends FitData implements fields {

    static fromDate(date: Date): FitRealDateTime {
        return new FitRealDateTime((date.getTime() / 1000) - 631065600);
    }

    private readonly value: number;
    private readonly __date = "date";
    readonly __fileIdTimeCreatedField = "fileIdTimeCreatedField";

    constructor(value: number) {
        super();
        this.value = value;
    }

}

/**
 * Express the current time in number of seconds since UTC 00:00 Dec 31 1989.
 */
export class FitRealDateTime extends FitDateTime {

    constructor(value: number) {
        if(value < 0x10000000) {
            throw new RangeError("Use FitSystemDateTime if you are expressing a date_time from device power on.");
        }
        super(value);
    }

}

/**
 * Express the number of seconds from device power on.
 */
export class FitSystemDateTime extends FitDateTime {

    constructor(value: number) {
        if(value >= 0x10000000) {
            throw new RangeError("Use FitRealDateTime if you are expressing a date_time in real number of seconds.");
        }
        super(value);
    }

}
