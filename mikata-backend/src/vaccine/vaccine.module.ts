import { Module } from "@nestjs/common";
import { VaccineController } from "./vaccine.controller";
import { VaccineService } from "./vaccine.service";

@Module({
    controllers: [VaccineController],
    providers: [VaccineService]
})
export class VaccineModule {}