class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time; // duration in seconds
    }
    watch() {
        console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}`);
    }
}
const arryvideo = [
    [title = "POP", uploader = "youtube", time = 300],
    [title = "Dynamite", uploader = "BTS", time = 400],
    [title = "Butter", uploader = "BTS", time = 350],
    [title = "Permission to Dance", uploader = "BTS", time = 450],
    [title = "Stay", uploader ="The Kid LAROI & Justin Bieber" , time = 1700]
];

let arryVideo =[
    new Video("POP", "youtube", 300),
    new Video("Dynamite", "BTS", 400),
    new Video("Butter", "BTS", 350),
    new Video("Permission to Dance", "BTS", 450),
    new Video("Stay", "The Kid LAROI & Justin Bieber", 200),

];

arryVideo.forEach(video => video.watch());
console.log(arryVideo);

