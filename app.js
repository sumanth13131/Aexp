const si = require("systeminformation");
const info = require("diskusage");
const os = require("os");
let path = os.platform() === "win32" ? "c:" : "/";

const run = async () => {
  //Memory Details
  console.log("Memory Details :");
  let ram = await si.mem();
  console.log(
    "total Ram : " + (ram.total / 1024 / 1024 / 1000).toFixed(2) + "GB"
  );
  console.log(
    "Used Ram : " + (ram.used / 1024 / 1024 / 1000).toFixed(2) + "GB"
  );
  console.log(
    "Free Ram : " + (ram.free / 1024 / 1024 / 1000).toFixed(2) + "GB"
  );
  // Disk Usage
  console.log("Disk Usage :");
  let disk = await info.check(path);
  console.log(
    "Total Disk : " + (disk.total / 1024 / 1024 / 1000).toFixed(2) + "GB"
  );
  console.log(
    "Available Disk : " +
      (disk.available / 1024 / 1024 / 1000).toFixed(2) +
      "GB"
  );
};

run();
