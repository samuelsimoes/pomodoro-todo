angular.module("DurationFilter", []).filter("duration", function () {
  return function (duration) {
    if (!duration) { return "00:00"; }

    var secNum = parseInt(duration, 10),
        hours = Math.floor(secNum / 3600),
        minutes = parseInt((Math.floor(secNum - (hours * 3600)) / 60), 10),
        seconds = secNum - (hours * 3600) - (minutes * 60);

    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }

    var time = minutes + ":" + seconds;

    return time;
  };
});
