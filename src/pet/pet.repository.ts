import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import IPetRepository from "./interfaces/pet.repository.interface";
import { Pet } from "./schemas/pet.schema";

@Injectable()
export class PetRepository implements IPetRepository {
  constructor(
    @InjectModel(Pet.name)
    private readonly petModel: Model<Pet>
  ) { }

  async create(data: Partial<Pet>): Promise<Pet> {
    return await this.petModel.create(data)
  }

}