function calCurrency() {
    let x = document.getElementById("curSelect").value;
    let y = parseFloat(document.getElementById("val").value);
    y = y.toFixed(2);
    console.log(x);
    console.log(y);
    switch (x) {
      case "rmb": {
        document.getElementById("inRMB").innerHTML = "RMB: " + y * 1 + "¥";
        document.getElementById("inPLN").innerHTML =
          "PLN: " + y * 0.62 + "zł";
        document.getElementById("inUSD").innerHTML =
          "USD: " + y * 0.15 + "$";
        break;
      }
      case "pln": {
        document.getElementById("inRMB").innerHTML =
          "RMB: " + y * 1.61 + "¥";
        document.getElementById("inPLN").innerHTML = "PLN: " + y * 1 + "zł";
        document.getElementById("inUSD").innerHTML =
          "USD: " + y * 0.23 + "$";
        break;
      }
      case "usd": {
        document.getElementById("inRMB").innerHTML =
          "RMB: " + y * 6.88 + "¥";
        document.getElementById("inPLN").innerHTML =
          "PLN: " + y * 4.27 + "zł";
        document.getElementById("inUSD").innerHTML = "USD: " + y * 1 + "$";
        break;
      }
    }
  }
