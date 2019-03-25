import FitField from "../FitField";
import FitBaseType from "../FitBaseType";
import FitFieldDefinition from "../FitFieldDefinition";
import FitFileIdMessage from "./FitFileIdMessage";
import FitUint32 from "../baseType/FitUint32";

export default class FitFileIdTimeCreatedField implements FitField {

    readonly __field = "field";
    readonly __fileIdTimeCreatedField = "fileIdTimeCreatedField";

    static createDefinition(): FitFileIdTimeCreatedFieldDefinition
    static createDefinition(size: number, baseType: InstanceType<typeof FitBaseType>): FitFileIdTimeCreatedFieldDefinition
    static createDefinition(size: number = 4, baseType: InstanceType<typeof FitBaseType> = FitUint32) {
        return new FitFileIdTimeCreatedFieldDefinition(size, baseType);
    }

}

export class FitFileIdTimeCreatedFieldDefinition extends FitFieldDefinition implements FitFileIdTimeCreatedField {

    readonly __field = "field";
    readonly __fileIdTimeCreatedField = "fileIdTimeCreatedField";

    constructor()
    constructor(size: number, baseType: InstanceType<typeof FitBaseType>)
    constructor(size: number = 4, baseType: InstanceType<typeof FitBaseType> = FitUint32) {
        super(FitFileIdMessage, 4, size, baseType);
    }

}
