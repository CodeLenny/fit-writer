import FitField from "../FitField";
import FitFieldDefinition from "../FitFieldDefinition";
import FitBaseType from "../FitBaseType";
import FitFileIdMessage from "./FitFileIdMessage";
import FitUint16 from "../baseType/FitUint16";
import { FitEnumManufacturerGarmin, FitEnumManufacturerGarminFr405Antfs, FitEnumManufacturerZephyr,
    FitEnumManufacturerDayton, FitEnumManufacturerIDT, FitEnumManufacturerSRM, FitEnumManufacturerQuarq,
    FitEnumManufacturerIBike, FitEnumManufacturerSaris, FitEnumManufacturerSparkHK, FitEnumManufacturerTanita,
    FitEnumManufacturerEchowell, FitEnumManufacturerDynastream, FitEnumManufacturerDynastreamOEM,
    FitEnumManufacturerNautilus, FitEnumManufacturerTimex, FitEnumManufacturerMetriGear, FitEnumManufacturerXelic,
    FitEnumManufacturerBeurer, FitEnumManufacturerCardioSport, FitEnumManufacturerAandD, FitEnumManufacturerHMM,
    FitEnumManufacturerSuunto, FitEnumManufacturerThitaElektronik, FitEnumManufacturerGPULSE,
    FitEnumManufacturerCleanMobile, FitEnumManufacturerPedalBrain, FitEnumManufacturerSaxonar,
    FitEnumManufacturerLemondFitness, FitEnumManufacturerDexcom, FitEnumManufacturerWahooFitness,
    FitEnumManufacturerOctaneFitness, FitEnumManufacturerArchinoetics, FitEnumManufacturerTheHurtBox,
    FitEnumManufacturerCitizenSystems, FitEnumManufacturerMagellan, FitEnumManufacturerOsynce,
    FitEnumManufacturerHolux, FitEnumManufacturerConcept2, FitEnumManufacturerOneGiantLeap,
    FitEnumManufacturerAceSensors, FitEnumManufacturerBrimBrothers, FitEnumManufacturerXplova,
    FitEnumManufacturerPerceptionDigital, FitEnumManufacturerBf1systems, FitEnumManufacturerPioneer,
    FitEnumManufacturerSpantec, FitEnumManufacturerMetalogics, FitEnumManufacturer4iiiis,
    FitEnumManufacturerSeikoEpson, FitEnumManufacturerSeikoEpsonOem, FitEnumManufacturerIforPowell,
    FitEnumManufacturerMaxwellGuider, FitEnumManufacturerStarTrac, FitEnumManufacturerBreakaway,
    FitEnumManufacturerAlatechTechnologyLtd, FitEnumManufacturerMioTechnologyEurope, FitEnumManufacturerRotor,
    FitEnumManufacturerGeonaute, FitEnumManufacturerIdBike, FitEnumManufacturerSpecialized, FitEnumManufacturerWtek,
    FitEnumManufacturerPhysicalEnterprises, FitEnumManufacturerNorthPoleEngineering, FitEnumManufacturerBkool,
    FitEnumManufacturerCateye, FitEnumManufacturerStagesCycling, FitEnumManufacturerSigmaSport,
    FitEnumManufacturerTomTom, FitEnumManufacturerPeriPedal, FitEnumManufacturerWattbike, FitEnumManufacturerMoxy,
    FitEnumManufacturerCiclosport, FitEnumManufacturerPowerbahn, FitEnumManufacturerAcornProjectsAPS,
    FitEnumManufacturerLifebeam, FitEnumManufacturerBontrager, FitEnumManufacturerWellgo, FitEnumManufacturerScosche,
    FitEnumManufacturerMagura, FitEnumManufacturerWoodway, FitEnumManufacturerElite,
    FitEnumManufacturerNielsenKellerman, FitEnumManufacturerDkCity, FitEnumManufacturerTacx,
    FitEnumManufacturerDirectionTechnology, FitEnumManufacturerMagtonic, FitEnumManufacturer1PartCarbon,
    FitEnumManufacturerInsideRideTechnologies, FitEnumManufacturerSoundOfMotion, FitEnumManufacturerStryd,
    FitEnumManufacturerICG, FitEnumManufacturerMiPulse, FitEnumManufacturerBsxAthletics, FitEnumManufacturerLook,
    FitEnumManufacturerCampagnoloSRL, FitEnumManufacturerBodyBikeSmart, FitEnumManufacturerPraxisWorks,
    FitEnumManufacturerLimitsTechnology, FitEnumManufacturerTopActionTechnology, FitEnumManufacturerCosinuss,
    FitEnumManufacturerFitcare, FitEnumManufacturerMagene, FitEnumManufacturerGiantManufacturingCo,
    FitEnumManufacturerTigrasport, FitEnumManufacturerSalutron, FitEnumManufacturerTechnogym,
    FitEnumManufacturerBrytonSensors, FitEnumManufacturerLatitudeLimited, FitEnumManufacturerSoaringTechnology,
    FitEnumManufacturerIgpsport, FitEnumManufacturerThinkRider, FitEnumManufacturerGopherSport,
    FitEnumManufacturerWaterRower, FitEnumManufacturerOrangeTheory, FitEnumManufacturerInPeak,
    FitEnumManufacturerKinetic, FitEnumManufacturerJohnsonHealthTech, FitEnumManufacturerPolarElectro,
    FitEnumManufacturerSeeSense, FitEnumManufacturerNCITechnology, FitEnumManufacturerIqsquare,
    FitEnumManufacturerDevelopment, FitEnumManufacturerHealthAndLife, FitEnumManufacturerLezyne,
    FitEnumManufacturerScribeLabs, FitEnumManufacturerZwift, FitEnumManufacturerWatteam, FitEnumManufacturerRecon,
    FitEnumManufacturerFaveroElectronics, FitEnumManufacturerDynovelo, FitEnumManufacturerStrava,
    FitEnumManufacturerPrecor, FitEnumManufacturerBryton, FitEnumManufacturerSRAM, FitEnumManufacturerNavman,
    FitEnumManufacturerCOBI, FitEnumManufacturerSpivi, FitEnumManufacturerMioMagellan, FitEnumManufacturerEveSports,
    FitEnumManufacturerSensitivusGauge, FitEnumManufacturerPodoon, FitEnumManufacturerLifeTimeFitness,
    FitEnumManufacturerFalcoEMotors, FitEnumManufacturerMinoura, FitEnumManufacturerCycliq,
    FitEnumManufacturerLuxottica, FitEnumManufacturerTrainerRoad, FitEnumManufacturerTheSufferfest,
    FitEnumManufacturerFullSpeedAhead, FitEnumManufacturerVirtualTraining, FitEnumManufacturerFeedbackSports,
    FitEnumManufacturerOmata, FitEnumManufacturerVDO, FitEnumManufacturerMagneticDays, FitEnumManufacturerHammerhead,
    FitEnumManufacturerKineticByKurt, FitEnumManufacturerShapeLog, FitEnumManufacturerDabuziduo,
    FitEnumManufacturerJetBlack, FitEnumManufacturerCoros, FitEnumManufacturerVirtugo, FitEnumManufacturerVelosense,
    FitEnumManufacturerCycligentInc, FitEnumManufacturerTrailforks, FitEnumManufacturerActiGraphCorp} from "../data/FitEnumManufacturer";

