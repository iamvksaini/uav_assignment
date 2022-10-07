
"use strict";

let SetMavFrame = require('./SetMavFrame.js')
let WaypointClear = require('./WaypointClear.js')
let StreamRate = require('./StreamRate.js')
let WaypointPush = require('./WaypointPush.js')
let WaypointPull = require('./WaypointPull.js')
let FileTruncate = require('./FileTruncate.js')
let CommandInt = require('./CommandInt.js')
let LogRequestList = require('./LogRequestList.js')
let CommandTOL = require('./CommandTOL.js')
let FileOpen = require('./FileOpen.js')
let ParamGet = require('./ParamGet.js')
let MountConfigure = require('./MountConfigure.js')
let FileWrite = require('./FileWrite.js')
let CommandLong = require('./CommandLong.js')
let ParamPush = require('./ParamPush.js')
let CommandTriggerControl = require('./CommandTriggerControl.js')
let FileRemove = require('./FileRemove.js')
let FileClose = require('./FileClose.js')
let FileMakeDir = require('./FileMakeDir.js')
let CommandHome = require('./CommandHome.js')
let ParamPull = require('./ParamPull.js')
let FileChecksum = require('./FileChecksum.js')
let LogRequestData = require('./LogRequestData.js')
let SetMode = require('./SetMode.js')
let CommandVtolTransition = require('./CommandVtolTransition.js')
let FileRemoveDir = require('./FileRemoveDir.js')
let CommandBool = require('./CommandBool.js')
let VehicleInfoGet = require('./VehicleInfoGet.js')
let LogRequestEnd = require('./LogRequestEnd.js')
let FileRead = require('./FileRead.js')
let FileList = require('./FileList.js')
let FileRename = require('./FileRename.js')
let ParamSet = require('./ParamSet.js')
let MessageInterval = require('./MessageInterval.js')
let CommandTriggerInterval = require('./CommandTriggerInterval.js')
let CommandAck = require('./CommandAck.js')
let WaypointSetCurrent = require('./WaypointSetCurrent.js')

module.exports = {
  SetMavFrame: SetMavFrame,
  WaypointClear: WaypointClear,
  StreamRate: StreamRate,
  WaypointPush: WaypointPush,
  WaypointPull: WaypointPull,
  FileTruncate: FileTruncate,
  CommandInt: CommandInt,
  LogRequestList: LogRequestList,
  CommandTOL: CommandTOL,
  FileOpen: FileOpen,
  ParamGet: ParamGet,
  MountConfigure: MountConfigure,
  FileWrite: FileWrite,
  CommandLong: CommandLong,
  ParamPush: ParamPush,
  CommandTriggerControl: CommandTriggerControl,
  FileRemove: FileRemove,
  FileClose: FileClose,
  FileMakeDir: FileMakeDir,
  CommandHome: CommandHome,
  ParamPull: ParamPull,
  FileChecksum: FileChecksum,
  LogRequestData: LogRequestData,
  SetMode: SetMode,
  CommandVtolTransition: CommandVtolTransition,
  FileRemoveDir: FileRemoveDir,
  CommandBool: CommandBool,
  VehicleInfoGet: VehicleInfoGet,
  LogRequestEnd: LogRequestEnd,
  FileRead: FileRead,
  FileList: FileList,
  FileRename: FileRename,
  ParamSet: ParamSet,
  MessageInterval: MessageInterval,
  CommandTriggerInterval: CommandTriggerInterval,
  CommandAck: CommandAck,
  WaypointSetCurrent: WaypointSetCurrent,
};
