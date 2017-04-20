// Auto-generated. Do not edit!

// (in-package nautonomous_operation_action_client.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Status = require('./Status.js');

//-----------------------------------------------------------

class MissionResult {
  constructor() {
    this.result = new Status();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type MissionResult
    // Serialize message field [result]
    bufferInfo = Status.serialize(obj.result, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type MissionResult
    let tmp;
    let len;
    let data = new MissionResult();
    // Deserialize message field [result]
    tmp = Status.deserialize(buffer);
    data.result = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'nautonomous_operation_action_client/MissionResult';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '29de6035fbc9d023c26dc25b0812707a';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======
    #result definition
    nautonomous_operation_action_client/Status result
    
    ================================================================================
    MSG: nautonomous_operation_action_client/Status
    int32 progression
    string status
    `;
  }

};

module.exports = MissionResult;