export default class FitFileIdManufacturerField implements FitField {

    readonly __field = "field";
    readonly __fileIdManufacturerField = "fileIdManufacturerField";

    static createDefinition(): FitFileIdManufacturerFieldDefinition
    static createDefinition(size: number, baseType: InstanceType<typeof FitBaseType>): FitFileIdManufacturerFieldDefinition
    static createDefinition(size: number = 2, baseType: InstanceType<typeof FitBaseType> = FitUint16) {
        return new FitFileIdManufacturerFieldDefinition(size, baseType);
    }

    static garmin(): FitEnumManufacturerGarmin {
        return new FitEnumManufacturerGarmin();
    }

    static garmin_fr405_antfs(): FitEnumManufacturerGarminFr405Antfs {
        return new FitEnumManufacturerGarminFr405Antfs();
    }

    static zephyr(): FitEnumManufacturerZephyr {
        return new FitEnumManufacturerZephyr();
    }

    static dayton(): FitEnumManufacturerDayton {
        return new FitEnumManufacturerDayton();
    }

    static idt(): FitEnumManufacturerIDT {
        return new FitEnumManufacturerIDT();
    }

    static srm(): FitEnumManufacturerSRM {
        return new FitEnumManufacturerSRM();
    }

    static quarq(): FitEnumManufacturerQuarq {
        return new FitEnumManufacturerQuarq();
    }

