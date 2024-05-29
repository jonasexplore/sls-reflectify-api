import { HttpStatus } from "@/common/enums";
import { ZodError } from "zod";

export class ErrorMapper {
  static parse(error: unknown) {
    if (error instanceof ZodError) {
      const details = error.errors.map((issue: any) => ({
        message: `${issue.path.join(".")} is ${issue.message}`,
      }));

      return {
        error: "Validation Error",
        status: HttpStatus.BAD_REQUEST,
        details,
      };
    }

    if (!(error instanceof Error)) {
      return {
        error: "Unknown Error",
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        details: [{ message: error }],
      };
    }

    const details = [{ message: error.message }];

    return {
      error: "No Mapped Error",
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      details,
    };
  }
}
