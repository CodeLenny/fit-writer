import FitEnum from "./FitEnum";
import FitFileIdManufacturerField from "../file_id/FitFileIdManufacturerField";

type Fields = FitFileIdManufacturerField;

/**
 * The manufacturer enumeration.
 */
export default class FitEnumManufacturer extends FitEnum {

    private readonly __enum_manufacturer = "manufacturer";
    readonly __fileIdManufacturerField = "fileIdManufacturerField";

}

export class FitEnumManufacturerGarmin extends FitEnumManufacturer implements Fields {

    constructor() {
        super(1, "garmin");
    }

}

export class FitEnumManufacturerGarminFr405Antfs extends FitEnumManufacturer implements Fields {

    constructor() {
        super(2, "garmin_fr405_antfs", "Do not use.  Used by FR405 for ANTFS man id.");
    }

}

export class FitEnumManufacturerZephyr extends FitEnumManufacturer implements Fields {

    constructor() {
        super(3, "zephyr");
    }

}

export class FitEnumManufacturerDayton extends FitEnumManufacturer implements Fields {

    constructor() {
        super(4, "dayton");
    }

}

export class FitEnumManufacturerIDT extends FitEnumManufacturer implements Fields {

    constructor() {
        super(5, "idt");
    }

}

export class FitEnumManufacturerSRM extends FitEnumManufacturer implements Fields {

    constructor() {
        super(6, "srm");
    }

}

export class FitEnumManufacturerQuarq extends FitEnumManufacturer implements Fields {

    constructor() {
        super(7, "quarq");
    }

}

export class FitEnumManufacturerIBike extends FitEnumManufacturer implements Fields {

    constructor() {
        super(8, "ibike");
    }

}

export class FitEnumManufacturerSaris extends FitEnumManufacturer implements Fields {

    constructor() {
        super(9, "saris");
    }

}

export class FitEnumManufacturerSparkHK extends FitEnumManufacturer implements Fields {

    constructor() {
        super(10, "spark_hk");
    }

}

export class FitEnumManufacturerTanita extends FitEnumManufacturer implements Fields {

    constructor() {
        super(11, "tanita");
    }

}

export class FitEnumManufacturerEchowell extends FitEnumManufacturer implements Fields {

    constructor() {
        super(12, "echowell");
    }

}

export class FitEnumManufacturerDynastreamOEM extends FitEnumManufacturer implements Fields {

    constructor() {
        super(13, "dynastream_oem");
    }

}

export class FitEnumManufacturerNautilus extends FitEnumManufacturer implements Fields {

    constructor() {
        super(14, "nautilus");
    }

}

export class FitEnumManufacturerDynastream extends FitEnumManufacturer implements Fields {

    constructor() {
        super(15, "dynastream");
    }

}

export class FitEnumManufacturerTimex extends FitEnumManufacturer implements Fields {

    constructor() {
        super(16, "timex");
    }

}

export class FitEnumManufacturerMetriGear extends FitEnumManufacturer implements Fields {

    constructor() {
        super(17, "metrigear");
    }

}

export class FitEnumManufacturerXelic extends FitEnumManufacturer implements Fields {

    constructor() {
        super(18, "xelic");
    }

}

export class FitEnumManufacturerBeurer extends FitEnumManufacturer implements Fields {

    constructor() {
        super(19, "beurer");
    }

}

export class FitEnumManufacturerCardioSport extends FitEnumManufacturer implements Fields {

    constructor() {
        super(20, "cardiosport");
    }

}

export class FitEnumManufacturerAandD extends FitEnumManufacturer implements Fields {

    constructor() {
        super(21, "a_and_d");
    }

}

export class FitEnumManufacturerHMM extends FitEnumManufacturer implements Fields {

    constructor() {
        super(22, "hmm");
    }

}

export class FitEnumManufacturerSuunto extends FitEnumManufacturer implements Fields {

    constructor() {
        super(23, "suunto");
    }

}

export class FitEnumManufacturerThitaElektronik extends FitEnumManufacturer implements Fields {

    constructor() {
        super(24, "thita_elektronik");
    }

}

export class FitEnumManufacturerGPULSE extends FitEnumManufacturer implements Fields {

    constructor() {
        super(25, "gpulse");
    }

}

export class FitEnumManufacturerCleanMobile extends FitEnumManufacturer implements Fields {

    constructor() {
        super(26, "clean_mobile");
    }

}

