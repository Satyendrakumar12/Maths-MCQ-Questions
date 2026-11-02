let h2 = document.querySelector("#Question");
let div = document.querySelector("#option");
let next = document.querySelector("#next");
let prev = document.querySelector("#prev");

let geTData = async () => {
  try {
    let res = await fetch(
      "https://learndiag.com/api/v1/questions/random?count=10&subtest=5003",
    );

    let resData = await res.json();
    let resItems = resData.items;

    // h2.textContent = `Q. ${resItems[0].question}`;
    /*
    resItems[0].options.forEach((option) => {
      let p = document.createElement("p");
      p.textContent = option;
      div.append(p);
    });

    console.log(resItems);
    */

    let curentIndex = 0;

    function showQuestion() {
      let items = resItems[curentIndex];
      h2.textContent = `Q. ${items.question}`;

      div.innerHTML = "";

      items.options.forEach((option) => {
        let p = document.createElement("p");
        p.textContent = option;
        div.append(p);
      });
    }

    showQuestion();
    console.log(resItems);

    next.addEventListener("click", () => {
      if (curentIndex < resItems.length - 1) {
        curentIndex++;
        showQuestion();
      }
    });

    prev.addEventListener("click", () => {
      if (curentIndex > 0) {
        curentIndex--;
        showQuestion();
      }
    });

  } catch (error) {
    console.log("Error");
  }
};

geTData();
