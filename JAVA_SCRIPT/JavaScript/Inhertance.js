console.log("Program to demonstrate Class");

class Car
{
    startEngine()
    {
        console.log("Start Engine");
    }

    stopEngine()
    {
        console.log("Stop Engine");
    }
}


class Tyota extends Car 
{
    carModel() {
        console.log("2021 New Model");
    }

    startEngine() {
        console.log("2021 Car Engines are smoorth");
    }
}


class KIA extends Car 
{
    carModel() {
        console.log("2020 New Model");
    }

    startEngine() {
        console.log("2020 Car Engines are smoorth");
    }
}


let toyotaCar = new Tyota();
toyotaCar.startEngine();
toyotaCar.stopEngine();
toyotaCar.carModel();


let kiaCar = new KIA();
kiaCar.startEngine();
kiaCar.stopEngine();
kiaCar.carModel()