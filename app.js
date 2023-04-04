function calCurrency() {
    let x = document.getElementById("curSelect").value;
    let y = parseFloat(document.getElementById("val").value);
    y = y.toFixed(2);
    console.log(x);
    console.log(y);
    switch (x) {
      case "rmb": {
        document.getElementById("inRMB").innerHTML = "RMB: " + parseFloat(y * 1).toFixed(2) + "¥";
        document.getElementById("inPLN").innerHTML =
          "PLN: " + parseFloat(y * 0.62).toFixed(2) + "zł";
        document.getElementById("inUSD").innerHTML =
          "USD: " + parseFloat(y * 0.15).toFixed(2)  + "$";
        break;
      }
      case "pln": {
        document.getElementById("inRMB").innerHTML =
          "RMB: " + parseFloat(y * 1.61).toFixed(2) + "¥";
        document.getElementById("inPLN").innerHTML = "PLN: " + parseFloat(y * 1).toFixed(2)  + "zł";
        document.getElementById("inUSD").innerHTML =
          "USD: " + praseFloat(y * 0.23).toFixed(2)  + "$";
        break;
      }
      case "usd": {
        document.getElementById("inRMB").innerHTML =
          "RMB: " + parseFloat(y * 6.88).toFixed(2)  + "¥";
        document.getElementById("inPLN").innerHTML =
          "PLN: " + parseFloat(y * 4.27).toFixed(2)  + "zł";
        document.getElementById("inUSD").innerHTML = "USD: " + parseFloat(y * 1).toFixed(2)  + "$";
        break;
      }
    }
  }
