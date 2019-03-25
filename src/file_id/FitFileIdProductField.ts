import FitField from "../FitField";
import FitFieldDefinition from "../FitFieldDefinition";
import FitBaseType from "../FitBaseType";
import FitUint16 from "../baseType/FitUint16";
import FitFileIdMessage from "./FitFileIdMessage";
import FitFileIdField from "./FitFileIdField";

export default class FitFileIdProductField implements FitField, FitFileIdField {

    readonly __field = "field";
    readonly __fileIdField = "fileIdField";
    readonly __fileIdProductField = "fileIdProductField";

    static createDefinition(): FitFileIdProductFieldDefinition
    static createDefinition(size: number, baseType: InstanceType<typeof FitBaseType>): FitFileIdProductFieldDefinition
    static createDefinition(size: number = 4, baseType: InstanceType<typeof FitBaseType> = FitUint16) {
        return new FitFileIdProductFieldDefinition(size, baseType);
    }

}

export class FitFileIdProductFieldDefinition extends FitFieldDefinition implements FitFileIdProductField {

    readonly __field = "field";
    readonly __fileIdField = "fileIdField";
    readonly __fileIdProductField = "fileIdProductField";

    constructor()
    constructor(size: number, baseType: InstanceType<typeof FitBaseType>)
    constructor(size: number = 4, baseType: InstanceType<typeof FitBaseType> = FitUint16) {
        super(FitFileIdMessage, 2, size, baseType);
    }

}
