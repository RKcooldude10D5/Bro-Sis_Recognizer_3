Webcam.set({
    width: 450,
    height: 350,
    image_format: 'png',
    png_quality: 100
});
camera = document.getElementById("cam");
Webcam.attach('#cam');
function takepicture(){
    Webcam.snap(function(data_uri){
        document.getElementById("camresult").innerHTML='<img id="imgtaken" src="' + data_uri + '"/>';
    });
}
console.log('ml5 version:', ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/O6ePMXPdX/.json', modelLoaded);
function check(){
    img=document.getElementById("imgtaken");
    classifier.classify(img, gotResult);
}
function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("personname").innerHTML=results[0].label;
        document.getElementById("personaccuracy").innerHTML=results[0].confidence.toFixed(2);    }
}
function modelLoaded(){
    console.log("Model Loaded");
}