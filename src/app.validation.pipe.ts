import { ArgumentMetadata, Injectable, PipeTransform, BadRequestException } from '@nestjs/common';

@Injectable()
export class IdValidationPipe implements PipeTransform {
    transform(id: any, metadata: ArgumentMetadata) {
        const thisId = Number(id);

        if (isNaN(thisId)) {
            throw new BadRequestException('ID должен быть числом');
        }

        if (thisId <= 0) {
            throw new BadRequestException('ID должен быть положительным числом');
        }

        return thisId;
    }
}