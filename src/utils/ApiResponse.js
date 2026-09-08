class apiResponse{         //Create a custom response class for handling API responses
    constructor(
        statusCode,
        data,
        message= "success",
    ){
        this.data = data,
        this.message = message,
        this.statusCode = statusCode,
        this.success = statusCode < 400
    }
}