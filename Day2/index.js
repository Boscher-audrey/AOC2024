const fs = require("fs");

// Part 1
fs.readFile("input.txt", (err, data) => {
  if (err) throw err;

  const input = data.toString();
  const reports = input.split("\r\n");

  const safeReports = reports.filter((report) => {
    const levels = report.split(" ");

    const isSorted = (safeLevels) => {
      let isAscending = true;
      let isDescending = true;

      for (let i = 1; i < safeLevels.length; i++) {
        // I forgot to parseInt level value, took me hours to figure out why I've got wrong answer..
        if (parseInt(safeLevels[i]) <= parseInt(safeLevels[i - 1]))
          isAscending = false;
        if (parseInt(safeLevels[i]) >= parseInt(safeLevels[i - 1]))
          isDescending = false;
      }

      return isAscending || isDescending;
    };

    const isInSafeRange = (arr) => {
      for (let i = 1; i < arr.length; i++) {
        const diff = Math.abs(arr[i] - arr[i - 1]);
        if (diff < 1 || diff > 3) return false;
      }
      return true;
    };

    return isSorted(levels) && isInSafeRange(levels);
  });

  console.log(safeReports.length);
});
