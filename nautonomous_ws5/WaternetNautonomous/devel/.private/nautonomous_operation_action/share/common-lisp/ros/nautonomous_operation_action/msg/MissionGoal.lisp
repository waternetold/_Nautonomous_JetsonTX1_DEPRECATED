; Auto-generated. Do not edit!


(cl:in-package nautonomous_operation_action-msg)


;//! \htmlinclude MissionGoal.msg.html

(cl:defclass <MissionGoal> (roslisp-msg-protocol:ros-message)
  ((operation
    :reader operation
    :initarg :operation
    :type nautonomous_operation_action-msg:Operation
    :initform (cl:make-instance 'nautonomous_operation_action-msg:Operation)))
)

(cl:defclass MissionGoal (<MissionGoal>)
  ())

(cl:defmethod cl:initialize-instance :after ((m <MissionGoal>) cl:&rest args)
  (cl:declare (cl:ignorable args))
  (cl:unless (cl:typep m 'MissionGoal)
    (roslisp-msg-protocol:msg-deprecation-warning "using old message class name nautonomous_operation_action-msg:<MissionGoal> is deprecated: use nautonomous_operation_action-msg:MissionGoal instead.")))

(cl:ensure-generic-function 'operation-val :lambda-list '(m))
(cl:defmethod operation-val ((m <MissionGoal>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader nautonomous_operation_action-msg:operation-val is deprecated.  Use nautonomous_operation_action-msg:operation instead.")
  (operation m))
(cl:defmethod roslisp-msg-protocol:serialize ((msg <MissionGoal>) ostream)
  "Serializes a message object of type '<MissionGoal>"
  (roslisp-msg-protocol:serialize (cl:slot-value msg 'operation) ostream)
)
(cl:defmethod roslisp-msg-protocol:deserialize ((msg <MissionGoal>) istream)
  "Deserializes a message object of type '<MissionGoal>"
  (roslisp-msg-protocol:deserialize (cl:slot-value msg 'operation) istream)
  msg
)
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql '<MissionGoal>)))
  "Returns string type for a message object of type '<MissionGoal>"
  "nautonomous_operation_action/MissionGoal")
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql 'MissionGoal)))
  "Returns string type for a message object of type 'MissionGoal"
  "nautonomous_operation_action/MissionGoal")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql '<MissionGoal>)))
  "Returns md5sum for a message object of type '<MissionGoal>"
  "5c1f1055fe6971d891d48af78fd4de68")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql 'MissionGoal)))
  "Returns md5sum for a message object of type 'MissionGoal"
  "5c1f1055fe6971d891d48af78fd4de68")
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql '<MissionGoal>)))
  "Returns full string definition for message of type '<MissionGoal>"
  (cl:format cl:nil "# ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======~%#goal definition~%nautonomous_operation_action/Operation operation~%~%================================================================================~%MSG: nautonomous_operation_action/Operation~%Header header~%string message_type~%geometry_msgs/Point[] path~%geometry_msgs/Quaternion[] orientations~%~%================================================================================~%MSG: std_msgs/Header~%# Standard metadata for higher-level stamped data types.~%# This is generally used to communicate timestamped data ~%# in a particular coordinate frame.~%# ~%# sequence ID: consecutively increasing ID ~%uint32 seq~%#Two-integer timestamp that is expressed as:~%# * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')~%# * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')~%# time-handling sugar is provided by the client library~%time stamp~%#Frame this data is associated with~%# 0: no frame~%# 1: global frame~%string frame_id~%~%================================================================================~%MSG: geometry_msgs/Point~%# This contains the position of a point in free space~%float64 x~%float64 y~%float64 z~%~%================================================================================~%MSG: geometry_msgs/Quaternion~%# This represents an orientation in free space in quaternion form.~%~%float64 x~%float64 y~%float64 z~%float64 w~%~%~%"))
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql 'MissionGoal)))
  "Returns full string definition for message of type 'MissionGoal"
  (cl:format cl:nil "# ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======~%#goal definition~%nautonomous_operation_action/Operation operation~%~%================================================================================~%MSG: nautonomous_operation_action/Operation~%Header header~%string message_type~%geometry_msgs/Point[] path~%geometry_msgs/Quaternion[] orientations~%~%================================================================================~%MSG: std_msgs/Header~%# Standard metadata for higher-level stamped data types.~%# This is generally used to communicate timestamped data ~%# in a particular coordinate frame.~%# ~%# sequence ID: consecutively increasing ID ~%uint32 seq~%#Two-integer timestamp that is expressed as:~%# * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')~%# * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')~%# time-handling sugar is provided by the client library~%time stamp~%#Frame this data is associated with~%# 0: no frame~%# 1: global frame~%string frame_id~%~%================================================================================~%MSG: geometry_msgs/Point~%# This contains the position of a point in free space~%float64 x~%float64 y~%float64 z~%~%================================================================================~%MSG: geometry_msgs/Quaternion~%# This represents an orientation in free space in quaternion form.~%~%float64 x~%float64 y~%float64 z~%float64 w~%~%~%"))
(cl:defmethod roslisp-msg-protocol:serialization-length ((msg <MissionGoal>))
  (cl:+ 0
     (roslisp-msg-protocol:serialization-length (cl:slot-value msg 'operation))
))
(cl:defmethod roslisp-msg-protocol:ros-message-to-list ((msg <MissionGoal>))
  "Converts a ROS message object to a list"
  (cl:list 'MissionGoal
    (cl:cons ':operation (operation msg))
))