import FitMessage from "../FitMessage";
import FitFileIdTypeField from "./FitFileIdTypeField";

/**
 * Metadata about the Fit file.  Must be the first line in the file.
 */
export default class FitFileIdMessage extends FitMessage {

    public static readonly type = FitFileIdTypeField;

    public static getGlobalMessageNumber(): number {
        return 0;
    }

}
