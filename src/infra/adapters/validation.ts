import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import { ErrorMapper } from "../mappers/error-mapper";

export class Schema {
  static validate(schema: AnyZodObject) {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        await schema.parseAsync({
          body: req.body,
          query: req.query,
          params: req.params,
        });

        next();
      } catch (error) {
        const data = ErrorMapper.parse(error);
        console.log(data);
        res.status(data.status).json(data);
      }
    };
  }
}
