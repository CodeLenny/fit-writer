import FitRecord from "./FitRecord";
import FitField from "./FitField";
import FitRecordDefinition from "./FitRecordDefinition";
import FitData from "./FitData";

/**
 * A data record following a previously-defined {@link FitRecordDefinition} format.
 */
export default class FitDataRecord<Fields extends FitField[]> extends FitRecord {

    private readonly format: FitRecordDefinition<Fields>;
    private readonly fieldData: Fields & FitData[];

    constructor(format: FitRecordDefinition<Fields>, fields: Fields & FitData[]) {
        super();
        this.format = format;
        this.fieldData = fields;
    }

}
