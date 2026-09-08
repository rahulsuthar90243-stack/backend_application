class ApiError extends Error{      //Create a custom error class for handling API errors
    constructor(
        statusCode,
        message ="Something went wrong",
        errors = [],
        stack = ""
    ){
        super(message),
        this.statusCode = statusCode,
        this.data = null;
        this.message = message,
        this.success = false,
        this.errors = errors

    }
}