    static ibike(): FitEnumManufacturerIBike {
        return new FitEnumManufacturerIBike();
    }

    static saris(): FitEnumManufacturerSaris {
        return new FitEnumManufacturerSaris();
    }

    static spark_hk(): FitEnumManufacturerSparkHK {
        return new FitEnumManufacturerSparkHK();
    }

    static tanita(): FitEnumManufacturerTanita {
        return new FitEnumManufacturerTanita();
    }

    static echowell(): FitEnumManufacturerEchowell {
        return new FitEnumManufacturerEchowell();
    }

    static dynastream_oem(): FitEnumManufacturerDynastreamOEM {
        return new FitEnumManufacturerDynastreamOEM();
    }

    static nautilus(): FitEnumManufacturerNautilus {
        return new FitEnumManufacturerNautilus();
    }

    static dynastream(): FitEnumManufacturerDynastream {
        return new FitEnumManufacturerDynastream();
    }

    static timex(): FitEnumManufacturerTimex {
        return new FitEnumManufacturerTimex();
    }

    static metrigear(): FitEnumManufacturerMetriGear {
        return new FitEnumManufacturerMetriGear();
    }

    static xelic(): FitEnumManufacturerXelic {
        return new FitEnumManufacturerXelic();
    }

    static beurer(): FitEnumManufacturerBeurer {
        return new FitEnumManufacturerBeurer();
    }

    static cardiosport(): FitEnumManufacturerCardioSport {
        return new FitEnumManufacturerCardioSport();
    }

    static a_and_d(): FitEnumManufacturerAandD {
        return new FitEnumManufacturerAandD();
    }

    static hmm(): FitEnumManufacturerHMM {
        return new FitEnumManufacturerHMM();
    }

    static suunto(): FitEnumManufacturerSuunto {
        return new FitEnumManufacturerSuunto();
    }

    static thita_elektronik(): FitEnumManufacturerThitaElektronik {
        return new FitEnumManufacturerThitaElektronik();
    }

    static gpulse(): FitEnumManufacturerGPULSE {
        return new FitEnumManufacturerGPULSE();
    }

    static clean_mobile(): FitEnumManufacturerCleanMobile {
        return new FitEnumManufacturerCleanMobile();
    }

    static pedal_brain(): FitEnumManufacturerPedalBrain {
        return new FitEnumManufacturerPedalBrain();
    }

    static saxonar(): FitEnumManufacturerSaxonar {
        return new FitEnumManufacturerSaxonar();
    }

    static lemond_fitness(): FitEnumManufacturerLemondFitness {
        return new FitEnumManufacturerLemondFitness();
    }

    static dexcom(): FitEnumManufacturerDexcom {
        return new FitEnumManufacturerDexcom();
    }

    static wahoo_fitness(): FitEnumManufacturerWahooFitness {
        return new FitEnumManufacturerWahooFitness();
    }

    static octane_fitness(): FitEnumManufacturerOctaneFitness {
        return new FitEnumManufacturerOctaneFitness();
    }

    static archinoetics(): FitEnumManufacturerArchinoetics {
        return new FitEnumManufacturerArchinoetics();
    }

    static the_hurt_box(): FitEnumManufacturerTheHurtBox {
        return new FitEnumManufacturerTheHurtBox();
    }

    static citizen_systems(): FitEnumManufacturerCitizenSystems {
        return new FitEnumManufacturerCitizenSystems();
    }

    static magellan(): FitEnumManufacturerMagellan {
        return new FitEnumManufacturerMagellan();
    }

    static osynce(): FitEnumManufacturerOsynce {
        return new FitEnumManufacturerOsynce();
    }

