const info = [
    {
        city: "Rostov-on-Don <br> LCD admiral",
        area: "81 m2",
        time: "3.5 months",
        Repair_Cost: "Upon request",
        img:"imageForSlider1.png"
    },
    {
        city: "Sochi <br> Thieves",
        area: "105 m2",
        time: "4 months",
        Repair_Cost: "Upon request",
        img:"imageForSlider2.png"
    },
    {
        city: "Rostov-on-Don <br> Patriotic",
        area: "93 m2",
        time: "3 months",
        Repair_Cost: "Upon request",
        img:"imageForSlider3.png"
    }
];




const img = document.querySelector("#slider");
const city = document.querySelector("#city");
const area = document.querySelector("#area");
const time = document.querySelector("#time");
const cost = document.querySelector("#cost");
const circles = document.querySelectorAll("#dot");
const link = document.querySelectorAll("#link");

let currentIndex = 0;

const setInfo = (index) => {
    city.innerHTML = info[index].city;
    area.innerHTML = info[index].area;
    time.innerHTML = info[index].time;
    img.style.backgroundImage = `url(${info[index].img})`;

    link.forEach((element)=>{
        element.classList.remove('active')
    });
    link[index].classList.add('active') 
};


const setActiveCircle=(circles,circle)=>{
    circles.forEach((circle)=>{
        circle.classList.remove("circle-white")
    });
    circle.classList.add("circle-white")
};

circles.forEach(function(circle,i){
    circle.addEventListener('click',()=>{
        setActiveCircle(circles,circle);
        currentIndex = i;
        setInfo(currentIndex);
    })
})


link.forEach(function(element,i){
    element.addEventListener('click',() =>{
        currentIndex = i;
        setInfo(currentIndex);
        setActiveCircle(circles,circles[currentIndex])
    })
});

const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const prevMobile = document.querySelector('#mobileSliderPrev')
const nextMobile = document.querySelector("#mobileSliderNext");

setNextSlide = () => {
    if (currentIndex === info.length - 1) {
		currentIndex = 0;
	} else {
		currentIndex += 1;
	}
	setInfo(currentIndex);
	setActiveCircle(circles,circles[currentIndex])
};

setPrevSlide = () => {
	if (currentIndex === 0) {
		currentIndex = info.length - 1;
	} else {
		currentIndex -= 1;
	}
	setInfo(currentIndex);
	setActiveCircle(circles,circles[currentIndex])
};

nextMobile.addEventListener('click', setNextSlide);
prevMobile.addEventListener('click', setPrevSlide);

next.addEventListener('click', setNextSlide);
prev.addEventListener('click', setPrevSlide);

