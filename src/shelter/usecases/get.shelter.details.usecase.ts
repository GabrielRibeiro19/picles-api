import { IUseCase } from "src/domain/iusecase.interface";
import GetShelterDetailsUseCaseOutput from "./dtos/get.shelter.details.usecase.output";

export default class GetShelterDetailsUseCase implements IUseCase<null, GetShelterDetailsUseCaseOutput> {
  run(input: null): Promise<GetShelterDetailsUseCaseOutput> {
    return Promise.resolve(new GetShelterDetailsUseCaseOutput({
      shelterName: 'Abrigo Bigo',
      shelterEmail: 'abb@gmail.com',
      shelterPhone: '123456789',
      shelterWhatsapp: '123456789',
      createdAt: new Date(),
      updatedAt: new Date(),
    }))
  }
}
