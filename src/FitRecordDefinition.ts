import FitRecord from "./FitRecord";
import FitField from "./FitField";
import FitFieldDefinition from "./FitFieldDefinition";
import FitData from "./FitData";
import FitDataRecord from "./FitDataRecord";

/**
 * Defines the format of {@link FitField}s used in the following {@link FitDataRecord}s.
 *
 * @typeparam Fields The set of fields included in the format definition, and listed in the {@link FitDataRecord}s.
 */
export default class FitRecordDefinition<Fields extends FitField[]> extends FitRecord {

    private readonly fields: Fields & FitFieldDefinition[];

    /**
     * Create a new `FitRecordDefinition`.  Pass the returned object to
     * {@link FitFile.add} to add this definition.
     *
     * @param fields The fields defined by this record.
     */
    constructor(...fields: Fields & FitFieldDefinition[]) {
        super();
        this.fields = fields;
    }

    create(...fields: Fields & FitData[]): FitDataRecord<Fields> {
        return new FitDataRecord(this, fields);
    }

}