    static holux(): FitEnumManufacturerHolux {
        return new FitEnumManufacturerHolux();
    }

    static concept2(): FitEnumManufacturerConcept2 {
        return new FitEnumManufacturerConcept2();
    }

    static one_giant_leap(): FitEnumManufacturerOneGiantLeap {
        return new FitEnumManufacturerOneGiantLeap();
    }

    static ace_sensors(): FitEnumManufacturerAceSensors {
        return new FitEnumManufacturerAceSensors();
    }

    static brim_brothers(): FitEnumManufacturerBrimBrothers {
        return new FitEnumManufacturerBrimBrothers();
    }

    static xplova(): FitEnumManufacturerXplova {
        return new FitEnumManufacturerXplova();
    }

    static perception_digital(): FitEnumManufacturerPerceptionDigital {
        return new FitEnumManufacturerPerceptionDigital();
    }

    static bf1systems(): FitEnumManufacturerBf1systems {
        return new FitEnumManufacturerBf1systems();
    }

    static pioneer(): FitEnumManufacturerPioneer {
        return new FitEnumManufacturerPioneer();
    }

    static spantec(): FitEnumManufacturerSpantec {
        return new FitEnumManufacturerSpantec();
    }

    static metalogics(): FitEnumManufacturerMetalogics {
        return new FitEnumManufacturerMetalogics();
    }

    static ["4iiiis"](): FitEnumManufacturer4iiiis {
        return new FitEnumManufacturer4iiiis();
    }

    static seiko_epson(): FitEnumManufacturerSeikoEpson {
        return new FitEnumManufacturerSeikoEpson();
    }

    static seiko_epson_oem(): FitEnumManufacturerSeikoEpsonOem {
        return new FitEnumManufacturerSeikoEpsonOem();
    }

    static ifor_powell(): FitEnumManufacturerIforPowell {
        return new FitEnumManufacturerIforPowell();
    }

    static maxwell_guider(): FitEnumManufacturerMaxwellGuider {
        return new FitEnumManufacturerMaxwellGuider();
    }

    static star_trac(): FitEnumManufacturerStarTrac {
        return new FitEnumManufacturerStarTrac();
    }

    static breakaway(): FitEnumManufacturerBreakaway {
        return new FitEnumManufacturerBreakaway();
    }

    static alatech_technology_ltd(): FitEnumManufacturerAlatechTechnologyLtd {
        return new FitEnumManufacturerAlatechTechnologyLtd();
    }

    static mio_technology_europe(): FitEnumManufacturerMioTechnologyEurope {
        return new FitEnumManufacturerMioTechnologyEurope();
    }

    static rotor(): FitEnumManufacturerRotor {
        return new FitEnumManufacturerRotor();
    }

    static geonaute(): FitEnumManufacturerGeonaute {
        return new FitEnumManufacturerGeonaute();
    }

    static id_bike(): FitEnumManufacturerIdBike {
        return new FitEnumManufacturerIdBike();
    }

    static specialized(): FitEnumManufacturerSpecialized {
        return new FitEnumManufacturerSpecialized();
    }

    static wtek(): FitEnumManufacturerWtek {
        return new FitEnumManufacturerWtek();
    }

    static physical_enterprises(): FitEnumManufacturerPhysicalEnterprises {
        return new FitEnumManufacturerPhysicalEnterprises();
    }

    static north_pole_engineering(): FitEnumManufacturerNorthPoleEngineering {
        return new FitEnumManufacturerNorthPoleEngineering();
    }

    static bkool(): FitEnumManufacturerBkool {
        return new FitEnumManufacturerBkool();
    }

    static cateye(): FitEnumManufacturerCateye {
        return new FitEnumManufacturerCateye();
    }

    static stages_cycling(): FitEnumManufacturerStagesCycling {
        return new FitEnumManufacturerStagesCycling();
    }

    static sigmasport(): FitEnumManufacturerSigmaSport {
        return new FitEnumManufacturerSigmaSport();
    }

    static tomtom(): FitEnumManufacturerTomTom {
        return new FitEnumManufacturerTomTom();
    }

    static peripedal(): FitEnumManufacturerPeriPedal {
        return new FitEnumManufacturerPeriPedal();
    }

