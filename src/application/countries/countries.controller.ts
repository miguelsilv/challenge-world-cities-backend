import { Controller, Get } from "@nestjs/common";
import { GetCountriesUsecase } from "./usecases/get-countries.usecase";

@Controller()
export class CountriesController {
  constructor(private readonly getCountriesUseCase: GetCountriesUsecase) {}

  @Get()
  public getAllCountries() {
    return this.getCountriesUseCase.execute();
  }
}
