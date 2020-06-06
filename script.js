function precarica(img) {
  $(img).each(function() {
    $('<img/>')[0].src = this;
  });
}
precarica([
  'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-yellow.png',
  'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-red.png',
  'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-pink.png',
  'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-green.png',
  'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-blue.png'
]);




//get all person from same kanton and set most famous names
function getAndSetDataForLocation(location) {
	var nameListMale = new Array(25);																	// ranking to be continued, if ranking fullfilled
	var nameListFemale = new Array();
  readJsonFile();
  if (actual_JSON != null) {
    actual_JSON.forEach(
      // actual_JSON.forEach(
      function(singlePerson) {
        if (singlePerson.Kanton === location) {
          if (singlePerson.sexcode === "m") {
						nameListMale[singlePerson.rang-1] = singlePerson.nachname;
            // nameListMale.push(singlePerson.nachname);
          } else {
            nameListFemale.push(singlePerson.nachname);

          }
        }
      }


    );
		setTitle(location);
    setMostFamousNameListFemale(nameListFemale);
    setMostFamousNameListMale(nameListMale);
  }
}
function setTitle(location){
	  document.getElementById('titleMale').value = "Most famous male names: " + location;
		document.getElementById('titleFemale').value = "Most famous female names: " + location;
}



var actual_JSON;
var responseCopy;
//read and parse JsonFile
function readJsonFile() {
  loadJSON(function(response) {
    // Parse JSON string into object
    actual_JSON = JSON.parse(response);
  });
}

