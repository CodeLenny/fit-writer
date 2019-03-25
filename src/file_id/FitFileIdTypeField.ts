import FitField from "../FitField";
import FitFieldDefinition from "../FitFieldDefinition";
import FitBaseType from "../FitBaseType";
import FitFileIdMessage from "./FitFileIdMessage";
import FitEnum from "../baseType/FitEnum";
import FitEnumFile, { FitEnumFileDevice, FitEnumFileSettings, FitEnumFileSport, FitEnumFileActivity, FitEnumFileWorkout, FitEnumFileCourse, FitEnumFileSchedules, FitEnumFileWeight, FitEnumFileTotals, FitEnumFileGoals, FitEnumFileBloodPressure, FitEnumFileMonitoringA, FitEnumFileActivitySummary, FitEnumFileMonitoringB, FitEnumFileSegment, FitEnumFileSegmentList, FitEnumFileExdConfiguration } from "../data/FitEnumFile";
import FitFileIdField from "./FitFileIdField";

export default class FitFileIdTypeField implements FitField, FitFileIdField {

    readonly __field = "field";
    readonly __fileIdField = "fileIdField";
    readonly __fileIdTypeField = "fileIdTypeField";

    static createDefinition(): FitFileIdTypeFieldDefinition
    static createDefinition(size: number, baseType: InstanceType<typeof FitBaseType>): FitFileIdTypeFieldDefinition
    static createDefinition(size: number = 1, baseType: InstanceType<typeof FitBaseType> = FitEnum) {
        return new FitFileIdTypeFieldDefinition(size, baseType);
    }

    static device(): FitEnumFileDevice {
        return new FitEnumFileDevice();
    }

    static settings(): FitEnumFileSettings {
        return new FitEnumFileSettings();
    }

    static sport(): FitEnumFileSport {
        return new FitEnumFileSport();
    }

    static activity(): FitEnumFileActivity {
        return new FitEnumFileActivity();
    }

    static workout(): FitEnumFileWorkout {
        return new FitEnumFileWorkout();
    }

    static course(): FitEnumFileCourse {
        return new FitEnumFileCourse();
    }

    static schedules(): FitEnumFileSchedules {
        return new FitEnumFileSchedules();
    }

    static weight(): FitEnumFileWeight {
        return new FitEnumFileWeight();
    }

    static totals(): FitEnumFileTotals {
        return new FitEnumFileTotals();
    }

    static goals(): FitEnumFileGoals {
        return new FitEnumFileGoals();
    }

    static blood_pressure(): FitEnumFileBloodPressure {
        return new FitEnumFileBloodPressure();
    }

    static monitoring_a(): FitEnumFileMonitoringA {
        return new FitEnumFileMonitoringA();
    }

    static activity_summary(): FitEnumFileActivitySummary {
        return new FitEnumFileActivitySummary();
    }

    static monitoring_b(): FitEnumFileMonitoringB {
        return new FitEnumFileMonitoringB();
    }

    static segment(): FitEnumFileSegment {
        return new FitEnumFileSegment();
    }

    static segment_list(): FitEnumFileSegmentList {
        return new FitEnumFileSegmentList();
    }

    static exd_configuration(): FitEnumFileExdConfiguration {
        return new FitEnumFileExdConfiguration();
    }

    static mfg_range(value: 0xF7|0xF8|0xF9|0xFA|0xFB|0xFC|0xFD|0xFE): FitEnumFile {
        return new FitEnumFile(
            value,
            "mfg_range_min - mfg_range_max",
            "0xF7 - 0xFE reserved for manufacturer specific file types",
        );
    }

}

export class FitFileIdTypeFieldDefinition extends FitFieldDefinition implements FitFileIdTypeField {

    readonly __field = "field";
    readonly __fileIdField = "fileIdField";
    readonly __fileIdTypeField = "fileIdTypeField";

    constructor()
    constructor(size: number, baseType: InstanceType<typeof FitBaseType>)
    constructor(size: number = 1, baseType: InstanceType<typeof FitBaseType> = FitEnum) {
        super(FitFileIdMessage, 0, size, baseType);
    }

}
