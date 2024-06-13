export class ErrorMapper {
  static map(error: any) {
    return {
      message: error?.message,
      stack: error?.stack,
    };
  }
}
