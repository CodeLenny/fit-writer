import FitData from "../FitData";
import FitFileIdTypeField from "../file_id/FitFileIdTypeField";
import FitFileIdProductField from "../file_id/FitFileIdProductField";
import FitFileIdSerialNumberField from "../file_id/FitFileIdSerialNumberField";

type fields = FitFileIdTypeField & FitFileIdProductField & FitFileIdSerialNumberField;

export default class FitNumber extends FitData implements fields {

    private readonly value: number;
    private readonly __number = "number";
    readonly __fileIdField = "fileIdField";
    readonly __fileIdTypeField = "fileIdTypeField";
    readonly __fileIdProductField = "fileIdProductField";
    readonly __fileIdSerialNumberField = "fileIdSerialNumberField";

    constructor(value: number) {
        super();
        this.value = value;
    }

}
