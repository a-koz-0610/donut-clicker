class DonutMaker {
  constructor(numDonuts, numAutoClickers) {
    this.numDonuts = numDonuts;
    this.numAutoClickers = numAutoClickers;
  }

  addDonut() {
    if (this.numAutoClickers === 0) {
      this.numDonuts++;
    } else {
      this.numDonuts = this.numDonuts++ + this.numAutoClickers;
    }
  }

  addAutoClicker() {
    if (this.numDonuts >= 100) {
      this.numAutoClickers++;
      this.numDonuts -= 100;
    }
  }
}

export default DonutMaker;
