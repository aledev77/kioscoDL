import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateCategoryDto {

    @IsNotEmpty()
    @IsString()
    img: string;

    @IsNotEmpty()
    @IsString()
    name_category: string;

    @IsNotEmpty()
    @IsString()
    desc_category: string;

    @IsNotEmpty()
    @IsBoolean()
    is_active: boolean;

}
