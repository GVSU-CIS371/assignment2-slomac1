import "./style.scss";
// import { setupCounter } from "./counter.ts";

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
const bases: Record<string, string> = {
  blackTea: "#8B4513",
  greenTea: "#C8E6C9",
  coffee: "#6F4E37",
};

const creamers: Record<string, string> = {
  milk: "AliceBlue",
  cream: "#F5F5DC",
  half: "#FFFACD",
};

const syrups: Record<string, string> = {
  vanilla: "#FFEFD5",
  caramel: "#DAA520",
  hazelnut: "#6B4423",
};

function applyTemperature(input: HTMLInputElement): void {
  const container = document.getElementById(
    "condensation",
  ) as HTMLDivElement | null;
  if (!container) return;

  const children = container.children;

  for (let i = 0; i < children.length; i++) {
    const child = children[i] as HTMLElement;

    if (input.value === "hot") {
      child.className = "stream";
    } else {
      child.className = "flake";
    }
  }
}

function applyBase(input: HTMLInputElement): void {
  const baseElements = document.getElementsByClassName("base");

  if (baseElements.length === 0) return;

  const baseDiv = baseElements[0] as HTMLDivElement;

  const color = bases[input.value];
  if (!color) return;

  baseDiv.style.backgroundColor = color;
}

function applyCream(input: HTMLInputElement): void {
  const creamElements = document.getElementsByClassName("foam");

  if (creamElements.length === 0) return;

  const color = creamers[input.value];
  if (!color) return;
  for (let i = 0; i < creamElements.length; i++) {
    const element = creamElements[i] as HTMLDivElement;
    element.style.backgroundColor = color;
  }
}

function applySyrup(input: HTMLInputElement): void {
  const syrupElements = document.getElementsByClassName("syrup");

  if (syrupElements.length === 0) return;

  const color = syrups[input.value];
  if (!color) return;
  for (let i = 0; i < syrupElements.length; i++) {
    const element = syrupElements[i] as HTMLDivElement;
    element.style.setProperty("--syrup-color", color);
  }
}

function setupSyrupListeners(): void {
  // TODO: implement this function
  const syrupRadios = document.querySelectorAll('input[name="syrup"]');
  syrupRadios.forEach((radio) => {
    radio.addEventListener("change", (event) => {
      const target = event.target as HTMLInputElement;
      applySyrup(target);
    });
  });
  const checkedSyrup = document.querySelector('input[name="syrup"]:checked') as HTMLInputElement | null;
  if (checkedSyrup) {
    applySyrup(checkedSyrup);
  }
}

setupSyrupListeners();

function setupCreamListeners(): void {
  // TODO: implement this function
  const creamRadios = document.querySelectorAll('input[name="cream"]');
  creamRadios.forEach((radio) => {
    radio.addEventListener("change", (event) => {
      const target = event.target as HTMLInputElement;
      applyCream(target);
    });
  });
  const checkedCream = document.querySelector('input[name="cream"]:checked') as HTMLInputElement | null;
  if (checkedCream) {
    applyCream(checkedCream);
  }
}

setupCreamListeners();

function setupTemperatureListeners(): void {
  // TODO: implement this function
  const tempRadios = document.querySelectorAll('input[name="temperature"]');
  tempRadios.forEach((radio) => {
    radio.addEventListener("change", (event) => {
      const target = event.target as HTMLInputElement;
      applyTemperature(target);
    });
  });
  const checkedTemp = document.querySelector('input[name="temperature"]:checked') as HTMLInputElement | null;
  if (checkedTemp) {
    applyTemperature(checkedTemp);
  }
}

setupTemperatureListeners();

function setupBaseListeners(): void {
  // TODO: implement this function
  const baseRadios = document.querySelectorAll('input[name="base"]');
  baseRadios.forEach((radio) => {
    radio.addEventListener("change", (event) => {
      const target = event.target as HTMLInputElement;
      applyBase(target);
    });
  });
  const checkedBase = document.querySelector('input[name="base"]:checked') as HTMLInputElement | null;
  if (checkedBase) {
    applyBase(checkedBase);
  }
}

setupBaseListeners();
