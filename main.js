var BlueberryPieCount = ~~Cookies.get("BlueberryPie");
var ApplePieCount = ~~Cookies.get("ApplePie");
var CherryPieCount = ~~Cookies.get("CherryPie");

document.getElementById("blue").innerHTML = BlueberryPieCount;
document.getElementById("apl").innerHTML= ApplePieCount;
document.getElementById("chry").innerHTML= CherryPieCount;



// document.addEventListener("DOMContentLoaded", function(){

    function getBlueberryPie(){
        BlueberryPieCount +=1;
        Cookies.set("BlueberryPie", BlueberryPieCount);
        document.getElementById("blue").innerHTML = BlueberryPieCount;
    }

    function getApplePie(){
        ApplePieCount +=1;
        Cookies.set("ApplePie", ApplePieCount);
        document.getElementById("apl").innerHTML= ApplePieCount;
    }
    function getCherryPie(){
        CherryPieCount +=1;
        Cookies.set("CherryPie", CherryPieCount);
        document.getElementById("chry").innerHTML= CherryPieCount;
    }
    // function grandtotal(){
    //     BlueberryPieCount = 0;
    //     Cookies.set("BlueberryPie", BlueberryPieCount);
    //     document.getElementById("bluetotal").innerHTML="Blueberry Pie";

    //     ApplePieCount = 0;
    //     Cookies.set("ApplePie", ApplePieCount);
    //     document.getElementById("appletotal").innerHTML="Apple Pie";

    //     CherryPieCount = 0;
    //     Cookies.set("CherryPie", CherryPieCount);
    //     document.getElementById("cherrytotal").innerHTML="Cherry Pie";
    // }
    document.getElementById('submit').onclick = function(){
        Cookies.set( 'BlueberryPie', 0 );
        Cookies.set( 'ApplePie', 0 );
        Cookies.set( 'CherryPie', 0 );
        window.location.reload();
    };
// });