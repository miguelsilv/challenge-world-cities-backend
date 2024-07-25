// src\application\countries\usecases\get-country-cities.usecase.ts

import { Injectable } from "@nestjs/common";
import { CountryRepository } from "src/domain/repositories/country.repository";
import { Country } from "src/domain/models/country.model";
import { UseCase } from "src/commom/base/usecase";

@Injectable()
export class GetCountriesUsecase implements UseCase<Country[]> {
  constructor(private readonly countryRepository: CountryRepository) {}

  async execute(): Promise<Country[]> {
    return this.countryRepository.getAllCountries();
  }
}
