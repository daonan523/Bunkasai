var Switch = document.getElementById("SW") ;
var Floor = 0 ;
var Blocks = [];
var BlockP = [];
var MapList = [];
for ( i=0 ; i < 52 ; i++ ) {
    Blocks.push(document.getElementById("B"+String( i )))
    BlockP.push("<span>")
};
var Corridor = [];
for ( i=0 ; i < 3 ; i++ ) {
    Corridor.push(document.getElementById("CO"+String( i+1 )))
};
var DNotE = [];
for ( i=0 ; i < 4 ; i++ ) {
    DNotE.push(document.getElementById("NE"+String( i+1 )))
};
function FSW() {
    Floor = ( Floor+1 )%2
    Switch.innerHTML = "<span>"+String( Floor+1 )+"F</span>"
    for ( i=0 ; i < Blocks.length ; i++ ) {
        if (Blocks[i].classList.contains("VV")) {
            Blocks[i].classList.remove("VV")
            Blocks[i].classList.add("HD")
        } else if (Blocks[i].classList.contains("HD")) {
            Blocks[i].classList.remove("HD")
            Blocks[i].classList.add("VV")
        }
    }
    for ( i=0 ; i < Corridor.length ; i++ ) {
        if (Corridor[i].classList.contains("VV")) {
            Corridor[i].classList.remove("VV")
            Corridor[i].classList.add("HD")
        } else if (Corridor[i].classList.contains("HD")) {
            Corridor[i].classList.remove("HD")
            Corridor[i].classList.add("VV")
        }
    }
    for ( i=0 ; i < DNotE.length ; i++ ) {
        if (DNotE[i].classList.contains("VV")) {
            DNotE[i].classList.remove("VV")
            DNotE[i].classList.add("HD")
        } else if (DNotE[i].classList.contains("HD")) {
            DNotE[i].classList.remove("HD")
            DNotE[i].classList.add("VV")
        }
    }
}
(async function getData() {
    const url = "../JavaS/database.json";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`レスポンスステータス: ${response.status}`);
      }
      const json = await response.json();
      MapList = json.MapList;
      for ( i=1 ; i < MapList.length ; i++ ) {
        for ( j=0 ; j < MapList[i][1].length ; j++ ) {
            if ( BlockP[MapList[i][1][j]] != "<span>" ) {
                BlockP[MapList[i][1][j]] += "<br>"
            }
            BlockP[MapList[i][1][j]] += String( MapList[i][0] )
        }
      }
      for ( i=0 ; i < Blocks.length ; i++ ) {
        console.log(BlockP[i])
        Blocks[i].innerHTML = BlockP[i] + "</span>"
      }
    } catch (error) {
      console.error(error.message);
    }
  })();