export class FitEnumManufacturerPedalBrain extends FitEnumManufacturer implements Fields {

    constructor() {
        super(27, "pedal_brain");
    }

}

export class FitEnumManufacturerPeaksware extends FitEnumManufacturer implements Fields {

    constructor() {
        super(28, "peaksware");
    }

}

export class FitEnumManufacturerSaxonar extends FitEnumManufacturer implements Fields {

    constructor() {
        super(29, "saxonar");
    }

}

export class FitEnumManufacturerLemondFitness extends FitEnumManufacturer implements Fields {

    constructor() {
        super(30, "lemond_fitness");
    }

}

export class FitEnumManufacturerDexcom extends FitEnumManufacturer implements Fields {

    constructor() {
        super(31, "dexcom");
    }

}

export class FitEnumManufacturerWahooFitness extends FitEnumManufacturer implements Fields {

    constructor() {
        super(32, "wahoo_fitness");
    }

}

export class FitEnumManufacturerOctaneFitness extends FitEnumManufacturer implements Fields {

    constructor() {
        super(33, "octane_fitness");
    }

}

export class FitEnumManufacturerArchinoetics extends FitEnumManufacturer implements Fields {

    constructor() {
        super(34, "archinoetics");
    }

}

export class FitEnumManufacturerTheHurtBox extends FitEnumManufacturer implements Fields {

    constructor() {
        super(35, "the_hurt_box");
    }

}

export class FitEnumManufacturerCitizenSystems extends FitEnumManufacturer implements Fields {

    constructor() {
        super(36, "citizen_systems");
    }

}

export class FitEnumManufacturerMagellan extends FitEnumManufacturer implements Fields {

    constructor() {
        super(37, "magellan");
    }

}

export class FitEnumManufacturerOsynce extends FitEnumManufacturer implements Fields {

    constructor() {
        super(38, "osynce");
    }

}

export class FitEnumManufacturerHolux extends FitEnumManufacturer implements Fields {

    constructor() {
        super(39, "holux");
    }

}

export class FitEnumManufacturerConcept2 extends FitEnumManufacturer implements Fields {

    constructor() {
        super(40, "concept2");
    }

}

export class FitEnumManufacturerOneGiantLeap extends FitEnumManufacturer implements Fields {

    constructor() {
        super(42, "one_giant_leap");
    }

}

export class FitEnumManufacturerAceSensors extends FitEnumManufacturer implements Fields {

    constructor() {
        super(43, "ace_sensor");
    }

}

export class FitEnumManufacturerBrimBrothers extends FitEnumManufacturer implements Fields {

    constructor() {
        super(44, "brim_brothers");
    }

}

export class FitEnumManufacturerXplova extends FitEnumManufacturer implements Fields {

    constructor() {
        super(45, "xplova");
    }

}

export class FitEnumManufacturerPerceptionDigital extends FitEnumManufacturer implements Fields {

    constructor() {
        super(46, "perception_digital");
    }

}

export class FitEnumManufacturerBf1systems extends FitEnumManufacturer implements Fields {

    constructor() {
        super(47, "bf1systems");
    }

}

export class FitEnumManufacturerPioneer extends FitEnumManufacturer implements Fields {

    constructor() {
        super(48, "pioneer");
    }

}

export class FitEnumManufacturerSpantec extends FitEnumManufacturer implements Fields {

    constructor() {
        super(49, "spantec");
    }

}

export class FitEnumManufacturerMetalogics extends FitEnumManufacturer implements Fields {

    constructor() {
        super(50, "metalogics");
    }

}

export class FitEnumManufacturer4iiiis extends FitEnumManufacturer implements Fields {

    constructor() {
        super(51, "4iiiis");
    }

}

export class FitEnumManufacturerSeikoEpson extends FitEnumManufacturer implements Fields {

    constructor() {
        super(52, "seiko_epson");
    }

}

export class FitEnumManufacturerSeikoEpsonOem extends FitEnumManufacturer implements Fields {

    constructor() {
        super(53, "seiko_epson_oem");
    }

}

export class FitEnumManufacturerIforPowell extends FitEnumManufacturer implements Fields {

    constructor() {
        super(54, "ifor_powell");
    }

}

export class FitEnumManufacturerMaxwellGuider extends FitEnumManufacturer implements Fields {

    constructor() {
        super(55, "maxwell_guider");
    }

}

export class FitEnumManufacturerStarTrac extends FitEnumManufacturer implements Fields {