    static wattbike(): FitEnumManufacturerWattbike {
        return new FitEnumManufacturerWattbike();
    }

    static moxy(): FitEnumManufacturerMoxy {
        return new FitEnumManufacturerMoxy();
    }

    static ciclosport(): FitEnumManufacturerCiclosport {
        return new FitEnumManufacturerCiclosport();
    }

    static powerbahn(): FitEnumManufacturerPowerbahn {
        return new FitEnumManufacturerPowerbahn();
    }

    static acorn_projects_aps(): FitEnumManufacturerAcornProjectsAPS {
        return new FitEnumManufacturerAcornProjectsAPS();
    }

    static lifebeam(): FitEnumManufacturerLifebeam {
        return new FitEnumManufacturerLifebeam();
    }

    static bontrager(): FitEnumManufacturerBontrager {
        return new FitEnumManufacturerBontrager();
    }

    static wellgo(): FitEnumManufacturerWellgo {
        return new FitEnumManufacturerWellgo();
    }

    static scosche(): FitEnumManufacturerScosche {
        return new FitEnumManufacturerScosche();
    }

    static magura(): FitEnumManufacturerMagura {
        return new FitEnumManufacturerMagura();
    }

    static woodway(): FitEnumManufacturerWoodway {
        return new FitEnumManufacturerWoodway();
    }

    static elite(): FitEnumManufacturerElite {
        return new FitEnumManufacturerElite();
    }

    static nielsen_kellerman(): FitEnumManufacturerNielsenKellerman {
        return new FitEnumManufacturerNielsenKellerman();
    }

    static dk_city(): FitEnumManufacturerDkCity {
        return new FitEnumManufacturerDkCity();
    }

    static tacx(): FitEnumManufacturerTacx {
        return new FitEnumManufacturerTacx();
    }

    static direction_technology(): FitEnumManufacturerDirectionTechnology {
        return new FitEnumManufacturerDirectionTechnology();
    }

    static magtonic(): FitEnumManufacturerMagtonic {
        return new FitEnumManufacturerMagtonic();
    }

    static ["1partcarbon"](): FitEnumManufacturer1PartCarbon {
        return new FitEnumManufacturer1PartCarbon();
    }

    static inside_ride_technologies(): FitEnumManufacturerInsideRideTechnologies {
        return new FitEnumManufacturerInsideRideTechnologies();
    }

    static sound_of_motion(): FitEnumManufacturerSoundOfMotion {
        return new FitEnumManufacturerSoundOfMotion();
    }

    static stryd(): FitEnumManufacturerStryd {
        return new FitEnumManufacturerStryd();
    }

    static icd(): FitEnumManufacturerICG {
        return new FitEnumManufacturerICG();
    }

    static MiPulse(): FitEnumManufacturerMiPulse {
        return new FitEnumManufacturerMiPulse();
    }

    static bsx_athletics(): FitEnumManufacturerBsxAthletics {
        return new FitEnumManufacturerBsxAthletics();
    }

    static look(): FitEnumManufacturerLook {
        return new FitEnumManufacturerLook();
    }

    static campagnolo_srl(): FitEnumManufacturerCampagnoloSRL {
        return new FitEnumManufacturerCampagnoloSRL();
    }

    static body_bike_smart(): FitEnumManufacturerBodyBikeSmart {
        return new FitEnumManufacturerBodyBikeSmart();
    }

    static praxisworks(): FitEnumManufacturerPraxisWorks {
        return new FitEnumManufacturerPraxisWorks();
    }

    static limits_technology(): FitEnumManufacturerLimitsTechnology {
        return new FitEnumManufacturerLimitsTechnology();
    }

    static topaction_technology(): FitEnumManufacturerTopActionTechnology {
        return new FitEnumManufacturerTopActionTechnology();
    }

    static cosinuss(): FitEnumManufacturerCosinuss {
        return new FitEnumManufacturerCosinuss();
    }

    static fitcare(): FitEnumManufacturerFitcare {
        return new FitEnumManufacturerFitcare();
    }

    static magene(): FitEnumManufacturerMagene {
        return new FitEnumManufacturerMagene();
    }

