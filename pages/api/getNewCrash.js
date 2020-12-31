export default (req, res) => {

    var zufallsnummer = Math.floor(Math.random()*Math.pow(2, 52))
    var crashmultiplikator = ((100*Math.pow(2,52)-zufallsnummer) / (Math.pow(2, 52) - zufallsnummer)) / 100;

    res.statusCode = 200
    res.json({'mp':crashmultiplikator})
  }
  