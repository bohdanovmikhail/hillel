class setCache {
  constructor(input) {
    this._input = input;
    
    this.updateCache();
    this.setInputValue();
  }

  updateCache(newValue) {
      localStorage.setItem(this._input.id, this._input.value);
    }

  setInputValue() {
    let inputA = this._input;

    const getAllInputs = document.querySelectorAll('input');

    for (let i=0; i < getAllInputs.length; i++) {
      if (getAllInputs[i].id in localStorage) {
        getAllInputs[i].value = localStorage.getItem(getAllInputs[i].id);
      }
    }
  }

}


function getValueFromInput(event) {

  new setCache(event.target);

}
