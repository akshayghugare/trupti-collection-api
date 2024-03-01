function sendResponse(res, status,message,data, err = null) {
  if (err) {
    res.status(status).json({
      code:status,
      status: status > 199 && status < 299 ?true:false,
      data: err,
      message:message
    });
  } else {
    res.status(status).json({
      code:status,
      status: status > 199 && status < 299 ?true:false,
      data,
      message:message
    });
  }
}

module.exports.sendResponse = sendResponse;