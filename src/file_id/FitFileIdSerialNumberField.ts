import FitField from "../FitField";
import FitBaseType from "../FitBaseType";
import FitUint32z from "../baseType/FitUint32z";
import FitFieldDefinition from "../FitFieldDefinition";
import FitFileIdMessage from "./FitFileIdMessage";
import FitFileIdField from "./FitFileIdField";

export default class FitFileIdSerialNumberField implements FitField, FitFileIdField {

    readonly __field = "field";
    readonly __fileIdField = "fileIdField";
    readonly __fileIdSerialNumberField = "fileIdSerialNumberField";

    static createDefinition(): FitFileIdSerialNumberFieldDefinition
    static createDefinition(size: number, baseType: InstanceType<typeof FitBaseType>): FitFileIdSerialNumberFieldDefinition
    static createDefinition(size: number = 2, baseType: InstanceType<typeof FitBaseType> = FitUint32z) {
        return new FitFileIdSerialNumberFieldDefinition(size, baseType);
    }

}

export class FitFileIdSerialNumberFieldDefinition extends FitFieldDefinition implements FitFileIdSerialNumberField {

    readonly __field = "field";
    readonly __fileIdField = "fileIdField";
    readonly __fileIdSerialNumberField = "fileIdSerialNumberField";

    constructor()
    constructor(size: number, baseType: InstanceType<typeof FitBaseType>)
    constructor(size: number = 2, baseType: InstanceType<typeof FitBaseType> = FitUint32z) {
        super(FitFileIdMessage, 3, size, baseType);
    }

}
