
"use strict";

let ADSBVehicle = require('./ADSBVehicle.js');
let PlayTuneV2 = require('./PlayTuneV2.js');
let EstimatorStatus = require('./EstimatorStatus.js');
let BatteryStatus = require('./BatteryStatus.js');
let ESCTelemetry = require('./ESCTelemetry.js');
let Tunnel = require('./Tunnel.js');
let ParamValue = require('./ParamValue.js');
let WheelOdomStamped = require('./WheelOdomStamped.js');
let MountControl = require('./MountControl.js');
let VehicleInfo = require('./VehicleInfo.js');
let GlobalPositionTarget = require('./GlobalPositionTarget.js');
let AttitudeTarget = require('./AttitudeTarget.js');
let DebugValue = require('./DebugValue.js');
let Vibration = require('./Vibration.js');
let RCOut = require('./RCOut.js');
let ActuatorControl = require('./ActuatorControl.js');
let FileEntry = require('./FileEntry.js');
let OverrideRCIn = require('./OverrideRCIn.js');
let ManualControl = require('./ManualControl.js');
let HilGPS = require('./HilGPS.js');
let HilActuatorControls = require('./HilActuatorControls.js');
let CameraImageCaptured = require('./CameraImageCaptured.js');
let ESCStatusItem = require('./ESCStatusItem.js');
let RadioStatus = require('./RadioStatus.js');
let ExtendedState = require('./ExtendedState.js');
let CommandCode = require('./CommandCode.js');
let OnboardComputerStatus = require('./OnboardComputerStatus.js');
let ESCInfoItem = require('./ESCInfoItem.js');
let WaypointList = require('./WaypointList.js');
let State = require('./State.js');
let GPSINPUT = require('./GPSINPUT.js');
let LogData = require('./LogData.js');
let Mavlink = require('./Mavlink.js');
let ESCTelemetryItem = require('./ESCTelemetryItem.js');
let LogEntry = require('./LogEntry.js');
let Thrust = require('./Thrust.js');
let StatusText = require('./StatusText.js');
let Trajectory = require('./Trajectory.js');
let Altitude = require('./Altitude.js');
let NavControllerOutput = require('./NavControllerOutput.js');
let GPSRAW = require('./GPSRAW.js');
let ESCInfo = require('./ESCInfo.js');
let PositionTarget = require('./PositionTarget.js');
let WaypointReached = require('./WaypointReached.js');
let Waypoint = require('./Waypoint.js');
let CompanionProcessStatus = require('./CompanionProcessStatus.js');
let LandingTarget = require('./LandingTarget.js');
let CamIMUStamp = require('./CamIMUStamp.js');
let TimesyncStatus = require('./TimesyncStatus.js');
let HilControls = require('./HilControls.js');
let CellularStatus = require('./CellularStatus.js');
let HomePosition = require('./HomePosition.js');
let ESCStatus = require('./ESCStatus.js');
let RTCM = require('./RTCM.js');
let RCIn = require('./RCIn.js');
let RTKBaseline = require('./RTKBaseline.js');
let HilStateQuaternion = require('./HilStateQuaternion.js');
let GPSRTK = require('./GPSRTK.js');
let TerrainReport = require('./TerrainReport.js');
let VFR_HUD = require('./VFR_HUD.js');
let MagnetometerReporter = require('./MagnetometerReporter.js');
let Param = require('./Param.js');
let HilSensor = require('./HilSensor.js');
let OpticalFlowRad = require('./OpticalFlowRad.js');

module.exports = {
  ADSBVehicle: ADSBVehicle,
  PlayTuneV2: PlayTuneV2,
  EstimatorStatus: EstimatorStatus,
  BatteryStatus: BatteryStatus,
  ESCTelemetry: ESCTelemetry,
  Tunnel: Tunnel,
  ParamValue: ParamValue,
  WheelOdomStamped: WheelOdomStamped,
  MountControl: MountControl,
  VehicleInfo: VehicleInfo,
  GlobalPositionTarget: GlobalPositionTarget,
  AttitudeTarget: AttitudeTarget,
  DebugValue: DebugValue,
  Vibration: Vibration,
  RCOut: RCOut,
  ActuatorControl: ActuatorControl,
  FileEntry: FileEntry,
  OverrideRCIn: OverrideRCIn,
  ManualControl: ManualControl,
  HilGPS: HilGPS,
  HilActuatorControls: HilActuatorControls,
  CameraImageCaptured: CameraImageCaptured,
  ESCStatusItem: ESCStatusItem,
  RadioStatus: RadioStatus,
  ExtendedState: ExtendedState,
  CommandCode: CommandCode,
  OnboardComputerStatus: OnboardComputerStatus,
  ESCInfoItem: ESCInfoItem,
  WaypointList: WaypointList,
  State: State,
  GPSINPUT: GPSINPUT,
  LogData: LogData,
  Mavlink: Mavlink,
  ESCTelemetryItem: ESCTelemetryItem,
  LogEntry: LogEntry,
  Thrust: Thrust,
  StatusText: StatusText,
  Trajectory: Trajectory,
  Altitude: Altitude,
  NavControllerOutput: NavControllerOutput,
  GPSRAW: GPSRAW,
  ESCInfo: ESCInfo,
  PositionTarget: PositionTarget,
  WaypointReached: WaypointReached,
  Waypoint: Waypoint,
  CompanionProcessStatus: CompanionProcessStatus,
  LandingTarget: LandingTarget,
  CamIMUStamp: CamIMUStamp,
  TimesyncStatus: TimesyncStatus,
  HilControls: HilControls,
  CellularStatus: CellularStatus,
  HomePosition: HomePosition,
  ESCStatus: ESCStatus,
  RTCM: RTCM,
  RCIn: RCIn,
  RTKBaseline: RTKBaseline,
  HilStateQuaternion: HilStateQuaternion,
  GPSRTK: GPSRTK,
  TerrainReport: TerrainReport,
  VFR_HUD: VFR_HUD,
  MagnetometerReporter: MagnetometerReporter,
  Param: Param,
  HilSensor: HilSensor,
  OpticalFlowRad: OpticalFlowRad,
};
