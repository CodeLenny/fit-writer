import { NotImplementedError } from "common-errors";

/**
 * A message category.
 */
export default class FitMessage {

    static getGlobalMessageNumber(): number {
        throw new NotImplementedError("FitMessage.getGlobalMessageNumber is abstract.");
    }

}
