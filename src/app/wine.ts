export class Wine {

  private readonly _alcoholPercentage: string;
  private readonly _grapeVariety: string;
  private readonly _wineType: string;
  private readonly _wineDryness: string;
  private readonly _wineOrigin: string;

  constructor(alcoholPercentage: string, grapeVariety: string, wineType: string, wineDryness: string, wineOrigin: string) {

    this._alcoholPercentage = alcoholPercentage;
    this._grapeVariety = grapeVariety;
    this._wineType = wineType;
    this._wineDryness = wineDryness;
    this._wineOrigin = wineOrigin;
  }

  // for debug purposes
  printWine(): string {
    return this._alcoholPercentage + '\n'
      + this._grapeVariety + '\n'
      + this._wineType + '\n'
      + this._wineDryness + '\n'
      + this._wineOrigin + '\n';
  }


  get alcoholPercentage(): string {
    return this._alcoholPercentage;
  }

  get grapeVariety(): string {
    return this._grapeVariety;
  }

  get wineType(): string {
    return this._wineType;
  }

  get wineDryness(): string {
    return this._wineDryness;
  }

  get wineOrigin(): string {
    return this._wineOrigin;
  }
}
