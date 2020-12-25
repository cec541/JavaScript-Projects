function my_Dictionary() {
    var Animal = {
        Species:"Cat",
        Color:"white",
        Breed:"Siamese",
        Age:3,
        Sound:"meow!"
    };
    delete Animal.Sound;
    document.getElementById("Dictionary") .innerHTML= Animal.Sound;
}