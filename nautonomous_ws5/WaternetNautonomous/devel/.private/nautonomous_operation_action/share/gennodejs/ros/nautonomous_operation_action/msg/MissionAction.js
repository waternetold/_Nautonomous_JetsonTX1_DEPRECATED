// Auto-generated. Do not edit!

// (in-package nautonomous_operation_action.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let MissionActionGoal = require('./MissionActionGoal.js');
let MissionActionResult = require('./MissionActionResult.js');
let MissionActionFeedback = require('./MissionActionFeedback.js');

//-----------------------------------------------------------

class MissionAction {
  constructor() {
    this.action_goal = new MissionActionGoal();
    this.action_result = new MissionActionResult();
    this.action_feedback = new MissionActionFeedback();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type MissionAction
    // Serialize message field [action_goal]
    bufferInfo = MissionActionGoal.serialize(obj.action_goal, bufferInfo);
    // Serialize message field [action_result]
    bufferInfo = MissionActionResult.serialize(obj.action_result, bufferInfo);
    // Serialize message field [action_feedback]
    bufferInfo = MissionActionFeedback.serialize(obj.action_feedback, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type MissionAction
    let tmp;
    let len;
    let data = new MissionAction();
    // Deserialize message field [action_goal]
    tmp = MissionActionGoal.deserialize(buffer);
    data.action_goal = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [action_result]
    tmp = MissionActionResult.deserialize(buffer);
    data.action_result = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [action_feedback]
    tmp = MissionActionFeedback.deserialize(buffer);
    data.action_feedback = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'nautonomous_operation_action/MissionAction';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'd97c3fdfaf18d81a13fa0793c9cc32ee';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======
    
    MissionActionGoal action_goal
    MissionActionResult action_result
    MissionActionFeedback action_feedback
    
    ================================================================================
    MSG: nautonomous_operation_action/MissionActionGoal
    # ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======
    
    Header header
    actionlib_msgs/GoalID goal_id
    MissionGoal goal
    
    ================================================================================
    MSG: std_msgs/Header
    # Standard metadata for higher-level stamped data types.
    # This is generally used to communicate timestamped data 
    # in a particular coordinate frame.
    # 
    # sequence ID: consecutively increasing ID 
    uint32 seq
    #Two-integer timestamp that is expressed as:
    # * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')
    # * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')
    # time-handling sugar is provided by the client library
    time stamp
    #Frame this data is associated with
    # 0: no frame
    # 1: global frame
    string frame_id
    
    ================================================================================
    MSG: actionlib_msgs/GoalID
    # The stamp should store the time at which this goal was requested.
    # It is used by an action server when it tries to preempt all
    # goals that were requested before a certain time
    time stamp
    
    # The id provides a way to associate feedback and
    # result message with specific goal requests. The id
    # specified must be unique.
    string id
    
    
    ================================================================================
    MSG: nautonomous_operation_action/MissionGoal
    # ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======
    #goal definition
    nautonomous_operation_action/Operation operation
    
    ================================================================================
    MSG: nautonomous_operation_action/Operation
    Header header
    string message_type
    geometry_msgs/Point[] path
    geometry_msgs/Quaternion[] orientations
    
    ================================================================================
    MSG: geometry_msgs/Point
    # This contains the position of a point in free space
    float64 x
    float64 y
    float64 z
    
    ================================================================================
    MSG: geometry_msgs/Quaternion
    # This represents an orientation in free space in quaternion form.
    
    float64 x
    float64 y
    float64 z
    float64 w
    
    ================================================================================
    MSG: nautonomous_operation_action/MissionActionResult
    # ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======
    
    Header header
    actionlib_msgs/GoalStatus status
    MissionResult result
    
    ================================================================================
    MSG: actionlib_msgs/GoalStatus
    GoalID goal_id
    uint8 status
    uint8 PENDING         = 0   # The goal has yet to be processed by the action server
    uint8 ACTIVE          = 1   # The goal is currently being processed by the action server
    uint8 PREEMPTED       = 2   # The goal received a cancel request after it started executing
                                #   and has since completed its execution (Terminal State)
    uint8 SUCCEEDED       = 3   # The goal was achieved successfully by the action server (Terminal State)
    uint8 ABORTED         = 4   # The goal was aborted during execution by the action server due
                                #    to some failure (Terminal State)
    uint8 REJECTED        = 5   # The goal was rejected by the action server without being processed,
                                #    because the goal was unattainable or invalid (Terminal State)
    uint8 PREEMPTING      = 6   # The goal received a cancel request after it started executing
                                #    and has not yet completed execution
    uint8 RECALLING       = 7   # The goal received a cancel request before it started executing,
                                #    but the action server has not yet confirmed that the goal is canceled
    uint8 RECALLED        = 8   # The goal received a cancel request before it started executing
                                #    and was successfully cancelled (Terminal State)
    uint8 LOST            = 9   # An action client can determine that a goal is LOST. This should not be
                                #    sent over the wire by an action server
    
    #Allow for the user to associate a string with GoalStatus for debugging
    string text
    
    
    ================================================================================
    MSG: nautonomous_operation_action/MissionResult
    # ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======
    #result definition
    nautonomous_operation_action/Status result
    
    ================================================================================
    MSG: nautonomous_operation_action/Status
    int32 progression
    string status
    ================================================================================
    MSG: nautonomous_operation_action/MissionActionFeedback
    # ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======
    
    Header header
    actionlib_msgs/GoalStatus status
    MissionFeedback feedback
    
    ================================================================================
    MSG: nautonomous_operation_action/MissionFeedback
    # ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======
    #feedback
    nautonomous_operation_action/Status feedback
    
    `;
  }

};

module.exports = MissionAction;