    constructor() {
        super(56, "star_trac");
    }

}

export class FitEnumManufacturerBreakaway extends FitEnumManufacturer implements Fields {

    constructor() {
        super(57, "breakaway");
    }

}

export class FitEnumManufacturerAlatechTechnologyLtd extends FitEnumManufacturer implements Fields {

    constructor() {
        super(58, "alatech_technology_ltd");
    }

}

export class FitEnumManufacturerMioTechnologyEurope extends FitEnumManufacturer implements Fields {

    constructor() {
        super(59, "mio_technology_europe");
    }

}

export class FitEnumManufacturerRotor extends FitEnumManufacturer implements Fields {

    constructor() {
        super(60, "rotor");
    }

}

export class FitEnumManufacturerGeonaute extends FitEnumManufacturer implements Fields {

    constructor() {
        super(61, "geonaute");
    }

}

export class FitEnumManufacturerIdBike extends FitEnumManufacturer implements Fields {

    constructor() {
        super(62, "id_bike");
    }

}

export class FitEnumManufacturerSpecialized extends FitEnumManufacturer implements Fields {

    constructor() {
        super(63, "specialized");
    }

}

export class FitEnumManufacturerWtek extends FitEnumManufacturer implements Fields {

    constructor() {
        super(64, "wtek");
    }

}

export class FitEnumManufacturerPhysicalEnterprises extends FitEnumManufacturer implements Fields {

    constructor() {
        super(65, "physical_enterprises");
    }

}

export class FitEnumManufacturerNorthPoleEngineering extends FitEnumManufacturer implements Fields {

    constructor() {
        super(66, "north_pole_engineering");
    }

}

export class FitEnumManufacturerBkool extends FitEnumManufacturer implements Fields {

    constructor() {
        super(67, "bkool");
    }

}

export class FitEnumManufacturerCateye extends FitEnumManufacturer implements Fields {

    constructor() {
        super(68, "cateye");
    }

}

export class FitEnumManufacturerStagesCycling extends FitEnumManufacturer implements Fields {

    constructor() {
        super(69, "stages_cycling");
    }

}

export class FitEnumManufacturerSigmaSport extends FitEnumManufacturer implements Fields {

    constructor() {
        super(70, "sigmasport");
    }

}

export class FitEnumManufacturerTomTom extends FitEnumManufacturer implements Fields {

    constructor() {
        super(71, "tomtom");
    }

}

export class FitEnumManufacturerPeriPedal extends FitEnumManufacturer implements Fields {

    constructor() {
        super(72, "peripedal");
    }

}

export class FitEnumManufacturerWattbike extends FitEnumManufacturer implements Fields {

    constructor() {
        super(73, "wattbike");
    }

}

export class FitEnumManufacturerMoxy extends FitEnumManufacturer implements Fields {

    constructor() {
        super(76, "moxy");
    }

}

export class FitEnumManufacturerCiclosport extends FitEnumManufacturer implements Fields {

    constructor() {
        super(77, "ciclosport");
    }

}

export class FitEnumManufacturerPowerbahn extends FitEnumManufacturer implements Fields {

    constructor() {
        super(78, "powerbahn");
    }

}

export class FitEnumManufacturerAcornProjectsAPS extends FitEnumManufacturer implements Fields {

    constructor() {
        super(79, "acorn_projects_aps");
    }

}

export class FitEnumManufacturerLifebeam extends FitEnumManufacturer implements Fields {

    constructor() {
        super(80, "lifebeam");
    }

}

export class FitEnumManufacturerBontrager extends FitEnumManufacturer implements Fields {

    constructor() {
        super(81, "bontrager");
    }

}

export class FitEnumManufacturerWellgo extends FitEnumManufacturer implements Fields {

    constructor() {
        super(82, "wellgo");
    }

}

export class FitEnumManufacturerScosche extends FitEnumManufacturer implements Fields {

    constructor() {
        super(83, "scoshe");
    }

}

export class FitEnumManufacturerMagura extends FitEnumManufacturer implements Fields {

    constructor() {
        super(84, "magura");
    }

}

export class FitEnumManufacturerWoodway extends FitEnumManufacturer implements Fields {

    constructor() {
        super(85, "woodway");
    }

}

export class FitEnumManufacturerElite extends FitEnumManufacturer implements Fields {

    constructor() {
        super(86, "elite");
    }

}