//get request for jsonFile
function loadJSON(callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', 'convertcsv.json', true);
  xobj.onreadystatechange = function() {
    console.log(xobj.readyState);
    if (xobj.readyState == 4 && xobj.status == "200") {
      // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}






function setMostFamousNameListFemale(nameListFemale) {
  document.getElementById('femaleElement1').value = nameListFemale[0].toString();
  document.getElementById('femaleElement2').value = nameListFemale[1].toString();
  document.getElementById('femaleElement3').value = nameListFemale[2].toString();
  document.getElementById('femaleElement4').value = nameListFemale[3].toString();
  document.getElementById('femaleElement5').value = nameListFemale[4].toString();
}

function setMostFamousNameListMale(nameListMale) {
  document.getElementById('maleElement1').value = nameListMale[0].toString();
  document.getElementById('maleElement2').value = nameListMale[1].toString();
  document.getElementById('maleElement3').value = nameListMale[2].toString();
  document.getElementById('maleElement4').value = nameListMale[3].toString();
  document.getElementById('maleElement5').value = nameListMale[4].toString();
}



/*******jQuery for external title*********/

jQuery(document).ready(function() {
  $('.aargau').mouseout(function() {
      $("#map").attr('src', 'img/basic.png');
    }),
    $('.aargau').mouseover(function() {
      $("#map").attr('src', 'img/aargau.png');
    });
  $('.appenzell_ausserrhoden').mouseout(function() {
      $("#map").attr('src', 'img/basic.png');
    }),
    $('.appenzell_ausserrhoden').mouseover(function() {
      $("#map").attr('src', 'img/appenzell_ausserrhoden.png');
    });
  $('.appenzell_innerrhoden').mouseout(function() {
      $("#map").attr('src', 'img/basic.png');
    }),
    $('.appenzell_innerrhoden').mouseover(function() {
      $("#map").attr('src', 'img/appenzell_innerrhoden.png');
    });
  $('.basel_land').mouseout(function() {
      $("#map").attr('src', 'img/basic.png');
    }),
    $('.basel_land').mouseover(function() {
      $("#map").attr('src', 'img/basel_land.png');
    });
  $('.basel_stadt').mouseout(function() {
      $("#map").attr('src', 'img/basic.png');
    }),
    $('.basel_stadt').mouseover(function() {
      $("#map").attr('src', 'img/basel_stadt.png');
    });
  $('.bern').mouseout(function() {
      $("#map").attr('src', 'img/basic.png');
    }),
    $('.bern').mouseover(function() {
      $("#map").attr('src', 'img/bern.png');
    });
  $('.freiburg').mouseout(function() {
      $("#map").attr('src', 'img/basic.png');
    }),
    $('.freiburg').mouseover(function() {
      $("#map").attr('src', 'img/freiburg.png');
    });
  $('.genf').mouseout(function() {
      $("#map").attr('src', 'img/basic.png');
    }),
    $('.genf').mouseover(function() {
      $("#map").attr('src', 'img/genf.png');
    });
  $('.glarus').mouseout(function() {
      $("#map").attr('src', 'img/basic.png');
    }),
    $('.glarus').mouseover(function() {
      $("#map").attr('src', 'img/glarus.png');
    });
  $('.grisons').mouseout(function() {
      $("#map").attr('src', 'img/basic.png');
    }),
    $('.grisons').mouseover(function() {
      $("#map").attr('src', 'img/grisons.png');
    });
  $('.jura').mouseout(function() {
      $("#map").attr('src', 'img/basic.png');
    }),
    $('.jura').mouseover(function() {
      $("#map").attr('src', 'img/jura.png');
    });
  $('.lucerne').mouseout(function() {
      $("#map").attr('src', 'img/basic.png');
    }),
    $('.lucerne').mouseover(function() {
      $("#map").attr('src', 'img/lucerne.png');
    });
  $('.neuenburg').mouseout(function() {
      $("#map").attr('src', 'img/basic.png');
    }),
    $('.neuenburg').mouseover(function() {
      $("#map").attr('src', 'img/neuenburg.png');
    });
  $('.nidwalden').mouseout(function() {
      $("#map").attr('src', 'img/basic.png');
    }),
    $('.nidwalden').mouseover(function() {
      $("#map").attr('src', 'img/nidwalden.png');
    });
  $('.obwalden').mouseout(function() {
      $("#map").attr('src', 'img/basic.png');
    }),
    $('.obwalden').mouseover(function() {
      $("#map").attr('src', 'img/obwalden.png');
    });
  $('.saint_gallen').mouseout(function() {
      $("#map").attr('src', 'img/basic.png');
    }),
    $('.saint_gallen').mouseover(function() {
      $("#map").attr('src', 'img/saint_gallen.png');
    });
  $('.schaffhausen').mouseout(function() {
      $("#map").attr('src', 'img/basic.png');
    }),
    $('.schaffhausen').mouseover(function() {
      $("#map").attr('src', 'img/schaffhausen.png');
    });
  $('.schwyz').mouseout(function() {
      $("#map").attr('src', 'img/basic.png');
    }),
    $('.schwyz').mouseover(function() {
      $("#map").attr('src', 'img/schwyz.png');
    });
  $('.solothurn').mouseout(function() {
      $("#map").attr('src', 'img/basic.png');
    }),
    $('.solothurn').mouseover(function() {
      $("#map").attr('src', 'img/solothurn.png');
    });
  $('.thurgau').mouseout(function() {
      $("#map").attr('src', 'img/basic.png');
    }),
    $('.thurgau').mouseover(function() {
      $("#map").attr('src', 'img/thurgau.png');
    });
  $('.ticino').mouseout(function() {
      $("#map").attr('src', 'img/basic.png');
    }),
    $('.ticino').mouseover(function() {
      $("#map").attr('src', 'img/ticino.png');
    });
  $('.uri').mouseout(function() {
      $("#map").attr('src', 'img/basic.png');
    }),
    $('.uri').mouseover(function() {
      $("#map").attr('src', 'img/uri.png');
    });
  $('.waadt').mouseout(function() {
      $("#map").attr('src', 'img/basic.png');
    }),
    $('.waadt').mouseover(function() {
      $("#map").attr('src', 'img/waadt.png');
    });
  $('.wallis').mouseout(function() {
      $("#map").attr('src', 'img/basic.png');
    }),
    $('.wallis').mouseover(function() {
      $("#map").attr('src', 'img/wallis.png');
    });
  $('.zug').mouseout(function() {
      $("#map").attr('src', 'img/basic.png');
    }),
    $('.zug').mouseover(function() {
      $("#map").attr('src', 'img/zug.png');
    });
  $('.zurich').mouseout(function() {
      $("#map").attr('src', 'img/basic.png');
    }),
    $('.zurich').mouseover(function() {
      $("#map").attr('src', 'img/zurich.png');
    });




});
