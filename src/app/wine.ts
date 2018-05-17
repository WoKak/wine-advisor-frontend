export class Wine {

  private readonly alcoholPercentage: string;
  private readonly grapeVariety: string;
  private readonly wineType: string;
  private readonly wineDryness: string;
  private readonly wineOrigin: string;

  constructor(alcoholPercentage: string, grapeVariety: string, wineType: string, wineDryness: string, wineOrigin: string) {

    this.alcoholPercentage = alcoholPercentage;
    this.grapeVariety = grapeVariety;
    this.wineType = wineType;
    this.wineDryness = wineDryness;
    this.wineOrigin = wineOrigin;
  }

  // for debug purposes
  printWine(): string {
    return this.alcoholPercentage + '\n'
      + this.grapeVariety + '\n'
      + this.wineType + '\n'
      + this.wineDryness + '\n'
      + this.wineOrigin + '\n';
  }
}