export class FitEnumManufacturerNielsenKellerman extends FitEnumManufacturer implements Fields {

    constructor() {
        super(87, "nielsen_kellerman");
    }

}

export class FitEnumManufacturerDkCity extends FitEnumManufacturer implements Fields {

    constructor() {
        super(88, "dk_city");
    }

}

export class FitEnumManufacturerTacx extends FitEnumManufacturer implements Fields {

    constructor() {
        super(89, "tacx");
    }

}

export class FitEnumManufacturerDirectionTechnology extends FitEnumManufacturer implements Fields {

    constructor() {
        super(90, "direction_technology");
    }

}

export class FitEnumManufacturerMagtonic extends FitEnumManufacturer implements Fields {

    constructor() {
        super(91, "magtonic");
    }

}

export class FitEnumManufacturer1PartCarbon extends FitEnumManufacturer implements Fields {

    constructor() {
        super(92, "1partcarbon");
    }

}

export class FitEnumManufacturerInsideRideTechnologies extends FitEnumManufacturer implements Fields {

    constructor() {
        super(93, "inside_ride_technologies");
    }

}

export class FitEnumManufacturerSoundOfMotion extends FitEnumManufacturer implements Fields {

    constructor() {
        super(94, "sound_of_motion");
    }

}

export class FitEnumManufacturerStryd extends FitEnumManufacturer implements Fields {

    constructor() {
        super(95, "stryd");
    }

}

export class FitEnumManufacturerICG extends FitEnumManufacturer implements Fields {

    constructor() {
        super(96, "icd", "Indoorcycling Group");
    }

}

export class FitEnumManufacturerMiPulse extends FitEnumManufacturer implements Fields {

    constructor() {
        super(97, "MiPulse");
    }

}

export class FitEnumManufacturerBsxAthletics extends FitEnumManufacturer implements Fields {

    constructor() {
        super(98, "bsx_athletics");
    }

}

export class FitEnumManufacturerLook extends FitEnumManufacturer implements Fields {

    constructor() {
        super(99, "look");
    }

}

export class FitEnumManufacturerCampagnoloSRL extends FitEnumManufacturer implements Fields {

    constructor() {
        super(100, "campagnolo_srl");
    }

}

export class FitEnumManufacturerBodyBikeSmart extends FitEnumManufacturer implements Fields {

    constructor() {
        super(101, "body_bike_smart");
    }

}

export class FitEnumManufacturerPraxisWorks extends FitEnumManufacturer implements Fields {

    constructor() {
        super(102, "praxisworks");
    }

}

export class FitEnumManufacturerLimitsTechnology extends FitEnumManufacturer implements Fields {

    constructor() {
        super(103, "limits_technology", "Limits Technology Ltd.");
    }

}

export class FitEnumManufacturerTopActionTechnology extends FitEnumManufacturer implements Fields {

    constructor() {
        super(104, "topaction_technology", "TopAction Technology Inc.");
    }

}

export class FitEnumManufacturerCosinuss extends FitEnumManufacturer implements Fields {

    constructor() {
        super(105, "cosinuss");
    }

}

export class FitEnumManufacturerFitcare extends FitEnumManufacturer implements Fields {

    constructor() {
        super(106, "fitcare");
    }

}

export class FitEnumManufacturerMagene extends FitEnumManufacturer implements Fields {

    constructor() {
        super(107, "magene");
    }

}

export class FitEnumManufacturerGiantManufacturingCo extends FitEnumManufacturer implements Fields {

    constructor() {
        super(108, "giant_manufacturing_co");
    }

}

export class FitEnumManufacturerTigrasport extends FitEnumManufacturer implements Fields {

    constructor() {
        super(109, "tigrasport", "Tigrasport");
    }

}

export class FitEnumManufacturerSalutron extends FitEnumManufacturer implements Fields {

    constructor() {
        super(110, "salutron");
    }

}

export class FitEnumManufacturerTechnogym extends FitEnumManufacturer implements Fields {

    constructor() {
        super(111, "technogym");
    }

}

export class FitEnumManufacturerBrytonSensors extends FitEnumManufacturer implements Fields {

    constructor() {
        super(112, "bryton_sensors");
    }

}

export class FitEnumManufacturerLatitudeLimited extends FitEnumManufacturer implements Fields {

    constructor() {
        super(113, "latitude_limiited");
    }

}

export class FitEnumManufacturerSoaringTechnology extends FitEnumManufacturer implements Fields {

