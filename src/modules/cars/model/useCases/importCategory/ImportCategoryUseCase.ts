import fs from "fs";
import csvParse from "csv-parse";

class ImportCategoryUseCase {
  execute(file: Express.Multer.File): void{
    console.log(file);
    const stream = fs.createReadStream(file.path);
    
    const parseFile = csvParse();
   //cada linha lida pegara a informação, o pipe joga o que leu para o lugar q informarmos
    stream.pipe(parseFile);

    parseFile.on("data", async(line)=>{
      console.log(line);
    });

  }
}

export { ImportCategoryUseCase };