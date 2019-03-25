import FitMessage from "./FitMessage";
import FitBaseType from "./FitBaseType";

/**
 * The definition of a {@link FitField}, including the field type (e.g. `2` for `base_type_id`),
 * size (in number of bytes), and encoding (e.g. `2` for `uint8`).
 */
export default class FitFieldDefinition {

    private readonly globalMessageNumber: InstanceType<typeof FitMessage>;
    private readonly fieldDefinitionNumber: number;
    private readonly size: number;
    private readonly baseType: InstanceType<typeof FitBaseType>;
    private readonly __fieldDefinition = "fieldDefinition";

    /**
     * Create a format definition for fields in {@link FitDataRecord}, to be used in {@link FitRecordDefinition}s.
     *
     * @param globalMessage The category for this field.  Used to ensure fields are used in the proper records.
     * @param field The ID of the field, defining the field's type.
     * @param size  The size (in number of bytes) of this field.
     * @param baseType The encoding for this field.
     */
    constructor(globalMessage: InstanceType<typeof FitMessage>, field: number, size: number, baseType: InstanceType<typeof FitBaseType>) {
        this.globalMessageNumber = globalMessage;
        this.fieldDefinitionNumber = field;
        this.size = size;
        this.baseType = baseType;
    }

}