    static giant_manufacturing_co(): FitEnumManufacturerGiantManufacturingCo {
        return new FitEnumManufacturerGiantManufacturingCo();
    }

    static tigrasport(): FitEnumManufacturerTigrasport {
        return new FitEnumManufacturerTigrasport();
    }

    static salutron(): FitEnumManufacturerSalutron {
        return new FitEnumManufacturerSalutron();
    }

    static technogym(): FitEnumManufacturerTechnogym {
        return new FitEnumManufacturerTechnogym();
    }

    static bryton_sensors(): FitEnumManufacturerBrytonSensors {
        return new FitEnumManufacturerBrytonSensors();
    }

    static latitude_limited(): FitEnumManufacturerLatitudeLimited {
        return new FitEnumManufacturerLatitudeLimited();
    }

    static soaring_technology(): FitEnumManufacturerSoaringTechnology {
        return new FitEnumManufacturerSoaringTechnology();
    }

    static igpsport(): FitEnumManufacturerIgpsport {
        return new FitEnumManufacturerIgpsport();
    }

    static thinkrider(): FitEnumManufacturerThinkRider {
        return new FitEnumManufacturerThinkRider();
    }

    static gopher_sport(): FitEnumManufacturerGopherSport {
        return new FitEnumManufacturerGopherSport();
    }

    static waterrower(): FitEnumManufacturerWaterRower {
        return new FitEnumManufacturerWaterRower();
    }

    static orangetheory(): FitEnumManufacturerOrangeTheory {
        return new FitEnumManufacturerOrangeTheory();
    }

    static inpeak(): FitEnumManufacturerInPeak {
        return new FitEnumManufacturerInPeak();
    }

    static kinetic(): FitEnumManufacturerKinetic {
        return new FitEnumManufacturerKinetic();
    }

    static johnson_health_inc(): FitEnumManufacturerJohnsonHealthTech {
        return new FitEnumManufacturerJohnsonHealthTech();
    }

    static polar_electro(): FitEnumManufacturerPolarElectro {
        return new FitEnumManufacturerPolarElectro();
    }

    static seesense(): FitEnumManufacturerSeeSense {
        return new FitEnumManufacturerSeeSense();
    }

    static nci_technology(): FitEnumManufacturerNCITechnology {
        return new FitEnumManufacturerNCITechnology();
    }

    static iqsquare(): FitEnumManufacturerIqsquare {
        return new FitEnumManufacturerIqsquare();
    }

    static development(): FitEnumManufacturerDevelopment {
        return new FitEnumManufacturerDevelopment();
    }

    static healthandlife(): FitEnumManufacturerHealthAndLife {
        return new FitEnumManufacturerHealthAndLife();
    }

    static lezyne(): FitEnumManufacturerLezyne {
        return new FitEnumManufacturerLezyne();
    }

    static scribe_labs(): FitEnumManufacturerScribeLabs {
        return new FitEnumManufacturerScribeLabs();
    }

    static zwift(): FitEnumManufacturerZwift {
        return new FitEnumManufacturerZwift();
    }

    static watteam(): FitEnumManufacturerWatteam {
        return new FitEnumManufacturerWatteam();
    }

    static recon(): FitEnumManufacturerRecon {
        return new FitEnumManufacturerRecon();
    }

    static favero_electronics(): FitEnumManufacturerFaveroElectronics {
        return new FitEnumManufacturerFaveroElectronics();
    }

    static dynovelo(): FitEnumManufacturerDynovelo {
        return new FitEnumManufacturerDynovelo();
    }

    static strava(): FitEnumManufacturerStrava {
        return new FitEnumManufacturerStrava();
    }

    static precor(): FitEnumManufacturerPrecor {
        return new FitEnumManufacturerPrecor();
    }

    static bryton(): FitEnumManufacturerBryton {
        return new FitEnumManufacturerBryton();
    }

    static sram(): FitEnumManufacturerSRAM {
        return new FitEnumManufacturerSRAM();
    }

    static navman(): FitEnumManufacturerNavman {
        return new FitEnumManufacturerNavman();
    }

    static cobi(): FitEnumManufacturerCOBI {
        return new FitEnumManufacturerCOBI();
    }

