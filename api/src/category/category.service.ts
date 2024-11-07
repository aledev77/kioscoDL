import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  
  private readonly logger = new Logger('CategoryService');

  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) { }

  //! ----------------------POST---------------------------
  async create(createCategoryDto: CreateCategoryDto) {
    try {
      const category = this.categoryRepository.create(createCategoryDto);
      return await this.categoryRepository.save(category);
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }
  
  //! ----------------------GET---------------------------
  async findAll() {
    try {
      return await this.categoryRepository.find()
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findOne(id: number) {
  try {
    const category = await this.categoryRepository.findOneBy({ id_category: id });

    if (!category) {
      throw new NotFoundException(`Categoría con ID ${id} no fue encontrada`);
    }

    return category;
  } catch (error) {
    this.handleDBExceptions(error);
  }
}
  

  //! ----------------------UPDATE---------------------------
  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    try {
      
      const category= await this.categoryRepository.preload({
        id_category: id,
        ...updateCategoryDto
      }) 

      if ( !category ) throw new NotFoundException(`Categoria no encontrada`);

      return await this.categoryRepository.save(category)

    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  //! ----------------------DELETE---------------------------
  remove(id: number) {
    return `This action removes a #${id} category`;
  }


  //! ----------------------ERRORS---------------------------
  private handleDBExceptions(error: any) {
    // Re-lanza NotFoundException si el error es de ese tipo
    if (error instanceof NotFoundException) {
      throw error;
    }
  
    // Manejo de error específico de código de duplicación en base de datos
    if (error.code === '23505') {
      throw new BadRequestException(error.detail);
    }
    
    // Otros errores inesperados
    this.logger.error(error);
    throw new InternalServerErrorException('Unexpected error, check server logs');
  }
}
