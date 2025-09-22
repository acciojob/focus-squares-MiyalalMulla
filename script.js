//your JS code here. If required.
const myDivs = document.querySelectorAll(".square");
myDivs.forEach((myDiv) => {
    myDiv.addEventListener("mouseover", () => {
        myDivs.forEach((e) => {
            if(e==myDiv){
				  e.style.backgroundColor = "#E6E6FA";
			}
			else{
				e.style.backgroundColor = "#6F4E37"
			}
        });
		
    });
	myDiv.addEventListener("mouseout", () => {
        myDivs.forEach((e) => {
            e.style.backgroundColor = "#E6E6FA";
        });
    });
});