    static spivi(): FitEnumManufacturerSpivi {
        return new FitEnumManufacturerSpivi();
    }

    static mio_magellan(): FitEnumManufacturerMioMagellan {
        return new FitEnumManufacturerMioMagellan();
    }

    static evesports(): FitEnumManufacturerEveSports {
        return new FitEnumManufacturerEveSports();
    }

    static sensitivus_gauge(): FitEnumManufacturerSensitivusGauge {
        return new FitEnumManufacturerSensitivusGauge();
    }

    static podoon(): FitEnumManufacturerPodoon {
        return new FitEnumManufacturerPodoon();
    }

    static life_time_fitness(): FitEnumManufacturerLifeTimeFitness {
        return new FitEnumManufacturerLifeTimeFitness();
    }

    static falco_e_motors(): FitEnumManufacturerFalcoEMotors {
        return new FitEnumManufacturerFalcoEMotors();
    }

    static minoura(): FitEnumManufacturerMinoura {
        return new FitEnumManufacturerMinoura();
    }

    static cycliq(): FitEnumManufacturerCycliq {
        return new FitEnumManufacturerCycliq();
    }

    static luxottica(): FitEnumManufacturerLuxottica {
        return new FitEnumManufacturerLuxottica();
    }

    static trainer_road(): FitEnumManufacturerTrainerRoad {
        return new FitEnumManufacturerTrainerRoad();
    }

    static the_sufferfest(): FitEnumManufacturerTheSufferfest {
        return new FitEnumManufacturerTheSufferfest();
    }

    static fullspeedahead(): FitEnumManufacturerFullSpeedAhead {
        return new FitEnumManufacturerFullSpeedAhead();
    }

    static virtualtraining(): FitEnumManufacturerVirtualTraining {
        return new FitEnumManufacturerVirtualTraining();
    }

    static feedbacksports(): FitEnumManufacturerFeedbackSports {
        return new FitEnumManufacturerFeedbackSports();
    }

    static omata(): FitEnumManufacturerOmata {
        return new FitEnumManufacturerOmata();
    }

    static vdo(): FitEnumManufacturerVDO {
        return new FitEnumManufacturerVDO();
    }

    static magneticdays(): FitEnumManufacturerMagneticDays {
        return new FitEnumManufacturerMagneticDays();
    }

    static hammerhead(): FitEnumManufacturerHammerhead {
        return new FitEnumManufacturerHammerhead();
    }

    static kinetic_by_kurt(): FitEnumManufacturerKineticByKurt {
        return new FitEnumManufacturerKineticByKurt();
    }

    static shapelog(): FitEnumManufacturerShapeLog {
        return new FitEnumManufacturerShapeLog();
    }

    static dabuziduo(): FitEnumManufacturerDabuziduo {
        return new FitEnumManufacturerDabuziduo();
    }

    static jetblack(): FitEnumManufacturerJetBlack {
        return new FitEnumManufacturerJetBlack();
    }

    static coros(): FitEnumManufacturerCoros {
        return new FitEnumManufacturerCoros();
    }

    static virtugo(): FitEnumManufacturerVirtugo {
        return new FitEnumManufacturerVirtugo();
    }

    static velosense(): FitEnumManufacturerVelosense {
        return new FitEnumManufacturerVelosense();
    }

    static cycligentinc(): FitEnumManufacturerCycligentInc {
        return new FitEnumManufacturerCycligentInc();
    }

    static trailforks(): FitEnumManufacturerTrailforks {
        return new FitEnumManufacturerTrailforks();
    }

    static actigraphcorp(): FitEnumManufacturerActiGraphCorp {
        return new FitEnumManufacturerActiGraphCorp();
    }

}

export class FitFileIdManufacturerFieldDefinition extends FitFieldDefinition implements FitFileIdManufacturerField {

    readonly __field = "field";
    readonly __fileIdManufacturerField = "fileIdManufacturerField";

    constructor()
    constructor(size: number, baseType: InstanceType<typeof FitBaseType>)
    constructor(size: number = 2, baseType: InstanceType<typeof FitBaseType> = FitUint16) {
        super(FitFileIdMessage, 1, size, baseType);
    }

}
