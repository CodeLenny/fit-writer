import FitData from "../FitData";

export default class FitEnum extends FitData {

    private readonly value: number;
    private readonly valueName: string;
    private readonly comment?: string;
    private readonly __enum = "enum";

    constructor(value: number, valueName: string, comment?: string) {
        super();
        this.value = value;
        this.valueName = valueName;
        this.comment = comment;
    }

}
