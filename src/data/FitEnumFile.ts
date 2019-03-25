import FitFileIdTypeField from "../file_id/FitFileIdTypeField";
import FitEnum from "./FitEnum";

/**
 * The file enumeration.
 */
export default class FitEnumFile extends FitEnum {

    private readonly __enum_file = "file";
    readonly __fileIdField = "fileIdField";
    readonly __fileIdTypeField = "fileIdTypeField";

}

export class FitEnumFileDevice extends FitEnumFile implements FitFileIdTypeField {

    constructor() {
        super(1, "device", "Read only, single file. Must be in root directory.");
    }

}

export class FitEnumFileSettings extends FitEnumFile implements FitFileIdTypeField {

    constructor() {
        super(2, "settings", "Read/write, single file. Directory=Settings");
    }

}

export class FitEnumFileSport extends FitEnumFile implements FitFileIdTypeField {

    constructor() {
        super(3, "sport", "Read/write, multiple files, file number = sport type. Directory=Sports");
    }

}

export class FitEnumFileActivity extends FitEnumFile implements FitFileIdTypeField {

    constructor() {
        super(4, "activity", "Read/erase, multiple files. Directory=Activities");
    }

}

export class FitEnumFileWorkout extends FitEnumFile implements FitFileIdTypeField {

    constructor() {
        super(5, "workout", "Read/write/erase, multiple files. Directory=Workouts");
    }

}

export class FitEnumFileCourse extends FitEnumFile implements FitFileIdTypeField {

    constructor() {
        super(6, "course", "Read/write/erase, multiple files. Directory=Courses");
    }

}

export class FitEnumFileSchedules extends FitEnumFile implements FitFileIdTypeField {

    constructor() {
        super(7, "schedules", "Read/write, single file. Directory=Schedules");
    }

}

export class FitEnumFileWeight extends FitEnumFile implements FitFileIdTypeField {

    constructor() {
        super(9, "weight", "Read only, single file. Circular buffer. All message definitions at start of file. Directory=Weight");
    }

}

export class FitEnumFileTotals extends FitEnumFile implements FitFileIdTypeField {

    constructor() {
        super(10, "totals", "Read only, single file. Directory=Totals");
    }

}

export class FitEnumFileGoals extends FitEnumFile implements FitFileIdTypeField {

    constructor() {
        super(11, "goals", "Read/write, single file. Directory=Goals");
    }

}

export class FitEnumFileBloodPressure extends FitEnumFile implements FitFileIdTypeField {

    constructor() {
        super(14, "blood_pressure", "Read only. Directory=Blood Pressure");
    }

}

export class FitEnumFileMonitoringA extends FitEnumFile implements FitFileIdTypeField {

    constructor() {
        super(15, "monitoring_a", "Read only. Directory=Monitoring. File number=sub type.");
    }

}

export class FitEnumFileActivitySummary extends FitEnumFile implements FitFileIdTypeField {

    constructor() {
        super(20, "activity_summary", "Read/erase, multiple files. Directory=Activities");
    }

}

export class FitEnumFileMonitoringDaily extends FitEnumFile implements FitFileIdTypeField {

    constructor() {
        super(28, "monitoring_daily");
    }

}

export class FitEnumFileMonitoringB extends FitEnumFile implements FitFileIdTypeField {

    constructor() {
        super(32, "monitoring_b", "Read only. Directory=Monitoring. File number=identifier");
    }

}

export class FitEnumFileSegment extends FitEnumFile implements FitFileIdTypeField {

    constructor() {
        super(34, "segment", "Read/write/erase. Multiple Files.  Directory=Segments");
    }

}

export class FitEnumFileSegmentList extends FitEnumFile implements FitFileIdTypeField {

    constructor() {
        super(35, "segment_list", "Read/write/erase. Single File.  Directory=Segments");
    }

}

export class FitEnumFileExdConfiguration extends FitEnumFile implements FitFileIdTypeField {

    constructor() {
        super(40, "exd_configuration", "Read/write/erase. Single File. Directory=Settings");
    }

}