    constructor() {
        super(114, "soaring_technology");
    }

}


export class FitEnumManufacturerIgpsport extends FitEnumManufacturer implements Fields {

    constructor() {
        super(115, "igpsport");
    }

}

export class FitEnumManufacturerThinkRider extends FitEnumManufacturer implements Fields {

    constructor() {
        super(116, "thinkrider");
    }

}

export class FitEnumManufacturerGopherSport extends FitEnumManufacturer implements Fields {

    constructor() {
        super(117, "gopher_sport");
    }

}

export class FitEnumManufacturerWaterRower extends FitEnumManufacturer implements Fields {

    constructor() {
        super(118, "waterrower");
    }

}

export class FitEnumManufacturerOrangeTheory extends FitEnumManufacturer implements Fields {

    constructor() {
        super(119, "orangetheory");
    }

}

export class FitEnumManufacturerInPeak extends FitEnumManufacturer implements Fields {

    constructor() {
        super(120, "inpeak");
    }

}

export class FitEnumManufacturerKinetic extends FitEnumManufacturer implements Fields {

    constructor() {
        super(121, "kinetic");
    }

}

export class FitEnumManufacturerJohnsonHealthTech extends FitEnumManufacturer implements Fields {

    constructor() {
        super(122, "johnson_health_tech");
    }

}

export class FitEnumManufacturerPolarElectro extends FitEnumManufacturer implements Fields {

    constructor() {
        super(123, "polar_electro");
    }

}

export class FitEnumManufacturerSeeSense extends FitEnumManufacturer implements Fields {

    constructor() {
        super(124, "seesense");
    }

}

export class FitEnumManufacturerNCITechnology extends FitEnumManufacturer implements Fields {

    constructor() {
        super(125, "nci_technology");
    }

}

export class FitEnumManufacturerIqsquare extends FitEnumManufacturer implements Fields {

    constructor() {
        super(126, "iqsquare");
    }

}

export class FitEnumManufacturerDevelopment extends FitEnumManufacturer implements Fields {

    constructor() {
        super(255, "development");
    }

}

export class FitEnumManufacturerHealthAndLife extends FitEnumManufacturer implements Fields {

    constructor() {
        super(257, "healthandlife");
    }

}

export class FitEnumManufacturerLezyne extends FitEnumManufacturer implements Fields {

    constructor() {
        super(258, "lezyne");
    }

}

export class FitEnumManufacturerScribeLabs extends FitEnumManufacturer implements Fields {

    constructor() {
        super(259, "scribe_labs");
    }

}

export class FitEnumManufacturerZwift extends FitEnumManufacturer implements Fields {

    constructor() {
        super(260, "zwift");
    }

}

export class FitEnumManufacturerWatteam extends FitEnumManufacturer implements Fields {

    constructor() {
        super(261, "watteam");
    }

}

export class FitEnumManufacturerRecon extends FitEnumManufacturer implements Fields {

    constructor() {
        super(262, "recon");
    }

}

export class FitEnumManufacturerFaveroElectronics extends FitEnumManufacturer implements Fields {

    constructor() {
        super(263, "favero_electronics");
    }

}

export class FitEnumManufacturerDynovelo extends FitEnumManufacturer implements Fields {

    constructor() {
        super(264, "dynovelo");
    }

}

export class FitEnumManufacturerStrava extends FitEnumManufacturer implements Fields {

    constructor() {
        super(265, "strava");
    }

}

export class FitEnumManufacturerPrecor extends FitEnumManufacturer implements Fields {

    constructor() {
        super(266, "precor", "Amer Sports");
    }

}

export class FitEnumManufacturerBryton extends FitEnumManufacturer implements Fields {

    constructor() {
        super(267, "bryton");
    }

}

export class FitEnumManufacturerSRAM extends FitEnumManufacturer implements Fields {

    constructor() {
        super(268, "sram");
    }

}

export class FitEnumManufacturerNavman extends FitEnumManufacturer implements Fields {

    constructor() {
        super(269, "navman", "MiTAC Global Corporation (Mio Technology)");
    }

}

export class FitEnumManufacturerCOBI extends FitEnumManufacturer implements Fields {

    constructor() {
        super(270, "cobi", "COBI GmbH");
    }

}

export class FitEnumManufacturerSpivi extends FitEnumManufacturer implements Fields {

    constructor() {
        super(271, "spivi");
    }

}

