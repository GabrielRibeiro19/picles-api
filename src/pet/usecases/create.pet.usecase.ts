import { IUseCase } from "src/domain/iusecase.interface";
import CreatePetUseCaseInput from "./dtos/create.pet.usecase.input";
import CreatePetUseCaseOutput from "./dtos/create.pet.usecase.output";
import { Inject, Injectable } from "@nestjs/common";
import PetTokens from "../pet.tokens";
import IPetRepository from "../interfaces/pet.repository.interface";


@Injectable()
export default class CreatePetUseCase implements IUseCase<CreatePetUseCaseInput, CreatePetUseCaseOutput> {

  constructor(
    @Inject(PetTokens.petRepository)
    private readonly petRepository: IPetRepository
  ){}

  async run(input: CreatePetUseCaseInput): Promise<CreatePetUseCaseOutput> {
    await this.petRepository.create(input);

    const pet = await this.petRepository.create({
      name: input.name,
      type: input.type,
      bio: input.bio,
      gender: input.gender,
      size: input.size,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    return new CreatePetUseCaseOutput(pet)
  }
}
