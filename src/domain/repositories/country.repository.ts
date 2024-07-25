// src/domain/services/country-repository.service.ts

import { Injectable } from "@nestjs/common";
import { Country } from "../models/country.model";
import { DataSource } from "../data-source.interface";

@Injectable()
export class CountryRepository {
  constructor(private readonly dataSource: DataSource<Country>) {}

  public createCountry(country: Country): Promise<Country> {
    return this.dataSource.create(country);
  }

  public getCountryById(id: string): Promise<Country | null> {
    return this.dataSource.findById(id);
  }

  public getAllCountries(): Promise<Country[]> {
    return this.dataSource.findAll();
  }

  public updateCountry(
    id: string,
    updatedData: Partial<Country>,
  ): Promise<Country | null> {
    return this.dataSource.update(id, updatedData);
  }

  public deleteCountry(id: string): Promise<boolean> {
    return this.dataSource.delete(id);
  }
}