export class FitEnumManufacturerMioMagellan extends FitEnumManufacturer implements Fields {

    constructor() {
        super(272, "mio_magellan");
    }

}

export class FitEnumManufacturerEveSports extends FitEnumManufacturer implements Fields {

    constructor() {
        super(273, "evesports");
    }

}

export class FitEnumManufacturerSensitivusGauge extends FitEnumManufacturer implements Fields {

    constructor() {
        super(274, "sensitivus_gauge");
    }

}

export class FitEnumManufacturerPodoon extends FitEnumManufacturer implements Fields {

    constructor() {
        super(275, "podoon");
    }

}

export class FitEnumManufacturerLifeTimeFitness extends FitEnumManufacturer implements Fields {

    constructor() {
        super(276, "life_time_fitness");
    }

}

export class FitEnumManufacturerFalcoEMotors extends FitEnumManufacturer implements Fields {

    constructor() {
        super(277, "falco_e_motors", "Falco eMotors Inc.");
    }

}

export class FitEnumManufacturerMinoura extends FitEnumManufacturer implements Fields {

    constructor() {
        super(278, "minoura");
    }

}

export class FitEnumManufacturerCycliq extends FitEnumManufacturer implements Fields {

    constructor() {
        super(279, "cycliq");
    }

}

export class FitEnumManufacturerLuxottica extends FitEnumManufacturer implements Fields {

    constructor() {
        super(280, "luxottica");
    }

}

export class FitEnumManufacturerTrainerRoad extends FitEnumManufacturer implements Fields {

    constructor() {
        super(281, "trainer_road");
    }

}

export class FitEnumManufacturerTheSufferfest extends FitEnumManufacturer implements Fields {

    constructor() {
        super(282, "the_sufferfest");
    }

}

export class FitEnumManufacturerFullSpeedAhead extends FitEnumManufacturer implements Fields {

    constructor() {
        super(283, "fullspeedahead");
    }

}

export class FitEnumManufacturerVirtualTraining extends FitEnumManufacturer implements Fields {

    constructor() {
        super(284, "virtualtraining");
    }

}

export class FitEnumManufacturerFeedbackSports extends FitEnumManufacturer implements Fields {

    constructor() {
        super(285, "feedbacksports");
    }

}

export class FitEnumManufacturerOmata extends FitEnumManufacturer implements Fields {

    constructor() {
        super(286, "omata");
    }

}

export class FitEnumManufacturerVDO extends FitEnumManufacturer implements Fields {

    constructor() {
        super(287, "vdo");
    }

}

export class FitEnumManufacturerMagneticDays extends FitEnumManufacturer implements Fields {

    constructor() {
        super(288, "magneticdays");
    }

}

export class FitEnumManufacturerHammerhead extends FitEnumManufacturer implements Fields {

    constructor() {
        super(289, "hammerhead");
    }

}

export class FitEnumManufacturerKineticByKurt extends FitEnumManufacturer implements Fields {

    constructor() {
        super(290, "kinetic_by_kurt");
    }

}

export class FitEnumManufacturerShapeLog extends FitEnumManufacturer implements Fields {

    constructor() {
        super(291, "shapelog");
    }

}

export class FitEnumManufacturerDabuziduo extends FitEnumManufacturer implements Fields {

    constructor() {
        super(292, "dabuziduo");
    }

}

export class FitEnumManufacturerJetBlack extends FitEnumManufacturer implements Fields {

    constructor() {
        super(293, "jetblack");
    }

}

export class FitEnumManufacturerCoros extends FitEnumManufacturer implements Fields {

    constructor() {
        super(294, "coros");
    }

}

export class FitEnumManufacturerVirtugo extends FitEnumManufacturer implements Fields {

    constructor() {
        super(295, "virtugo");
    }

}

export class FitEnumManufacturerVelosense extends FitEnumManufacturer implements Fields {

    constructor() {
        super(296, "velosense");
    }

}

export class FitEnumManufacturerCycligentInc extends FitEnumManufacturer implements Fields {

    constructor() {
        super(297, "cycligentinc");
    }

}

export class FitEnumManufacturerTrailforks extends FitEnumManufacturer implements Fields {

    constructor() {
        super(298, "trailforks");
    }

}

export class FitEnumManufacturerActiGraphCorp extends FitEnumManufacturer implements Fields {

    constructor() {
        super(5759, "actigraphcorp");
    }

}
