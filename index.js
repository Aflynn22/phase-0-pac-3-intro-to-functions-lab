function shout(string) {
    return string.toUpperCase();
  }  

  function whisper(string) {
    return string.toLowerCase();
  }

  function logshout(string) {
    return string.toUpperCase();
  }
  function logShout(str){
    console.log(str.toUpperCase());
  } 
  function logWhisper(str){
    console.log(str.toLowerCase());
  }
  function sayHiToHeadphonedRoommate (aStr) {
    const cantUnswer = "I can't hear you!";
    const yesUnswer = "YES INDEED!";
    const lovUnswer = "I would love to!";
    if (aStr.toLowerCase(aStr) === aStr) {
      return cantUnswer;
    }
    else if (aStr.toUpperCase(aStr) === aStr) {
      return yesUnswer;
    }
    else if ("Let's have dinner together!" === aStr) {
      return lovUnswer;
    }
  }