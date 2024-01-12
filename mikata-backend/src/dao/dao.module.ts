import { Module, Global } from "@nestjs/common";
import { DaoService } from "./dao.service";

@Global()
@Module({
    providers: [DaoService],
    exports: [DaoService]
})
export class DaoModule {}