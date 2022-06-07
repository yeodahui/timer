function renderPage(root) {
  const docFrag = document.createDocumentFragment();

  const wrapper = document.createElement("div");
  wrapper.setAttribute("class", "wrapper");

  // header, main, footer
  const header = document.createElement("header");
  header.setAttribute("class", "header");
  const main = document.createElement("main");
  main.setAttribute("class", "main");
  const footer = document.createElement("footer");
  footer.setAttribute("class", "footer");

  wrapper.append(header, main, footer);
  docFrag.append(wrapper);

  // header
  const h1 = document.createElement("h1");
  h1.setAttribute("class", "heading");
  const logo = document.createElement("img");
  logo.setAttribute("class", "logo");
  logo.setAttribute("src", "images/weniv-logo.svg");
  logo.setAttribute("alt", "weniv");
  h1.appendChild(logo);
  header.appendChild(h1);

  // main
  const timer = document.createElement("div");
  timer.setAttribute("class", "container-timer");

  const title = document.createElement("h2");
  title.setAttribute("class", "title-timer");
  title.textContent = "timer";

  const hr = document.createElement("hr");
  hr.setAttribute("class", "contour");

  // timer
  const timeSet = document.createElement("div");
  timeSet.setAttribute("class", "container-timeset");

  const boxName = ["HRS", "MIN", "SEC"];

  for (const i of boxName) {
    const timeBox = document.createElement("div");
    timeBox.setAttribute("class", "container-timebox");

    const label = document.createElement("label");
    label.setAttribute("class", "title-timebox");
    label.setAttribute("for", `${i}`);
    label.textContent = i;

    const div = document.createElement("div");
    div.setAttribute("class", "box-timebox");

    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("value", "00");
    input.setAttribute("id", `${i}`);
    input.setAttribute("class", "input-timebox");

    div.appendChild(input);

    timeBox.append(label, div);
    timeSet.append(timeBox);
  }

  // button
  const buttonContainer = document.createElement("div");
  buttonContainer.setAttribute("class", "container-button");

  const buttonLeft = document.createElement("button");
  buttonLeft.setAttribute("type", "button");
  buttonLeft.setAttribute("class", "button-start-disabled");
  buttonLeft.textContent = "START";

  const buttonRight = document.createElement("button");
  buttonRight.setAttribute("type", "button");
  buttonRight.setAttribute("class", "button-reset-disabled");
  buttonRight.textContent = "RESET";

  buttonContainer.append(buttonLeft, buttonRight);

  timer.append(title, hr, timeSet, buttonContainer);

  main.append(timer);

  root.appendChild(docFrag);
}
